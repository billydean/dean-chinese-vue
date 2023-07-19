/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mob': '0px',
      'tab': '481px',
      'sm': '769px',
      'lg': '1025px',
      'xl': '1201px'
    },
    extend: {},
  },
  plugins: [],
}

// light green: green 100
// green: emerald 200
// forest: cyan 800
// light: zinc 100
//lightest: slate 50