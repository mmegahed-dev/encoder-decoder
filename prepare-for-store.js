const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Files to include in the extension package
const filesToInclude = [
    'manifest.json',
    'popup.html',
    'popup.css',
    'popup.js'
];

// Create a directory for the store-ready version
const storeDir = 'store-ready';
if (!fs.existsSync(storeDir)) {
    fs.mkdirSync(storeDir);
}

console.log('Preparing extension for Google Web Store...');

// Copy required files
filesToInclude.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join(storeDir, file));
        console.log(`✓ Copied ${file}`);
    } else {
        console.log(`✗ Missing ${file}`);
    }
});

// Create icons if they don't exist
const iconSizes = [16, 48, 128];
iconSizes.forEach(size => {
    const iconFile = `icon${size}.png`;
    if (!fs.existsSync(iconFile)) {
        console.log(`⚠ Warning: ${iconFile} not found. You'll need to create this for the store.`);
    } else {
        fs.copyFileSync(iconFile, path.join(storeDir, iconFile));
        console.log(`✓ Copied ${iconFile}`);
    }
});

// Create ZIP file for upload
const output = fs.createWriteStream('atob-or-btoa-extension.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
    console.log('\n🎉 Extension package created successfully!');
    console.log('📦 File: atob-or-btoa-extension.zip');
    console.log('📁 Size: ' + (archive.pointer() / 1024).toFixed(2) + ' KB');
    console.log('\n📋 Next steps:');
    console.log('1. Upload the ZIP file to Google Web Store');
    console.log('2. Add screenshots and promotional images');
    console.log('3. Fill in the store listing information');
    console.log('4. Submit for review');
});

archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);
archive.directory(storeDir, false);
archive.finalize();

console.log('\n📝 Store submission checklist:');
console.log('□ Create 128x128 PNG icon');
console.log('□ Take screenshots (1280x800 or 640x400)');
console.log('□ Create promotional images (440x280, 920x680)');
console.log('□ Host privacy policy online');
console.log('□ Prepare store description');
console.log('□ Set up developer account ($5 one-time fee)');
