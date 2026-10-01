#!/usr/bin/env python3
"""
MVP MEDIA Editorial Base Edit
-----------------------------
Purpose:
    Prepare a photo for an AI/editorial retouch by doing a conservative technical pass:
    - white balance
    - exposure normalization
    - controlled local contrast
    - vibrance without oversaturating skin
    - subject separation with GrabCut
    - slight background softening
    - subject-only sharpening
    - optional 4:5 / custom aspect crop

This does NOT do beauty retouching, body reshaping, face replacement, or generative edits.
Use the resulting image as the base file for an AI image editor with the supplied prompt.

Usage:
    python mvp_editorial_edit.py input.jpg output.jpg
    python mvp_editorial_edit.py input.jpg output.jpg --aspect 4:5
    python mvp_editorial_edit.py input.jpg output.jpg --aspect 4:5 --subject-strength 0.32

Dependencies:
    pip install opencv-python numpy
"""

import argparse
import cv2
import numpy as np


def gray_world_white_balance(bgr, strength=0.55):
    """Gentle gray-world white balance blended with original."""
    img = bgr.astype(np.float32)
    means = img.reshape(-1, 3).mean(axis=0)
    gray = float(np.mean(means))
    gains = gray / (means + 1e-6)
    balanced = np.clip(img * gains, 0, 255)
    out = img * (1.0 - strength) + balanced * strength
    return np.clip(out, 0, 255).astype(np.uint8)


def normalize_exposure(bgr, target_median=132, max_gain=1.22, min_gain=0.82):
    """Normalize luminance gently using LAB."""
    lab = cv2.cvtColor(bgr, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    median = np.median(l)
    if median < 1:
        return bgr
    gain = np.clip(target_median / median, min_gain, max_gain)
    l2 = np.clip(l.astype(np.float32) * gain, 0, 255).astype(np.uint8)
    return cv2.cvtColor(cv2.merge([l2, a, b]), cv2.COLOR_LAB2BGR)


def gentle_clahe(bgr, strength=0.24):
    """Adds local contrast without producing an HDR look."""
    lab = cv2.cvtColor(bgr, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=1.6, tileGridSize=(8, 8))
    enhanced = clahe.apply(l)
    l_mix = cv2.addWeighted(l, 1.0 - strength, enhanced, strength, 0)
    return cv2.cvtColor(cv2.merge([l_mix, a, b]), cv2.COLOR_LAB2BGR)


def vibrance(bgr, amount=0.12):
    """
    Raises saturation more strongly in low-saturation regions.
    This is safer than a flat saturation boost.
    """
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV).astype(np.float32)
    s = hsv[:, :, 1]
    boost = (255.0 - s) / 255.0
    hsv[:, :, 1] = np.clip(s + (255.0 * amount * boost), 0, 255)
    return cv2.cvtColor(hsv.astype(np.uint8), cv2.COLOR_HSV2BGR)


def protect_reds(bgr, max_sat=235):
    """Stops intense reds/neons from clipping into flat blocks of color."""
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
    h, s, v = cv2.split(hsv)

    # OpenCV hue: 0-179. Red wraps around both ends.
    red_mask = ((h <= 8) | (h >= 172)) & (s > 110)
    s2 = s.copy()
    s2[red_mask] = np.minimum(s2[red_mask], max_sat)

    return cv2.cvtColor(cv2.merge([h, s2, v]), cv2.COLOR_HSV2BGR)


