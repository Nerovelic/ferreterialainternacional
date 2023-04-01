/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx,js,tsx}'
  ],
  theme: {
    extend:{
      fontFamily:{
        sans: ['var(--font-merriweather_sans)']
      },
      backgroundImage: {
        'ferreteria': "url('../images/ferre.png')"
      }
    },
  },
  plugins: [],
};
