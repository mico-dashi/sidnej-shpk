/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#8B1E1E',
        secondary: '#556B2F',
        accent: '#C9A227',
        'soft-white': '#F8F8F8',
        'dark-gray': '#222222',
      },
    },
  },
  plugins: [],
}
