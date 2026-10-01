#!/usr/bin/env python3
"""
MVP MEDIA RAW to JPEG converter
-------------------------------
Converts every camera RAW file in a folder (and its subfolders) to JPEG, unattended.

Every RAW file (Canon CR2/CR3, Nikon NEF, Sony ARW, DNG, Fujifilm RAF, Olympus ORF,
Panasonic RW2, Samsung SRW, Pentax PEF) carries the full-size JPEG the camera made when
the shot was taken. This program copies that JPEG out byte for byte (no re-compression,
so no quality loss), sets the correct rotation, and removes location and camera data.
It does not re-develop the sensor data the way Lightroom does.

    - Keeps the subfolder layout and file names (IMG_1234.CR3 becomes IMG_1234.jpg).
    - Safe to stop and start again: files already converted are skipped.
    - --watch keeps running and converts new RAW files as they appear (for example while
      a memory card is still copying).
    - Keeps the computer awake while it works (Windows and Mac).
    - Writes conversion-report.txt in the output folder when it finishes.

Needs only Python 3.8 or newer (no extra packages).

Usage:
    Double-click "Convert RAW (Windows).bat" or "Convert RAW (Mac).command", or:
    python mvp_raw_convert.py RAW_FOLDER OUTPUT_FOLDER
    python mvp_raw_convert.py RAW_FOLDER OUTPUT_FOLDER --watch
"""

import argparse
import json
import os
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

RAW_EXTENSIONS = {'.cr2', '.cr3', '.nef', '.arw', '.dng', '.raf', '.orf', '.rw2', '.srw', '.pef'}
SMALL_PREVIEW = 2400  # long edge below this means the camera only stored a reduced copy
SETTINGS = Path(__file__).with_name('raw-converter-settings.json')


# ---------- Finding the embedded JPEG.

def be16(d, p):
    return (d[p] << 8) | d[p + 1]


def parse_jpeg(d, start):
    """Walk one JPEG starting at `start`. Returns its size and extent, or None if it is not a
    complete baseline/progressive JPEG (RAW sensor data stored as lossless JPEG is skipped)."""
    p, n, w, h, exif = start + 2, len(d), 0, 0, None
    while p + 4 <= n and d[p] == 0xFF:
        m = d[p + 1]
        if m == 0xFF:
            p += 1
            continue
        length = be16(d, p + 2)
        if m == 0xE1 and d[p + 4:p + 10] == b'Exif\x00\x00':
            exif = p + 10
        if m in (0xC0, 0xC1, 0xC2):
            h, w = be16(d, p + 5), be16(d, p + 7)
        elif 0xC3 <= m <= 0xCF and m not in (0xC4, 0xC8, 0xCC):
            return None
        if m == 0xDA:
            # Entropy-coded data: 0xFF is always followed by 0x00, a restart marker, or fill.
            q = p + 2 + length
            while True:
                q = d.find(b'\xff', q)
                if q < 0 or q + 1 >= n:
                    return None
                nxt = d[q + 1]
                if nxt == 0x00 or 0xD0 <= nxt <= 0xD7:
                    q += 2
                elif nxt == 0xFF:
                    q += 1
                elif nxt == 0xD9 and w and h:
                    return {'start': start, 'end': q + 2, 'w': w, 'h': h, 'exif': exif}
                else:
                    return None
        p += 2 + length
    return None


def largest_jpeg(d):
    best, i = None, 0
    while True:
        i = d.find(b'\xff\xd8\xff', i)
        if i < 0:
            return best
        found = parse_jpeg(d, i)
        if found:
            if not best or found['w'] * found['h'] > best['w'] * best['h']:
                best = found
            i = found['end']
        else:
            i += 2


# ---------- Rotation.

def tiff_orientation(d, base):
    """Orientation tag (0x0112) from the first IFD of a TIFF structure at `base`; 0 if absent."""
    if base < 0 or base + 8 > len(d):
        return 0
    order = d[base:base + 2]
    if order not in (b'II', b'MM'):
        return 0
    bo = 'little' if order == b'II' else 'big'
    ifd = base + int.from_bytes(d[base + 4:base + 8], bo)
    if ifd + 2 > len(d):
        return 0
    count = int.from_bytes(d[ifd:ifd + 2], bo)
    for k in range(count):
        e = ifd + 2 + 12 * k
        if e + 12 > len(d):
            break
        if int.from_bytes(d[e:e + 2], bo) == 0x0112:
            value = int.from_bytes(d[e + 8:e + 10], bo)
            return value if 1 <= value <= 8 else 0
    return 0


