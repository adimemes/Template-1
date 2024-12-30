/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "node_modules/preline/dist/*.js"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        gold: '#FFE2B9',
        brown: '#9C8A71'
      },
      spacing:{
        '17': '73px',
        '30': '120px',
      },
      screens: {
        '2xl': '1320px'
      },
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'kablammo': ['Kablammo', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'nerko': ['Nerko One', 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [require("preline/plugin"),require('daisyui'),],
};
