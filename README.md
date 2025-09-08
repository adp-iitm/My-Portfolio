# Modern Portfolio

A fully functional, modern React portfolio website built with TailwindCSS and Framer Motion. Features dark/light mode toggle, smooth animations, and responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with beautiful gradients and animations
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: Hover effects, scroll animations, and smooth transitions
- **Contact Form**: Functional contact form with validation
- **Social Links**: Integrated social media and contact links
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📋 Sections

- **Navbar**: Smooth scroll navigation with dark mode toggle
- **Hero**: Animated introduction with call-to-action buttons
- **About**: Personal information with animated statistics
- **Skills**: Interactive skill bars with categories
- **Projects**: Project showcase with hover effects and links
- **Contact**: Contact form and information
- **Footer**: Links, social media, and back-to-top functionality

## 🛠️ Tech Stack

- **React 18**: Latest version with modern features
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Beautiful icon library
- **PostCSS**: CSS processing with autoprefixer

## 📦 Installation

1. **Clone or download the project files**
   ```bash
   # If you have git, you can clone:
   git clone <repository-url>
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio.

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **Hero Section** (`src/components/Hero.jsx`):
  - Change name, title, and description
  - Update social media links
  - Replace placeholder avatar

- **About Section** (`src/components/About.jsx`):
  - Update personal description
  - Modify statistics
  - Change skills preview

- **Skills Section** (`src/components/Skills.jsx`):
  - Update skill categories and levels
  - Modify additional skills list

- **Projects Section** (`src/components/Projects.jsx`):
  - Replace with your actual projects
  - Update project descriptions and technologies
  - Add real GitHub and demo links

- **Contact Section** (`src/components/Contact.jsx`):
  - Update contact information
  - Modify social media links

### Styling
- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `public/index.html` and `tailwind.config.js`
- **Animations**: Modify animation settings in component files

### Images
Replace placeholder content with your actual:
- Profile picture
- Project screenshots
- Company logos

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy!

3. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Update DNS settings with your domain provider

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Or connect your GitHub repository

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (one-way operation)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:

- Email: your-email@example.com
- GitHub: [Your GitHub Profile](https://github.com/yourusername)

---

**Made with ❤️ and React**

