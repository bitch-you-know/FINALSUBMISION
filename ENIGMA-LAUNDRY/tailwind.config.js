
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {      backgroundImage: {
      'home-background': "url('/src/assets/bgHome.jpg')", // Ganti dengan path ke gambar kamu
      'home-login': "url('/src/assets/login.jpg')"
    }
},
  },
  darkMode: "class",
  plugins: [nextui()]
}
