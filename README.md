# 💝 Romantic Gallery Website

A premium, elegant digital album website featuring glassmorphism UI, animated gradient backgrounds, and smooth page transitions designed as a romantic gift.

## ✨ Features

- **Glassmorphism UI**: Frosted glass effect with backdrop blur
- **Animated Background**: Slowly moving gradient blobs for a dreamy atmosphere
- **5-Page Storybook Layout**:
  - Page 1: Opening romantic letter
  - Page 2: Auto-playing photo slideshow
  - Page 3: Letter notes with images
  - Page 4: Video gallery with captions
  - Page 5: Closing message
- **Smooth Animations**: Page transitions, hover effects, and micro-animations
- **Fully Responsive**: Perfect on mobile, tablet, and desktop
- **Keyboard Navigation**: Arrow keys for pages, number keys (1-5) for direct access
- **Touch Gestures**: Swipe left/right on mobile devices
- **Auto-playing Slideshow**: With manual controls (play/pause, next/previous)

## 🎨 Design System

- **Primary Color**: `#043457` (Deep Blue)
- **Secondary Color**: `#ffffff` (White)
- **Accent Colors**: Soft pastels (pink, lavender, peach, mint)
- **Typography**:
  - Headings: Playfair Display (Elegant Serif)
  - Body: Poppins (Clean Sans-serif)
  - Handwritten Notes: Dancing Script (Cursive)

## 📁 Project Structure

```
romantic-gallery/
├── index.html          # Main HTML structure
├── style.css           # Complete CSS with animations
├── script.js           # Vanilla JavaScript functionality
├── README.md           # This file
└── assets/
    ├── images/         # Add your photos here
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   ├── photo3.jpg
    │   ├── photo4.jpg
    │   ├── photo5.jpg
    │   └── photo6.jpg
    └── videos/         # Add your videos here
        ├── video1.mp4
        └── video2.mp4
```

## 🚀 Getting Started

### 1. Add Your Media Files

**Images**: Place your photos in `assets/images/` folder
- Recommended: 6 photos named `photo1.jpg` through `photo6.jpg`
- Format: JPG, PNG, or WebP
- Resolution: 1920x1080 or similar (high quality)

**Videos**: Place your videos in `assets/videos/` folder
- Recommended: 2 videos named `video1.mp4` and `video2.mp4`
- Format: MP4 (H.264 codec)
- Duration: 10-30 seconds (optimized for web)

### 2. Customize Content

Open `index.html` and customize:
- **Page 1**: Opening letter text
- **Page 2**: Photo captions in slideshow
- **Page 3**: Note titles and handwritten messages
- **Page 4**: Video captions
- **Page 5**: Closing message

### 3. Run Locally

**Option 1: Using Python**
```bash
# Python 3
python -m http.server 8080

# Then open: http://localhost:8080
```

**Option 2: Using Node.js**
```bash
npx -y http-server -p 8080

# Then open: http://localhost:8080
```

**Option 3: Using VS Code**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

**Option 4: Direct File**
- Simply double-click `index.html` (some features may be limited)

## 🎮 Controls

### Keyboard Navigation
- **Arrow Left/Right**: Navigate between pages
- **Number Keys (1-5)**: Jump directly to a page
- **Space Bar**: Play/pause slideshow (on page 2)

### Mouse/Touch
- **Navigation Buttons**: Previous/Next at bottom
- **Page Dots**: Click to jump to specific page
- **Slideshow Controls**: Previous/Next/Play-Pause buttons
- **Swipe Gestures**: Swipe left/right on mobile

## 🎨 Customization Guide

### Change Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #043457;      /* Main background color */
    --accent-pink: #ffc0d3;        /* Pink accents */
    --accent-lavender: #e0c3fc;    /* Lavender accents */
    --accent-peach: #ffd4a3;       /* Peach accents */
    --accent-mint: #c3f0e0;        /* Mint accents */
}
```

### Adjust Slideshow Speed

Edit in `script.js`:

```javascript
const state = {
    slideDelay: 4000  // Change to desired milliseconds (e.g., 5000 = 5 seconds)
};
```

### Add More Slides

1. Add image to `assets/images/`
2. Add slide HTML in `index.html` (Page 2):
```html
<div class="slide">
    <img src="assets/images/photo7.jpg" alt="Description" class="slide-image">
    <p class="slide-caption">Your caption here</p>
</div>
```
3. Update `totalSlides` in `script.js`:
```javascript
const state = {
    totalSlides: 7  // Update to match number of slides
};
```

### Add More Pages

1. Add page section in `index.html`:
```html
<section class="page" id="page-6">
    <!-- Your content here -->
</section>
```
2. Add page dot in navigation:
```html
<span class="page-dot" data-page="6"></span>
```
3. Update `totalPages` in `script.js`:
```javascript
const state = {
    totalPages: 6  // Update to match number of pages
};
```

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: Glassmorphism effects require modern browsers with `backdrop-filter` support.

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🎯 Performance Tips

1. **Optimize Images**: Compress photos to reduce file size
2. **Video Format**: Use H.264 codec for best compatibility
3. **Lazy Loading**: Images are automatically lazy-loaded
4. **Smooth Animations**: All animations use CSS for 60fps performance

## 💡 Tips for Best Experience

- Use high-quality, well-lit photos
- Keep videos short (10-30 seconds)
- Write heartfelt, personal messages
- Test on mobile devices for touch gestures
- Share the URL or host on a web server for best results

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths match exactly (case-sensitive)
- Ensure images are in `assets/images/` folder
- Check browser console for errors (F12)

**Videos not playing?**
- Use MP4 format with H.264 codec
- Check file paths in HTML
- Some browsers require user interaction to play videos

**Animations laggy?**
- Reduce number of background blobs
- Compress images and videos
- Close other browser tabs

## 📄 License

This is a personal project. Feel free to use and customize for your own romantic gestures! ❤️

---

**Made with 💝 using vanilla HTML, CSS, and JavaScript**

*No frameworks, no dependencies, just pure love and code.*
