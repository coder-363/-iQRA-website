import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = 'public/gallery/gall.DNG';
const output = 'public/gallery/gall.jpg';

sharp(input)
  .toFormat('jpeg')
  .jpeg({ quality: 80 })
  .toFile(output)
  .then(() => {
    console.log('Conversion successful!');
  })
  .catch(err => {
    console.error('Conversion failed:', err);
  });
