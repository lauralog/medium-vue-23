/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, css, sass, scss, vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#ffc017',
        medium_green: '#1a8917',
        medium_gray1: 'rgb(242, 242, 242)',
        medium_gray2: 'rgb(107, 107, 107)',
        medium_gray3: 'rgb(36, 36, 36)',
      },
      fontFamily: {
        mysans: ['Inter', 'Helvetica', 'sans-serif'],
        myserif: ['Roboto Serif', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}