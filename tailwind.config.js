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
          navy: '#0b132b',
          dark: '#0c0e10',
          light: '#1c2541',
          gold: '#d4af37',
          goldDark: '#aa8c2c',
          text: '#f8f9fa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
