/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-75px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 2.0s ease-out'
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        phudu: ["Phudu", "cursive"],
        bruno: ["Bruno Ace", "cursive"],
        cinzel: ["Cinzel Decorative", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        space: ["Space Mono", "monospace"],
        bebas: ["Bebas Neue", "sans-serif"],
        ysabeau: ["Ysabeau", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
}
