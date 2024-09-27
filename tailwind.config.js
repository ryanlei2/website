/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust these paths based on your actual project structure
  ],
  theme: {
    extend: {
      colors: {
        'bgBlue': '#0F172A',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};