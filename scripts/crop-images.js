// One-off image cleanup: removes the browser chrome (tab strip, address bar,
// macOS menu bar / Dock, dev-tool bars, install prompts, cookie banners) from
// the top and bottom of every project screenshot.
//
// Idempotent: the untouched originals are copied to legacy/screenshots/ on the
// first run and every later run re-crops from those, so the config below can be
// tuned and re-applied without compounding the crop.
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SRC = 'public/images';
const BAK = 'legacy/screenshots';

// Pixels to discard, measured against the original 2880x1800 captures.
const CROPS = {
  'aura-perfumes.png': { top: 292, bottom: 165 }, // chrome + Lovable preview bar + markup toolbar
  'chizyharryautos.png': { top: 190, bottom: 0 },
  'courageportfolio.png': { top: 215, bottom: 160 }, // macOS menu bar + Dock
  'farmsphere.png': { top: 195, bottom: 0 },
  'momentum.png': { top: 190, bottom: 310 }, // "Install Momentum" browser prompt
  'myschoolafri.png': { top: 215, bottom: 160 },
  'supportiq-ai.png': { top: 215, bottom: 155 },
  'tbii.png': { top: 190, bottom: 280 }, // cookie banner
  'thetechspace.png': { top: 215, bottom: 160 },
  'wedding-site.png': { top: 215, bottom: 160 },
};

fs.mkdirSync(BAK, { recursive: true });

for (const [file, { top, bottom }] of Object.entries(CROPS)) {
  const target = path.join(SRC, file);
  const pristine = path.join(BAK, file);

  if (!fs.existsSync(pristine)) fs.copyFileSync(target, pristine);

  const { width, height } = await sharp(pristine).metadata();
  const cropped = await sharp(pristine)
    .extract({ left: 0, top, width, height: height - top - bottom })
    .png({ compressionLevel: 8 })
    .toFile(target);

  const size = (fs.statSync(target).size / 1024 / 1024).toFixed(2);
  console.log(
    `${file.padEnd(22)} ${width}x${height} -> ${cropped.width}x${cropped.height}  (${size} MB)`,
  );
}
