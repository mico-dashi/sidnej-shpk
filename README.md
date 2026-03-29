<h1 align="center">Sidnej SHPK - Authentic Albanian Taste</h1>

<p align="center">
  Premium preserved vegetables and traditional Albanian products from Berat
</p>

---

## Overview

Sidnej SHPK is an official website for an authentic Albanian food producer based in Berat, Albania. Established in 2008, Sidnej SHPK specializes in high-quality preserved vegetables and traditional products using natural ingredients and time-tested recipes.

**Website:** https://sidnej-shpk.com  
**Founded:** 2008  
**Location:** Berat, Albania  
**Products:** 180+ traditional Albanian preserved goods

## Features

- **Modern Responsive Design** - Fully responsive website built with React, TypeScript, and Tailwind CSS
- **Product Showcase** - Browse and filter 36+ categories of products
- **Multi-language Support** - Content in Albanian
- **SEO Optimized** - Proper meta tags, Open Graph, and semantic HTML
- **Smooth Animations** - Interactive animations using Motion library
- **Contact Forms** - Easy customer inquiry system
- **Performance Optimized** - Built with Vite for fast loading

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite 6
- **Routing:** React Router v7
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd sidnej-shpk
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (optional, for API keys):
```bash
cp .env.example .env.local
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Homepage
│   │   ├── About.tsx       # About page
│   │   ├── Products.tsx    # Products catalog
│   │   ├── Services.tsx    # Services page
│   │   ├── Blog.tsx        # Blog/Articles page
│   │   └── Contact.tsx     # Contact page
│   ├── lib/                # Utilities
│   │   └── utils.ts        # Utility functions
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run clean` - Remove dist folder
- `npm run lint` - Check TypeScript types

## Environment Variables

Optional environment variables (for future API integration):

```env
GEMINI_API_KEY=your_api_key_here
```

## Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist/` folder to your web server
3. Configure your server to rewrite all routes to `index.html` for React Router

## Performance Considerations

- Images use Unsplash for CDN delivery
- CSS is optimized with Tailwind CSS tree-shaking
- JavaScript is minified and code-split by Vite
- Lazy loading for images and components is enabled

## SEO

- Proper meta tags for social sharing (Open Graph, Twitter Cards)
- Semantic HTML structure
- Mobile-responsive design
- Fast page load times

## Support

For inquiries or issues, please contact Sidnej SHPK:
- Email: info@sidnej-shpk.com
- Phone: +355 (Contact form available on website)
- Location: Berat, Albania

## License

This project is proprietary to Sidnej SHPK. All rights reserved.
