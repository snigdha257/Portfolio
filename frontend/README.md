# Portfolio Website Frontend

## Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Attractive gradient designs and smooth animations
- **Interactive Components**: Smooth scrolling, hover effects, and transitions
- **Project Showcase**: Display all your projects
- **Skills Section**: Showcase technical skills with progress indicators
- **Contact Form**: Integrated contact form that opens email client
- **Social Links**: Easy access to LinkedIn, GitHub, and Email

## Tech Stack

- **React.js** - Frontend library
- **CSS3** - Styling with gradients, animations, and flexbox
- **Responsive Design** - Mobile-first approach
- **Font Awesome** - Icons

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Internships.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Internships.css
│   │   ├── Certifications.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Customization

### Update Personal Information
Edit the data in each component file:
- **Hero.js**: Update your name and subtitle
- **About.js**: Update your bio and statistics
- **Projects.js**: Add your projects
- **Internships.js**: Update internship details
- **Certifications.js**: Add your certifications
- **Contact.js**: Update your contact information

### Color Scheme
The color scheme is defined in `index.css` using CSS variables:
```css
:root {
  --primary-color: #1a73e8;
  --secondary-color: #34a853;
  --accent-color: #fbbc04;
}
```

### Add Your Project Links
In `Projects.js`, update the `link` property for each project to point to your GitHub repositories or live demos.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Option 2: Netlify
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Deploy automatically

### Option 3: GitHub Pages
```bash
npm run build
# Push the 'build' folder to gh-pages branch
```

## Performance Tips

- Images are optimized
- CSS is minified in production
- Smooth animations don't impact performance
- Responsive design works on all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
