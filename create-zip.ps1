# PowerShell script to create extension ZIP file
Write-Host "Creating Chrome Extension ZIP file..." -ForegroundColor Green

# Check if required files exist
$requiredFiles = @("manifest.json", "popup.html", "popup.css", "popup.js")
$missingFiles = @()

foreach ($file in $requiredFiles) {
    if (-not (Test-Path $file)) {
        $missingFiles += $file
    }
}

if ($missingFiles.Count -gt 0) {
    Write-Host "❌ Missing required files:" -ForegroundColor Red
    foreach ($file in $missingFiles) {
        Write-Host "   - $file" -ForegroundColor Red
    }
    Write-Host "Please ensure all required files are in the current directory." -ForegroundColor Yellow
    exit 1
}

# Check for icon files
$iconFiles = @("icon16.png", "icon48.png", "icon128.png")
$missingIcons = @()

foreach ($icon in $iconFiles) {
    if (-not (Test-Path $icon)) {
        $missingIcons += $icon
    }
}

if ($missingIcons.Count -gt 0) {
    Write-Host "⚠️  Warning: Missing icon files:" -ForegroundColor Yellow
    foreach ($icon in $missingIcons) {
        Write-Host "   - $icon" -ForegroundColor Yellow
    }
    Write-Host "Please generate icons using generate_icons_simple.html" -ForegroundColor Yellow
}

# Create ZIP file
$zipName = "atob-or-btoa-extension.zip"
$filesToZip = $requiredFiles + $iconFiles | Where-Object { Test-Path $_ }

# Remove existing ZIP if it exists
if (Test-Path $zipName) {
    Remove-Item $zipName -Force
    Write-Host "Removed existing ZIP file" -ForegroundColor Yellow
}

# Create ZIP file
Compress-Archive -Path $filesToZip -DestinationPath $zipName -Force

Write-Host "✅ ZIP file created successfully!" -ForegroundColor Green
Write-Host "📦 File: $zipName" -ForegroundColor Cyan

# Get file size
$fileSize = (Get-Item $zipName).Length
$fileSizeKB = [math]::Round($fileSize / 1024, 2)
Write-Host "📁 Size: $fileSizeKB KB" -ForegroundColor Cyan

# List files in ZIP
Write-Host "📋 Files included:" -ForegroundColor Cyan
foreach ($file in $filesToZip) {
    Write-Host "   ✓ $file" -ForegroundColor Green
}

Write-Host "`n🚀 Ready to upload to Google Web Store!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://chrome.google.com/webstore/devconsole/" -ForegroundColor White
Write-Host "2. Click 'Add new item'" -ForegroundColor White
Write-Host "3. Upload $zipName" -ForegroundColor White
Write-Host "4. Fill in store listing information" -ForegroundColor White
Write-Host "5. Submit for review" -ForegroundColor White
