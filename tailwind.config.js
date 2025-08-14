/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          light: "#81E6D9",
          DEFAULT: "#319795",
          dark: "#285E61"
        }
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}