# BrainRoute Study Hub - Frontend

A modern, responsive React frontend for BrainRoute Study Hub built with Vite, React Router DOM, and modern CSS.

## 🎯 Features

- **Landing Page** - Clean, modern homepage with navigation and hero section
- **Navigation Bar** - Sticky navbar with logo, menu items, and sign-up button
- **Hero Section** - Eye-catching hero with title and inspirational text
- **Cards Section** - Three modern cards for NEET, JEE Mains, and CUET streams
- **Login/Signup Modal** - Centered modal for user authentication (UI only)
- **React Router** - Client-side routing for seamless navigation
- **Responsive Design** - Fully responsive on desktop, tablet, and mobile devices
- **Green Color Palette** - Modern, clean green theme consistent with BrainRoute branding

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar component
│   │   ├── Navbar.css          # Navbar styles
│   │   ├── Card.jsx            # Card component for streams
│   │   ├── Card.css            # Card styles
│   │   ├── LoginModal.jsx       # Login/Signup modal component
│   │   └── LoginModal.css       # Modal styles
│   ├── pages/
│   │   ├── Home.jsx            # Home page component
│   │   └── Home.css            # Home page styles
│   ├── assets/
│   │   ├── neet-doctor.png      # NEET card image
│   │   ├── jee-engineer.png     # JEE Mains card image
│   │   └── cuet-student.png     # CUET card image
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css                 # App base styles
│   ├── main.jsx                # Entry point with BrowserRouter
│   ├── index.css               # Global styles
├── public/
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Navigate to the Frontend directory:**

```bash
cd Frontend
```

2. **Install dependencies:**

```bash
npm install
```

This will install:
- `react` - UI library
- `react-dom` - DOM rendering
- `react-router-dom` - Routing library
- Dev dependencies for Vite and ESLint

### Adding Images

Before running the project, add the card images to `src/assets/`:

1. Download or locate these images:
   - **NEET Image**: Doctor illustration → save as `neet-doctor.png`
   - **JEE Mains Image**: Engineer illustration → save as `jee-engineer.png`
   - **CUET Image**: Student illustration → save as `cuet-student.png`

2. Copy them to: `src/assets/`

The images should be placed in the assets folder so they can be imported by the Home component.

### Running the Project

**Development Mode:**

```bash
npm run dev
```

The app will start at `http://localhost:5173/` (or the next available port)

**Build for Production:**

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

**Preview Production Build:**

```bash
npm run preview
```

**Lint Code:**

```bash
npm run lint
```

## 📋 Components Overview

### Navbar Component (`components/Navbar.jsx`)
- Sticky navigation bar
- BrainRoute logo with "Brain" (dark blue) and "Route" (green) styling
- Menu items: Experts insights, Career path, Find tutors, Collaborations
- Sign up button that triggers login modal
- Hamburger menu for mobile devices
- Fully responsive

### Card Component (`components/Card.jsx`)
- Reusable card component for course streams
- Displays title, subtitle, and image
- Hover effects with transform animations
- Soft shadows and rounded corners
- Responsive sizing

### LoginModal Component (`components/LoginModal.jsx`)
- Centered modal overlay
- Email and password input fields
- Toggle between Login and Sign Up modes
- Close button (X) to dismiss
- Form validation (required fields)
- No backend integration (UI only)
- Smooth animations and transitions

### Home Page (`pages/Home.jsx`)
- Landing page combining all components
- Hero section with title and motivational text
- Cards grid for three study streams
- Logo click to scroll to top
- Sign up button opens modal

## 🎨 Styling Features

- **Color Palette**:
  - Primary Green: `#00a86b`
  - Dark Blue: `#003d4d`
  - Light backgrounds: `#e8f5e9`, `#f1f8f6`
  - Text: `#333`

- **Responsive Breakpoints**:
  - Desktop: 1024px and above
  - Tablet: 768px - 1023px
  - Mobile: 480px - 767px
  - Small Mobile: Below 480px

- **Design Elements**:
  - Smooth hover effects
  - Soft shadows
  - Rounded corners (8px - 20px)
  - Gradients for visual depth
  - Transitions and animations

## 🔀 Routing

The app uses React Router DOM with the following routes:

- `/` → Home page (main landing page with all features)

Future routes can be easily added:
```javascript
<Route path="/login" element={<Login />} />
<Route path="/courses" element={<Courses />} />
```

## 📱 Responsive Design

The project is fully responsive with:
- **Desktop (1024px+)**: Full layout with side-by-side hero content
- **Tablet (768px-1023px)**: Adjusted spacing and font sizes
- **Mobile (480px-767px)**: Stacked layout, simplified cards
- **Small Mobile (<480px)**: Compact view, optimized for small screens

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Focus states on interactive elements
- Alt text for images
- Color contrast compliance
- Keyboard navigation support

## 🛠️ Development Tips

### Adding New Components

1. Create a new JS file in `components/` or `pages/`
2. Create a corresponding CSS file
3. Export the component as default
4. Import and use in App.jsx or other components

### Modifying Styles

- Component-specific styles are in individual CSS files
- Global styles are in `index.css` and `App.css`
- Use CSS Grid and Flexbox for layouts
- Mobile-first approach with media queries

### State Management

Currently using React hooks (useState) for local state:
- Modal visibility state
- Menu toggle state for hamburger menu

For larger apps, consider adding Redux or Zustand.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
```

### Deploy to GitHub Pages

Update `vite.config.js`:
```javascript
export default {
  base: '/repository-name/',
}
```

Then push to GitHub and enable Pages in settings.

## 📝 Environment Setup

The project uses Vite, which provides:
- Fast HMR (Hot Module Replacement)
- Quick build times
- Optimized production builds
- Modern ES modules support

No `.env` files are needed for the frontend-only setup.

## 📚 Technologies Used

- **React** - UI library (v19.2.0)
- **React Router DOM** - Client-side routing (v7.0.0)
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

## 📄 License

This project is part of the BrainRoute platform. All rights reserved.

## 🤝 Support

For issues or questions, please refer to the project documentation or contact the development team.

---

**Happy Coding! 🎉**
