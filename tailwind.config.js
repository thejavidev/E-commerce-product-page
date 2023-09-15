/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {
        'max': '1479px'
      },
      'xl': {
        'max': '1299px'
      },
      'lg': {
        'max': '1023px'
      },
      'md': {
        'max': '991px'
      },
      'sm': {
        'max': '766px'
      },
      'xs': {
        'max': '480px'
      },
    },
  },
  plugins: [],
}