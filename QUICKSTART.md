# Quick Start Guide - BrainRoute Study Hub

## ⚡ Quick Installation & Run

### Step 1: Install Dependencies
```bash
cd Frontend
npm install
```

### Step 2: Add Images to Assets
Copy these images to `src/assets/`:
- `neet-doctor.png` - Doctor illustration for NEET card
- `jee-engineer.png` - Engineer illustration for JEE card  
- `cuet-student.png` - Student illustration for CUET card

### Step 3: Start Development Server
```bash
npm run dev
```

The app will open at: **http://localhost:5173/**

---

## 🎯 What's Included

✅ **Modern React Frontend** (Vite + React 19.2.0)
✅ **React Router DOM** for navigation
✅ **Responsive Design** (mobile, tablet, desktop)
✅ **Green Color Palette** matching BrainRoute branding
✅ **Components**:
   - Navbar with sticky positioning
   - Hero section
   - 3 Cards for NEET/JEE/CUET streams
   - Login/Signup Modal

✅ **Features**:
   - Click "Sign up" button to open modal
   - Hamburger menu for mobile
   - Modal with email/password fields
   - Toggle between Login and Sign Up
   - Fully responsive layout

---

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 🎨 Project Structure

```
Frontend/
├── src/
│   ├── components/    # React components
│   ├── pages/        # Page components
│   ├── assets/       # Images and static files
│   ├── App.jsx       # Main app with routing
│   ├── main.jsx      # Entry point
│   ├── index.css     # Global styles
│   └── App.css       # App styles
├── package.json      # Dependencies
├── vite.config.js    # Vite config
└── SETUP_GUIDE.md    # Detailed documentation
```

---

## 🚀 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Add images to `src/assets/`
3. ✅ Run dev server: `npm run dev`
4. ✅ Test the application
5. ✅ Build for production: `npm run build`
6. ✅ Deploy to hosting

---

## 🔧 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will use the next available port automatically.

### Images Not Loading
Make sure images are in `src/assets/` with correct filenames:
- `neet-doctor.png`
- `jee-engineer.png`
- `cuet-student.png`

### Module Not Found Error
Run: `npm install` again to ensure all dependencies are installed.

---

## 💡 Tips

- All components use functional components with hooks
- CSS is modular (each component has its own CSS file)
- No backend required - UI only
- Fully responsive with mobile-first approach
- Green color scheme: `#00a86b` (primary), `#003d4d` (dark)

---

**Ready to start building? Run `npm run dev` now!** 🚀
