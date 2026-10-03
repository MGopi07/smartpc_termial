/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        winbet: {
          navy: '#050505',
          dark: '#0a0a0a',
          light: '#171717',
          gold: '#f97316',
          goldDark: '#ea580c',
          text: '#f8f9fa',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
// Force Vite HMR reload
