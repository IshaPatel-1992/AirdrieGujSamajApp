module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
      colors: {
        brand: {
          DEFAULT: '#6b2f2f',     // Lighter maroon (was #4b1d1d)
    hover: '#823939',       // Slightly brighter for hover
    text: '#ffffff',        // Contrast color
    light: '#a24d3d',       // Optional: terracotta-like accent
    yellow: '#facc15',      // Saffron
    cream: '#f8eedf',       // Background
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus"],
      textColor: ["hover", "focus"],
    },
  },
  plugins: [],
};
