/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
      fontWeight: {
        extrabold: '1000',}
      },
    fontFamily:{
      rob: ["roboto", 'sans-serif'],
      job: ['Josefin Sans', 'sans-serif'],
      pop: ['raleway', 'sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class'
}
