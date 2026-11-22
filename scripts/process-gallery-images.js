import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const brainDir = 'C:\\Users\\Himanshu\\.gemini\\antigravity-ide\\brain\\357d1010-4bb3-437c-b0af-b05a98b61677';
const galleryDir = path.resolve('public/images/gallery');

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

const imagesToProcess = [
  {
    srcPrefix: 'greeno_packing_crew',
    destName: 'gallery-packing.webp'
  },
  {
    srcPrefix: 'greeno_loading_truck',
    destName: 'gallery-loading.webp'
  },
  {
    srcPrefix: 'greeno_doorstep_delivery',
    destName: 'gallery-delivery.webp'
  },
  {
    srcPrefix: 'greeno_unpacking_assembly',
    destName: 'gallery-unpacking.webp'
  },
  {
    srcPrefix: 'greeno_vehicle_carrier',
    destName: 'gallery-vehicle-carrier.webp'
  },
  {
    srcPrefix: 'greeno_team_fleet',
    destName: 'gallery-team-fleet.webp'
  }
];

async function processGallery() {
  console.log('--- Processing Gallery Images to WebP (< 20 KB) ---');

  const filesInBrain = fs.readdirSync(brainDir);

  for (const item of imagesToProcess) {
    const matchedFile = filesInBrain.find(f => f.startsWith(item.srcPrefix) && f.endsWith('.jpg'));
    if (!matchedFile) {
      console.error(`Could not find file for ${item.srcPrefix}`);
      continue;
    }

    const srcPath = path.join(brainDir, matchedFile);
    const destPath = path.join(galleryDir, item.destName);

    // Initial resize to 540x405 with webp compression
    let quality = 45;
    let width = 500;
    let height = 375;

    await sharp(srcPath)
      .resize(width, height, { fit: 'cover' })
      .webp({ quality: quality, effort: 6 })
      .toFile(destPath);

    let size = fs.statSync(destPath).size;

    // Ensure strictly under 20 KB (20,480 bytes)
    while (size > 20000 && quality > 20) {
      quality -= 5;
      width -= 20;
      height = Math.round(width * 0.75);

      await sharp(srcPath)
        .resize(width, height, { fit: 'cover' })
        .webp({ quality: quality, effort: 6 })
        .toFile(destPath);

      size = fs.statSync(destPath).size;
    }

    console.log(`${item.destName}: ${(size / 1024).toFixed(2)} KB (Under 20 KB: ${size < 20480})`);
  }
}

processGallery();
