module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleFade: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        scaleFade: "scaleFade 0.3s ease forwards",
      },
      colors: {
        brand: {
          saffron: "#FFB534",   // Primary accent (buttons, highlights)
          cream: "#FBF6EE",     // Background
          mint: "#C1F2B0",      // Secondary accents
          green: "#65B741",     // Strong action color
          text: "#333333",      // Neutral dark text
          light: "#FFFFFF",     // optional for light backgrounds
          yellow: "#FFD95A",    // for logo background
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
      fontWeight: ["hover"], // Allows hover:font-bold
      scale: ["hover"],      // Allows hover:scale-* effects
    },
  },
  plugins: [],
};