def make_subject_mask(bgr):
    """
    Center-weighted GrabCut subject mask.
    Works best when the person occupies the central 50-70% of the frame.
    """
    h, w = bgr.shape[:2]
    mask = np.zeros((h, w), np.uint8)

    # Conservative rectangle; avoids image edges.
    x = int(w * 0.18)
    y = int(h * 0.08)
    rw = int(w * 0.64)
    rh = int(h * 0.86)
    rect = (x, y, rw, rh)

    bgd = np.zeros((1, 65), np.float64)
    fgd = np.zeros((1, 65), np.float64)

    try:
        cv2.grabCut(bgr, mask, rect, bgd, fgd, 6, cv2.GC_INIT_WITH_RECT)
        binary = np.where(
            (mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD), 1.0, 0.0
        ).astype(np.float32)
    except cv2.error:
        # Fallback: center ellipse
        binary = np.zeros((h, w), np.float32)
        cv2.ellipse(
            binary,
            (w // 2, h // 2),
            (int(w * 0.28), int(h * 0.43)),
            0, 0, 360, 1.0, -1
        )

    # Feather the mask for natural blending.
    sigma = max(7, int(min(h, w) * 0.012))
    binary = cv2.GaussianBlur(binary, (0, 0), sigmaX=sigma, sigmaY=sigma)
    return np.clip(binary, 0, 1)


def subject_pop(bgr, mask, strength=0.28):
    """Subtle subject lift and sharpening while preserving realism."""
    img = bgr.astype(np.float32)

    # Slight luminance lift.
    lifted = np.clip(img * (1.0 + strength * 0.12) + strength * 3.5, 0, 255)

    # Controlled unsharp mask.
    blur = cv2.GaussianBlur(lifted.astype(np.uint8), (0, 0), sigmaX=1.15)
    sharp = cv2.addWeighted(lifted.astype(np.uint8), 1.22, blur, -0.22, 0)

    m = mask[:, :, None]
    out = img * (1.0 - m) + sharp.astype(np.float32) * m
    return np.clip(out, 0, 255).astype(np.uint8)


def soften_background(bgr, mask, amount=0.16):
    """Reduces visual competition from neon/background details."""
    blur = cv2.GaussianBlur(bgr, (0, 0), sigmaX=1.8)
    m = mask[:, :, None]
    bg_mask = 1.0 - m
    softened = (
        bgr.astype(np.float32) * (1.0 - bg_mask * amount)
        + blur.astype(np.float32) * (bg_mask * amount)
    )
    return np.clip(softened, 0, 255).astype(np.uint8)


def crop_to_aspect(img, aspect):
    """
    Center crop to ratio like '4:5', '3:4', '2:3', '16:9'.
    Keeps maximum pixels.
    """
    if not aspect:
        return img
    aw, ah = [float(x) for x in aspect.split(":")]
    target = aw / ah

    h, w = img.shape[:2]
    current = w / h

    if abs(current - target) < 0.001:
        return img

    if current > target:
        new_w = int(h * target)
        x0 = max(0, (w - new_w) // 2)
        return img[:, x0:x0 + new_w]
    else:
        new_h = int(w / target)
        y0 = max(0, (h - new_h) // 2)
        return img[y0:y0 + new_h, :]


def final_tone(bgr):
    """Very subtle editorial finish: restrained blacks and highlights."""
    rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB).astype(np.float32) / 255.0

    # Gentle S-curve.
    rgb = np.clip(
        rgb + 0.055 * (rgb - 0.5) * (1.0 - np.abs(2.0 * rgb - 1.0)),
        0, 1
    )

    # Soft highlight rolloff.
    rgb = 1.0 - np.power(1.0 - rgb, 1.035)

    out = (np.clip(rgb, 0, 1) * 255).astype(np.uint8)
    return cv2.cvtColor(out, cv2.COLOR_RGB2BGR)


def edit_image(src, dst, aspect="4:5", subject_strength=0.28):
    img = cv2.imread(src, cv2.IMREAD_COLOR)
    if img is None:
        raise FileNotFoundError(f"Could not open: {src}")

    # Technical base.
    img = gray_world_white_balance(img, strength=0.46)
    img = normalize_exposure(img, target_median=132)
    img = gentle_clahe(img, strength=0.22)
    img = vibrance(img, amount=0.10)
    img = protect_reds(img, max_sat=232)

    # Subject/background separation.
    mask = make_subject_mask(img)
    img = soften_background(img, mask, amount=0.14)
    img = subject_pop(img, mask, strength=subject_strength)

    # Editorial tone + crop.
    img = final_tone(img)
    img = crop_to_aspect(img, aspect)

    # Save high quality JPEG.
    cv2.imwrite(dst, img, [int(cv2.IMWRITE_JPEG_QUALITY), 96])


def main():
    p = argparse.ArgumentParser()
    p.add_argument("input")
    p.add_argument("output")
    p.add_argument("--aspect", default="4:5",
                   help="Crop ratio, e.g. 4:5, 3:4, 2:3, 16:9. Use '' to disable.")
    p.add_argument("--subject-strength", type=float, default=0.28,
                   help="Typical range 0.18-0.38. Avoid going above 0.45.")
    args = p.parse_args()

    edit_image(
        args.input,
        args.output,
        aspect=args.aspect if args.aspect else None,
        subject_strength=args.subject_strength
    )
    print(f"Saved: {args.output}")


if __name__ == "__main__":
    main()
