# DevExplorer - React Single Page Application

A modern Single Page Application built with React, demonstrating REST API integration with GitHub API and styled with TailwindCSS.

## 🚀 Features

### Task 1: Single Page Application (SPA)

- ✅ Built with React
- ✅ React Router for smooth navigation without page reloads
- ✅ Multiple pages: Home, Search, About, Contact
- ✅ Global state management using React Context API
- ✅ Smooth page transitions and animations

### Task 2: REST API Integration

- ✅ GitHub REST API integration
- ✅ Search GitHub users dynamically
- ✅ View detailed user profiles
- ✅ Display user repositories
- ✅ Debounced search for optimized performance
- ✅ Loading states and error handling
- ✅ Search history tracking

### Task 3: CSS Framework

- ✅ TailwindCSS for styling
- ✅ Custom theme with brand colors
- ✅ Responsive design (mobile-first)
- ✅ Custom components (buttons, cards, inputs)
- ✅ Smooth animations and transitions
- ✅ Accessible UI elements

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js         # Navigation component
│   ├── Footer.js         # Footer component
│   ├── SearchBar.js      # Search input with debounce
│   ├── UserCard.js       # User display card
│   ├── RepoCard.js       # Repository display card
│   ├── LoadingSpinner.js # Loading indicator
│   └── ErrorMessage.js   # Error display component
├── pages/
│   ├── Home.js           # Landing page
│   ├── Search.js         # User search page
│   ├── UserProfile.js    # User profile page
│   ├── About.js          # About page
│   ├── Contact.js        # Contact form page
│   └── NotFound.js       # 404 page
├── context/
│   └── AppContext.js     # Global state management
├── services/
│   └── githubApi.js      # API service functions
├── hooks/
│   └── useCustomHooks.js # Custom React hooks
├── App.js                # Main app component with routing
├── index.js              # Entry point
└── index.css             # Global styles with Tailwind
```

## 🛠️ Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📦 Dependencies

- **React** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **TailwindCSS** - Utility-first CSS framework

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize:

- Primary colors (blue shades)
- Secondary colors (gray shades)
- Custom fonts
- Animations

### API Configuration

The GitHub API is used without authentication (rate limited to 60 requests/hour). For higher limits, add a GitHub token in `src/services/githubApi.js`.

## 🚀 Deployment

### Build for production:

```bash
npm run build
```

### Deploy to Netlify/Vercel:

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimizations

- Debounced search (500ms delay)
- Lazy loading of images
- Efficient re-renders with Context API
- Optimized bundle size

## 📄 License

MIT License - feel free to use this project for learning or your own projects.
