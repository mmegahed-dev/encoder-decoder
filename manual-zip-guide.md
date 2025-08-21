# Manual ZIP Creation Guide

## Step-by-Step Instructions

### Method 1: Using Windows File Explorer

1. **Create a new folder** on your desktop called `extension-files`

2. **Copy these files** into the folder:
   - `manifest.json`
   - `popup.html`
   - `popup.css`
   - `popup.js`

3. **Generate icons** using `generate_icons_simple.html` and copy the PNG files:
   - `icon16.png`
   - `icon48.png`
   - `icon128.png`

4. **Create ZIP file:**
   - Right-click on the `extension-files` folder
   - Select "Send to" → "Compressed (zipped) folder"
   - Rename the ZIP file to `atob-or-btoa-extension.zip`

### Method 2: Using 7-Zip (if installed)

1. **Select all files** in your extension directory:
   - manifest.json
   - popup.html
   - popup.css
   - popup.js
   - icon16.png
   - icon48.png
   - icon128.png

2. **Right-click** → "7-Zip" → "Add to archive..."

3. **Settings:**
   - Archive format: ZIP
   - Archive name: atob-or-btoa-extension.zip
   - Click "OK"

### Method 3: Using PowerShell

Open PowerShell in your extension directory and run:

```powershell
Compress-Archive -Path manifest.json,popup.html,popup.css,popup.js,icon16.png,icon48.png,icon128.png -DestinationPath atob-or-btoa-extension.zip
```

## Required File Structure

Your ZIP file should contain these files at the root level:

```
atob-or-btoa-extension.zip
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── icon16.png
├── icon48.png
└── icon128.png
```

## Important Notes

- **manifest.json MUST be at the root level** of the ZIP
- **No subdirectories** - all files should be directly in the ZIP
- **Include all icon files** to avoid upload errors
- **Use PNG format** for icons

## Testing the ZIP

1. **Extract the ZIP** to a temporary folder
2. **Verify structure** - manifest.json should be directly in the folder
3. **Test in Chrome:**
   - Go to `chrome://extensions/`
   - Enable Developer Mode
   - Click "Load unpacked"
   - Select the extracted folder
   - Extension should load without errors

## Upload to Google Web Store

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Click "Add new item"
3. Upload your `atob-or-btoa-extension.zip` file
4. Fill in the store listing information
5. Submit for review