def raw_orientation(d):
    """TIFF-based RAWs start with the TIFF header; Canon CR3 keeps it in its CMT1 box."""
    direct = tiff_orientation(d, 0)
    if direct:
        return direct
    cmt1 = d.find(b'CMT1', 0, 262144)
    return tiff_orientation(d, cmt1 + 4) if cmt1 >= 0 else 0


def exif_with_orientation(value):
    """A minimal EXIF block that holds nothing but the rotation."""
    tiff = (b'MM\x00\x2a\x00\x00\x00\x08' + (1).to_bytes(2, 'big')
            + (0x0112).to_bytes(2, 'big') + (3).to_bytes(2, 'big') + (1).to_bytes(4, 'big')
            + value.to_bytes(2, 'big') + b'\x00\x00' + b'\x00\x00\x00\x00')
    body = b'Exif\x00\x00' + tiff
    return b'\xff\xe1' + (len(body) + 2).to_bytes(2, 'big') + body


def clean_jpeg(d, jpeg, orientation):
    """Copy the JPEG, dropping EXIF/XMP (APP1), IPTC (APP13) and comments, which can hold GPS
    location and camera serials, and adding a minimal EXIF block with the rotation. The color
    profile (APP2) and the picture data are copied unchanged."""
    out = [b'\xff\xd8', exif_with_orientation(orientation)]
    p = jpeg['start'] + 2
    while True:
        m = d[p + 1]
        if m == 0xFF:
            p += 1
            continue
        if m == 0xDA:
            out.append(d[p:jpeg['end']])
            return b''.join(out)
        length = be16(d, p + 2)
        if m not in (0xE1, 0xED, 0xFE):
            out.append(d[p:p + 2 + length])
        p += 2 + length


def convert(src, dst):
    """Returns (status, detail): 'ok', 'small', or 'failed'."""
    d = src.read_bytes()
    jpeg = largest_jpeg(d)
    if not jpeg:
        return 'failed', 'no usable picture inside'
    own = tiff_orientation(d, jpeg['exif']) if jpeg['exif'] is not None else 0
    orientation = own or raw_orientation(d) or 1
    data = clean_jpeg(d, jpeg, orientation)
    dst.parent.mkdir(parents=True, exist_ok=True)
    # Write to a temporary name first, so a stopped run never leaves a half-written JPEG behind.
    tmp = dst.with_name(dst.name + '.part')
    tmp.write_bytes(data)
    os.replace(tmp, dst)
    stat = src.stat()
    os.utime(dst, (stat.st_atime, stat.st_mtime))  # keep the shoot's date for sorting
    w, h = (jpeg['h'], jpeg['w']) if orientation in (5, 6, 7, 8) else (jpeg['w'], jpeg['h'])
    if max(w, h) < SMALL_PREVIEW:
        return 'small', f'{w}x{h}'
    return 'ok', f'{w}x{h}'


# ---------- Running unattended.

def keep_awake():
    """Stop the computer sleeping while this program runs (released automatically when it exits)."""
    try:
        if sys.platform == 'win32':
            import ctypes
            ctypes.windll.kernel32.SetThreadExecutionState(0x80000000 | 0x00000001)
        elif sys.platform == 'darwin':
            subprocess.Popen(['caffeinate', '-i', '-w', str(os.getpid())])
    except Exception:
        pass


def find_raws(root, out_root):
    for path in sorted(root.rglob('*')):
        if path.suffix.lower() in RAW_EXTENSIONS and path.is_file() and not path.name.startswith('._'):
            if out_root in path.parents:
                continue
            yield path


def target_for(src, root, out_root):
    return (out_root / src.relative_to(root)).with_suffix('.jpg')


def is_settled(path, seconds=15):
    """A file still being copied keeps changing; wait until it has been quiet for a while."""
    try:
        return time.time() - path.stat().st_mtime > seconds
    except OSError:
        return False


def run_batch(root, out_root, report, watch):
    todo = []
    for src in find_raws(root, out_root):
        dst = target_for(src, root, out_root)
        if dst.exists() or str(src) in report['failed']:
            continue
        if watch and not is_settled(src):
            continue
        todo.append((src, dst))
    if not todo:
        return 0

    started = time.time()
    done = 0

    def work(pair):
        src, dst = pair
        try:
            return src, convert(src, dst)
        except Exception as err:  # unreadable or damaged file
            return src, ('failed', str(err))

    with ThreadPoolExecutor(max_workers=4) as pool:
        for src, (status, detail) in pool.map(work, todo):
            done += 1
            name = str(src.relative_to(root))
            if status == 'failed':
                report['failed'][str(src)] = detail
            else:
                report['converted'] += 1
                if status == 'small':
                    report['small'].append(f'{name} ({detail})')
            elapsed = time.time() - started
            left = elapsed / done * (len(todo) - done)
            print(f'  [{done}/{len(todo)}] {name}: {status} {detail}'
                  + (f'   (about {int(left // 60)} min {int(left % 60)} s left)' if done < len(todo) else ''),
                  flush=True)
    return len(todo)


