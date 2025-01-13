/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        main: '#003366', // Main color
        secondary: '#90EE90', // Secondary color
        textMain: '#000000', // Main text color
        textSecondary: '#666666', // Secondary text color
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add Roboto font
      },
    },
  },
  plugins: [],
}

