# Quick Start Guide

## 🚀 Getting Your Portfolio Running in 2 Minutes

### Step 1: Install Dependencies

```bash
cd frontend
npm install
```

### Step 2: Start the Server

```bash
npm start
```

Your portfolio is now live at: `http://localhost:3000`

## 📝 Quick Customization

### Change Your Name
File: `frontend/src/components/Hero.js`
```javascript
<h1 className="hero-title">
  Hi, I'm <span className="highlight">YOUR NAME</span>
</h1>
```

### Add Your Projects
File: `frontend/src/components/Projects.js`
```javascript
const projects = [
  {
    title: 'Your Project Title',
    category: 'MERN',
    description: 'Project description here',
    technologies: ['React', 'Node.js', 'Express'],
    image: '🚀',
    link: 'https://github.com/yourrepo'
  }
  // Add more projects...
];
```

### Update Contact Information
File: `frontend/src/components/Contact.js`
```javascript
<p>Phone: YOUR_PHONE_NUMBER</p>
<p>Email: YOUR_EMAIL</p>
```

## 🎨 Color Customization

File: `frontend/src/index.css`

```css
:root {
  --primary-color: #1a73e8;      /* Main blue */
  --secondary-color: #34a853;    /* Green */
  --accent-color: #fbbc04;       /* Yellow */
}
```

## 🌐 Deploy to Production

### Frontend - Vercel
```bash
npm run build
# Connect to Vercel and deploy
```

### Frontend - Netlify
```bash
npm run build
# Drag & drop the build folder to Netlify
```

## 🎨 Customize All Sections

1. **Hero** - `frontend/src/components/Hero.js`
2. **About** - `frontend/src/components/About.js`
3. **Skills** - `frontend/src/components/Skills.js`
4. **Projects** - `frontend/src/components/Projects.js`
5. **Internships** - `frontend/src/components/Internships.js`
6. **Certifications** - `frontend/src/components/Certifications.js`
7. **Contact** - `frontend/src/components/Contact.js`

## 📚 More Resources

- [React Documentation](https://react.dev)
- [CSS Gradients](https://cssgradient.io)
- [Font Awesome Icons](https://fontawesome.com/icons)

## ✨ Next Steps

1. ✅ Customize your portfolio content
2. ✅ Add your projects and links
3. ✅ Deploy to Vercel or Netlify
4. ✅ Share your portfolio!

**Happy building! 🚀**
