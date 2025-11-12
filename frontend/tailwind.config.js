/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Custom keyframes
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleFade: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      // Animation utilities
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        scaleFade: "scaleFade 0.3s ease forwards",
        fadeInUp: "fadeInUp 0.8s ease forwards",
      },

      // Background gradients & patterns
      backgroundImage: {
        'maple-gradient': 'linear-gradient(135deg, #D32F2F 0%, #FF9933 100%)',
        'fusion-gradient': 'linear-gradient(120deg, #FF9933 0%, #FFFFFF 40%, #138808 80%, #D32F2F 100%)',
        'maple-soft': 'linear-gradient(180deg, #FFF5F5 0%, #FFEFE0 100%)',
        'maple-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgba(255,255,255,0.08)' d='M50 0l8 20 20-8-12 18 18 12-20 2 8 20-18-12-12 18-2-20-20 8 12-18-18-12 20-2-8-20 18 12z'/%3E%3C/svg%3E\")",
      },

      // Color palette
      colors: {
        brand: {
          saffron: "#FF9933",   // Vibrant saffron
          maple: "#D32F2F",     // Maple red
          green: "#138808",     // Deep green
          navy: "#002868",      // Ashoka Chakra / depth color
          white: "#FFFFFF",     // Neutral white
          cream: "#F9F9F9",     // Soft off-white
          text: "#1C1C1C",      // Dark neutral text
          accent: "#FF6F3C",    // Warm accent (blend of saffron/red)
        }
      },

      // Font families
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },

  // Variants for hover/focus states
  variants: {
    extend: {
      backgroundColor: ["hover", "focus"],
      textColor: ["hover", "focus"],
      fontWeight: ["hover"], // hover:font-bold
      scale: ["hover"],      // hover:scale-*
    },
  },

  plugins: [],
};
