import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgBuffer = fs.readFileSync(path.resolve('public/favicon.svg'));

async function generate() {
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.resolve('public/favicon-32x32.png'));

  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.resolve('public/favicon.png'));

  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.resolve('public/apple-touch-icon.png'));

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.resolve('public/android-chrome-512x512.png'));

  console.log('Favicons generated successfully!');
}

generate().catch(console.error);
