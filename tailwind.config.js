/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        italliano: ["italliano", "cursive"],
        raleway: ["raleway", "sans-serif"],
        quicksnad: ["quicksand", "sans-serif"],
        tangerine: ["Tangerine", "cursive"],
      },
    },
  },
  plugins: [],
};
