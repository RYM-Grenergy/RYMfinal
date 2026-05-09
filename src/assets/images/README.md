# Image Assets Guide

## Folder Structure
```
src/assets/images/
├── hero.svg (Main hero section image)
├── about.svg (About section image - KEEP ORIGINAL)
├── product-ultron.svg
├── product-ai-drive.svg
├── product-reews.svg
├── achievement-kpit.svg
├── achievement-journey.svg
├── avatar-placeholder.svg (Testimonial avatars)
├── partner-placeholder.svg (Partner logos)
└── sdg-*.svg (SDG icons)
```

## How to Replace Images

### Option 1: Replace SVG files
Simply replace the SVG files with your own images (PNG, JPG, or SVG) with the same filename.

### Option 2: Add real images
1. Add your images to `src/assets/images/`
2. Update the imports in `src/data/data.js`
3. For example:
   ```javascript
   import productUltron from '../assets/images/your-actual-image.jpg';
   ```

## About Section Image
**IMPORTANT**: The About section image (about.svg) is a placeholder. 
Replace it with your actual company/operations image by:
1. Adding your image as `about.jpg` or `about.png` to the images folder
2. Updating the import in `src/sections/About.jsx`:
   ```javascript
   import aboutImage from '../assets/images/about.jpg';
   ```

## Recommended Image Sizes
- Hero: 800x800px
- About: 800x600px
- Products: 600x400px
- Testimonials: 200x200px (square)
- Partners: 200x80px
- SDG Icons: 100x100px

All images are now local and will work offline! 🎨
