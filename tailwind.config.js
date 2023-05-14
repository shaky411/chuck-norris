/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        phudu: ["Phudu", "cursive"],
        cinzel: ["Cinzel Decorative", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
