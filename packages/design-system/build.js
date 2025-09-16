#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy CSS and SCSS files to dist
const sourceFiles = [
  { src: 'src/colors.css', dest: 'dist/colors.css' },
  { src: 'src/colors.scss', dest: 'dist/colors.scss' }
];

sourceFiles.forEach(({ src, dest }) => {
  const sourcePath = path.join(__dirname, src);
  const destPath = path.join(__dirname, dest);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Copied ${src} to ${dest}`);
  } else {
    console.warn(`⚠ Source file ${src} not found`);
  }
});

console.log('✓ Build completed successfully!');
