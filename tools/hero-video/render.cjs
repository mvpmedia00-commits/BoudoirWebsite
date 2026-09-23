const { chromium } = require('playwright');
const fs = require('fs');
const [,, dir, mode, fpsArg] = process.argv;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1600, height: 600 } });
  await p.goto('file://' + dir + '/scene.html');
  const grab = async (t, file, fmt = 'image/png') => {
    const data = await p.evaluate(([t, fmt]) => { window.render(t); return document.getElementById('c').toDataURL(fmt, 0.92); }, [t, fmt]);
    fs.writeFileSync(file, Buffer.from(data.split(',')[1], 'base64'));
  };
  if (mode === 'preview') {
    for (const t of [0, 4, 8]) await grab(t, `${dir}/preview_${t}.jpg`, 'image/jpeg');
    const same = await p.evaluate(() => { window.render(0); const a = document.getElementById('c').toDataURL(); window.render(12); return a === document.getElementById('c').toDataURL(); });
    console.log('frame at 0s identical to frame at 12s:', same);
  } else {
    const fps = Number(fpsArg || 24), total = 12 * fps;
    fs.mkdirSync(`${dir}/frames`, { recursive: true });
    for (let i = 0; i < total; i++) await grab(i / fps, `${dir}/frames/f${String(i).padStart(4, '0')}.png`);
    console.log('rendered', total, 'frames');
  }
  await b.close();
})();
