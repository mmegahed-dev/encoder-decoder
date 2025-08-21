const fs = require('fs');
const { createCanvas } = require('canvas');

// If canvas is not available, create simple SVG icons instead
function createSVGIcon(size) {
    const svg = `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#grad)" rx="4"/>
  <text x="${size/2}" y="${size/2}" font-family="Arial, sans-serif" font-size="${size * 0.4}" 
        font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">64</text>
</svg>`;
    return svg;
}

// Create SVG icons
const sizes = [16, 48, 128];

sizes.forEach(size => {
    const svg = createSVGIcon(size);
    fs.writeFileSync(`icon${size}.svg`, svg);
    console.log(`Created icon${size}.svg`);
});

console.log('Icon files created successfully!');
console.log('Note: These are SVG files. For PNG icons, you can:');
console.log('1. Open create_icons.html in your browser');
console.log('2. Or convert these SVG files to PNG using an online converter');