def write_report(out_root, report):
    lines = [
        'MVP MEDIA RAW to JPEG converter report',
        time.strftime('%Y-%m-%d %H:%M'),
        '',
        f'Converted: {report["converted"]}',
        f'Already converted earlier (skipped): {report["skipped"]}',
        f'Only a smaller camera copy inside: {len(report["small"])}',
        f'Could not convert: {len(report["failed"])}',
    ]
    if report['small']:
        lines += ['', 'These only hold a smaller camera copy. For full size, export them from Lightroom:']
        lines += [f'  {s}' for s in report['small']]
    if report['failed']:
        lines += ['', 'Could not convert:']
        lines += [f'  {k}: {v}' for k, v in report['failed'].items()]
    (out_root / 'conversion-report.txt').write_text('\n'.join(lines) + '\n', encoding='utf-8')


def choose_folders():
    """When double-clicked: reuse last time's folders or ask for them."""
    last = {}
    if SETTINGS.exists():
        try:
            last = json.loads(SETTINGS.read_text(encoding='utf-8'))
        except ValueError:
            last = {}
    if last.get('raw') and last.get('out'):
        print(f'Last time:\n  RAW folder:    {last["raw"]}\n  JPEG folder:   {last["out"]}\n  Keep watching: {"yes" if last.get("watch") else "no"}')
        if input('Use the same settings? [Y/n] ').strip().lower() in ('', 'y', 'yes'):
            return Path(last['raw']), Path(last['out']), bool(last.get('watch'))

    def ask(title):
        try:
            import tkinter
            from tkinter import filedialog
            win = tkinter.Tk()
            win.withdraw()
            win.attributes('-topmost', True)
            chosen = filedialog.askdirectory(title=title)
            win.destroy()
            if chosen:
                return chosen
        except Exception:
            pass
        return input(f'{title} (type or drag the folder here, then press Enter): ').strip().strip('"\'')

    print('Choose the folder that holds your RAW files...')
    raw = ask('Choose the folder that holds your RAW files')
    print('Choose where the JPEGs should go...')
    out = ask('Choose where the JPEGs should go')
    watch = input('Keep watching for new RAW files after the first pass? [y/N] ').strip().lower() in ('y', 'yes')
    SETTINGS.write_text(json.dumps({'raw': raw, 'out': out, 'watch': watch}), encoding='utf-8')
    return Path(raw), Path(out), watch


def main():
    parser = argparse.ArgumentParser(description='Convert camera RAW files to JPEG, unattended.')
    parser.add_argument('raw_folder', nargs='?')
    parser.add_argument('output_folder', nargs='?')
    parser.add_argument('--watch', action='store_true', help='keep running and convert new RAW files as they appear')
    parser.add_argument('--interval', type=int, default=30, help='seconds between checks with --watch (default 30)')
    args = parser.parse_args()

    if args.raw_folder and args.output_folder:
        root, out_root, watch = Path(args.raw_folder), Path(args.output_folder), args.watch
    else:
        root, out_root, watch = choose_folders()
    root, out_root = root.expanduser().resolve(), out_root.expanduser().resolve()
    if not root.is_dir():
        sys.exit(f'RAW folder not found: {root}')
    out_root.mkdir(parents=True, exist_ok=True)

    keep_awake()
    total = sum(1 for _ in find_raws(root, out_root))
    already = sum(1 for s in find_raws(root, out_root) if target_for(s, root, out_root).exists())
    print(f'\nRAW folder:  {root}\nJPEG folder: {out_root}\n{total} RAW files, {already} already converted.\n', flush=True)
    report = {'converted': 0, 'skipped': already, 'small': [], 'failed': {}}

    try:
        # With --watch, files still being copied are left for a later check instead of failing now.
        run_batch(root, out_root, report, watch=watch)
        write_report(out_root, report)
        print(f'\nFirst pass finished: {report["converted"]} converted, {len(report["failed"])} could not be converted, '
              f'{len(report["small"])} only had a smaller copy. Details: {out_root / "conversion-report.txt"}', flush=True)
        if watch:
            print(f'\nWatching {root} for new RAW files (checking every {args.interval} s). Close this window to stop.', flush=True)
            while True:
                time.sleep(args.interval)
                if run_batch(root, out_root, report, watch=True):
                    write_report(out_root, report)
    except KeyboardInterrupt:
        write_report(out_root, report)
        print('\nStopped. Run it again any time: converted files are skipped.')


if __name__ == '__main__':
    main()
