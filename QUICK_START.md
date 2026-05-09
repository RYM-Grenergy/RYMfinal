# RYM Grenergy Website - Quick Start Guide

## 🎨 Design Features

This redesigned website includes:

- **Modern Black & Green Theme**: Sleek dark background with vibrant green accents
- **Framer Motion Animations**: Smooth, interactive animations throughout
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: Hover effects, scroll animations, and micro-interactions
- **Performance Optimized**: Built with Vite for fast load times
- **Accessible**: ARIA labels and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd rym-grenergy-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The site will automatically open at `http://localhost:3000`
   - If not, manually navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
rym-grenergy-redesign/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation with scroll effect
│   │   ├── Navbar.css
│   │   ├── Footer.jsx       # Footer with links
│   │   └── Footer.css
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # Hero section with animations
│   │   ├── Hero.css
│   │   ├── About.jsx        # About section
│   │   ├── About.css
│   │   ├── Products.jsx     # Products showcase
│   │   ├── Products.css
│   │   ├── Projects.jsx     # Projects list
│   │   ├── Projects.css
│   │   ├── Testimonials.jsx # Client testimonials
│   │   ├── Testimonials.css
│   │   ├── Contact.jsx      # Contact form
│   │   └── Contact.css
│   ├── data/
│   │   └── data.js          # Static data for products, testimonials, etc.
│   ├── styles/
│   │   └── global.css       # Global styles and CSS variables
│   ├── App.jsx              # Main app component
│   ├── App.css              # App-level styles
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## 🎨 Theme Customization

The color theme can be customized in `src/styles/global.css`:

```css
:root {
  --primary-green: #00ff88;    /* Main green color */
  --dark-green: #00cc6a;       /* Darker green shade */
  --bg-black: #0a0a0a;         /* Background color */
  --card-bg: #111111;          /* Card background */
  --text-white: #ffffff;       /* Primary text */
  --text-gray: #e0e0e0;        /* Secondary text */
}
```

## ✨ Key Features Implemented

### 1. Hero Section
- Parallax mouse tracking effect
- Floating animated icons
- Smooth scroll indicator
- Responsive statistics display

### 2. About Section
- Slide-in animations
- Feature cards with hover effects
- Image overlay effects

### 3. Products Section
- Grid layout with hover animations
- Product card hover states
- Overlay buttons on hover

### 4. Projects Section
- Animated project list
- Statistics cards
- Smooth entrance animations

### 5. Testimonials Section
- Testimonial cards with star ratings
- Shine effect on hover
- Staggered animations

### 6. Contact Section
- Functional contact form
- Form validation
- Sticky info cards
- Smooth transitions

### 7. Navigation
- Fixed navbar with scroll effect
- Smooth scroll to sections
- Mobile-responsive menu
- Active link indicators

### 8. Footer
- Comprehensive footer with links
- Social media icons
- Contact information
- Responsive grid layout

## 🔧 Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Lightning-fast build tool
- **Framer Motion**: Professional animations
- **React Icons**: Icon library
- **CSS3**: Modern styling with custom properties

## 📱 Responsive Breakpoints

- **Desktop**: 1400px+
- **Laptop**: 968px - 1399px
- **Tablet**: 640px - 967px
- **Mobile**: < 640px

## 🎯 Performance Tips

1. Images are loaded from external URLs - consider hosting them locally for better performance
2. Use lazy loading for images below the fold
3. Optimize images (WebP format recommended)
4. Enable code splitting for larger applications

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy, Vite will automatically use the next available port.

### Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Hot Module Replacement Not Working
Restart the development server:
```bash
# Stop the server (Ctrl+C)
# Start again
npm run dev
```

## 📄 License

© 2025 RYM Grenergy. All rights reserved.

## 🤝 Support

For questions or issues, contact: contact@rym-grenergy.com

---

**Enjoy your new website! 🚀**
