/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "banner-bg": "url('/src/assets/blurry-gradient-haikei.svg')"
      }
    },
  },
    daisyui: {
    themes: [],
  },
 plugins: [require("daisyui")],
}

