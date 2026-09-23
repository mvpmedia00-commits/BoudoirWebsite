# Hero video

`public/media/hero/hero-light.{webm,mp4}` is the looping video behind the homepage headline:
warm window light through blinds with drifting dust. It is drawn in code in `scene.html`
(no footage, no people), and every motion completes whole cycles in 12 seconds, so it loops
without a seam.

To change it, edit `scene.html` (open it in a browser and call `render(seconds)` in the
console to preview a moment), then re-render:

```sh
# needs Playwright (npx playwright install chromium) and ffmpeg
node tools/hero-video/render.cjs "$PWD/tools/hero-video" preview   # stills + loop check
node tools/hero-video/render.cjs "$PWD/tools/hero-video" frames 24  # 288 PNG frames
cd tools/hero-video
ffmpeg -framerate 24 -i frames/f%04d.png -c:v libx264 -preset slow -crf 23 -tune grain \
  -pix_fmt yuv420p -movflags +faststart -an ../../public/media/hero/hero-light.mp4
ffmpeg -framerate 24 -i frames/f%04d.png -c:v libvpx-vp9 -b:v 0 -crf 30 -row-mt 1 \
  -pix_fmt yuv420p -an ../../public/media/hero/hero-light.webm
ffmpeg -i frames/f0000.png -q:v 4 ../../public/media/hero/hero-light-poster.jpg
rm -r frames
```

To use a different video (for example one made with an AI video tool), replace the three
files in `public/media/hero/` with the same names.
