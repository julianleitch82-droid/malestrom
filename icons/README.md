# Icon Files Needed for PWA

This directory should contain the following PNG icon files:

## Required Icons

### Regular Icons (for standard displays)
- **icon-192.png** — 192×192 px
  - Used for PWA install to home screen
  - Android adaptive icon size
  
- **icon-512.png** — 512×512 px
  - Larger splash screen / start screen icon
  - Used for app installation prompts

### Maskable Icons (for dynamic theming)
- **icon-192-maskable.png** — 192×192 px
  - Icon with safe zone for masking (at least 44px padding)
  - Used for themed app icons on modern Android
  - Background will be removed and replaced with system accent color
  
- **icon-512-maskable.png** — 512×512 px
  - Larger maskable variant
  - Same safe zone requirements as 192px version

### Screenshots (optional, for app stores)
- **screenshot-540.png** — 540×720 px
  - Narrow format screenshot (mobile)
  - Used in PWA install UI
  
- **screenshot-1280.png** — 1280×720 px
  - Wide format screenshot (landscape)
  - Used in PWA install UI

## Creating Icons

### Quick Option: Generate from existing image
You can use online tools like:
- [Clipart Library PWA Icon Generator](https://www.clipartlibrary.com/)
- [PWA Icon Generator](https://www.pwabuilder.com/)

### Best Practice: Use a design tool
1. Create a 512×512px design in Figma, Adobe XD, or similar
2. Design should be:
   - Simple and recognizable at 192×192 px
   - Ideally a barbell or dumbbell icon
   - Dark background (matches app theme #1a1a1a)
   - Light foreground for contrast
3. Export as PNG with transparent background
4. Scale down to 192×192 for the smaller icon

### For Maskable Icons
- Keep the main icon design in the center
- Add 44px padding (safe zone) around the edge
- This ensures the icon remains recognizable even if system masks it

## Installation

Once you have your icons:
1. Place them in this `/icons` directory
2. The app will automatically reference them via `manifest.json`
3. Test PWA installation on iPhone Safari or Chrome

## PWA Installation Testing

### iOS Safari
1. Open `index.html` in Safari
2. Tap the Share button (↗)
3. Scroll down and tap "Add to Home Screen"
4. Choose a name and tap "Add"
5. The icon will appear on your home screen

### Chrome / Android
1. Open `index.html` in Chrome
2. Chrome will show an install prompt (if icons are detected)
3. Tap "Install" to add to home screen

## Notes

- **Icons should be opaque PNG** (no transparency for regular icons, optional for maskable)
- **Minimum quality:** 96 DPI for sharp display
- **Format:** PNG recommended (smaller file size than SVG at these sizes)
- **Testing:** Always test on actual device before deployment
- **Safe colors:** Dark background with light foreground works best on both light and dark home screens
