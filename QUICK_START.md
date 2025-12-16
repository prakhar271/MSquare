# 🚀 MSquare Groups - Quick Start Guide

## ⚡ 5-Minute Setup

### 1. Clone & Install
```bash
git clone https://github.com/prakhar271/MSquare.git
cd MSquare
npm install
```

### 2. Start Development
```bash
npm run dev
```
Visit: `http://localhost:5173`

### 3. Deploy to GitHub Pages
```bash
npm run deploy
```

## 📝 Quick Customization

### Update Company Info
1. **Logo/Name**: Edit `src/components/Navbar.jsx`
2. **Hero Text**: Edit `src/components/Hero.jsx`
3. **Contact Info**: Edit `src/components/Contact.jsx`

### Add Your Projects
Edit `src/components/Portfolio.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'Web Development',
    description: 'Project description...',
    image: 'https://your-image-url.com',
    technologies: ['React', 'Node.js'],
    liveUrl: 'https://your-live-site.com',
    githubUrl: 'https://github.com/your-repo'
  }
];
```

### Update Colors
Edit `src/styles/variables.css`:
```css
:root {
  --color-primary: #your-brand-color;
  --color-secondary: #your-accent-color;
}
```

## 🎯 Key Files to Customize

| File | Purpose |
|------|---------|
| `src/components/Portfolio.jsx` | Your projects showcase |
| `src/components/CaseStudies.jsx` | Success stories |
| `src/components/Testimonials.jsx` | Client feedback |
| `src/components/Services.jsx` | Your services |
| `src/styles/variables.css` | Colors & design |

## 📱 Testing

### Local Testing
```bash
npm run build
npm run preview
```

### Mobile Testing
- Use browser dev tools
- Test on actual devices
- Check all breakpoints

## 🌐 Go Live Checklist

- [ ] Update all placeholder content
- [ ] Add real project images
- [ ] Update contact information
- [ ] Test all links and forms
- [ ] Check mobile responsiveness
- [ ] Run `npm run build` successfully
- [ ] Deploy with `npm run deploy`
- [ ] Verify live site works

## 🆘 Need Help?

- **Full Documentation**: See `DOCUMENTATION.md`
- **Issues**: Create GitHub issue
- **Questions**: Check troubleshooting section

---

**Ready to showcase your work? Start customizing! 🎨**