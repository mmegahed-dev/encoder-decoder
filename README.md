# Base64 Decoder Chrome Extension

A simple and elegant Chrome extension that allows you to quickly decode base64 encoded values using the `atob` function.

## Features

- 🚀 **Quick Decoding**: Instantly decode base64 values with a single click
- 🎨 **Modern UI**: Clean, responsive design with gradient backgrounds
- 📋 **Auto-paste**: Automatically decodes when you paste base64 values
- ⌨️ **Keyboard Shortcuts**: Use Ctrl+Enter for quick decoding
- 📝 **Copy to Clipboard**: Click on the decoded result to copy it
- 🧹 **Clear Function**: Easy clearing of input and output fields
- ⚡ **Error Handling**: Proper validation and error messages

## Installation

### Method 1: Load Unpacked Extension (Recommended)

1. **Download or Clone** this repository to your local machine
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** by toggling the switch in the top-right corner
4. **Click "Load unpacked"** and select the folder containing this extension
5. **Pin the extension** to your toolbar for easy access

### Method 2: Generate Icons (Optional)

If you want custom icons, open `create_icons.html` in your browser to generate the icon files.

## Usage

1. **Click the extension icon** in your Chrome toolbar
2. **Paste or type** your base64 encoded value in the input field
3. **Click "Decode"** or press **Ctrl+Enter** to decode
4. **View the result** in the output field
5. **Click the decoded result** to copy it to your clipboard

## Examples

### Text Decoding
```
Input: SGVsbG8gV29ybGQ=
Output: Hello World
```

### URL Decoding
```
Input: aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbQ==
Output: https://www.google.com
```

## Technical Details

- **Manifest Version**: 3 (Latest Chrome extension standard)
- **Permissions**: `activeTab` (minimal permissions required)
- **Core Function**: Uses JavaScript's built-in `atob()` function
- **Browser Support**: Chrome 88+ (Manifest V3)

## File Structure

```
base64-decoder/
├── manifest.json      # Extension configuration
├── popup.html         # Main popup interface
├── popup.css          # Styling for the popup
├── popup.js           # JavaScript functionality
├── icon16.png         # 16x16 icon
├── icon48.png         # 48x48 icon
├── icon128.png        # 128x128 icon
├── create_icons.html  # Icon generator (optional)
└── README.md          # This file
```

## Development

To modify the extension:

1. Edit the files as needed
2. Go to `chrome://extensions/`
3. Click the refresh icon on your extension
4. Test your changes

## Troubleshooting

### Extension Not Loading
- Ensure all files are in the same directory
- Check that `manifest.json` is valid JSON
- Verify Developer Mode is enabled

### Decoding Errors
- Make sure your input is valid base64
- Remove any extra whitespace or special characters
- Base64 strings should only contain: A-Z, a-z, 0-9, +, /, and = (padding)

### Icons Not Showing
- Generate icons using `create_icons.html`
- Ensure icon files are named correctly: `icon16.png`, `icon48.png`, `icon128.png`

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve this extension!
