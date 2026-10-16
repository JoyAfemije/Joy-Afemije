// One-off measurement tool: builds a labelled contact sheet of the top and
// bottom bands of every project screenshot, with a pixel ruler, so the amount
// of browser chrome in each image can be read off precisely before cropping.
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const DIR = 'public/images';
const OUT = '.tmp';
const STRIP = 420; // original px sampled at each end
const W = 1000; // sheet width
const GAP = 32;

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.png')).sort();

async function buildSheet(edge) {
  const items = [];
  const marks = [];
  let y = GAP;

  for (const file of files) {
    const { width, height } = await sharp(path.join(DIR, file)).metadata();
    const strip = Math.min(STRIP, height);
    const scale = W / width;
    const stripH = Math.round(strip * scale);
    const originY = edge === 'top' ? 0 : height - strip;
    const buf = await sharp(path.join(DIR, file))
      .extract({ left: 0, top: originY, width, height: strip })
      .resize({ width: W })
      .png()
      .toBuffer();

    items.push({ input: buf, top: y, left: 0 });
    marks.push({ file, y, originY, strip, scale, stripH, dims: `${width}x${height}` });
    y += stripH + GAP;
  }

  const H = y;
  let svg =
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;

  for (const m of marks) {
    svg +=
      `<text x="6" y="${m.y - 9}" fill="#ffe600" font-size="13" ` +
      `font-family="Helvetica, Arial, sans-serif">${m.file}  (${m.dims})</text>`;
    for (let o = 0; o <= m.strip; o += 60) {
      const yy = m.y + Math.round(o * m.scale);
      const orig = m.originY + o;
      svg +=
        `<line x1="0" y1="${yy}" x2="${W}" y2="${yy}" stroke="#ff2d95" stroke-width="1"/>` +
        `<text x="5" y="${yy - 2}" fill="#ff2d95" font-size="11" ` +
        `font-family="Menlo, monospace">y=${orig}</text>`;
    }
  }
  svg += '</svg>';

  const out = path.join(OUT, `chrome-${edge}.png`);
  await sharp({ create: { width: W, height: H, channels: 3, background: '#0b0b0b' } })
    .composite([...items, { input: Buffer.from(svg), top: 0, left: 0 }])
    .png()
    .toFile(out);

  console.log('wrote', out, `${W}x${H}`);
}

fs.mkdirSync(OUT, { recursive: true });
(async () => {
  await buildSheet('top');
  await buildSheet('bottom');
})();
