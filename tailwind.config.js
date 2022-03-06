module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#FB6933',
        'orange-secondary': '#FFCCC5',
        'gray-bg': '#FAF9F8',
        'gray-text': '#606060',
        'gray-borders': '#CBCBCB'
      },
      screens: {
        'xss': '480px',
        'xs': '570px'
      },
      boxShadow: {
        'regular': '0px 7px 29px 0px rgba(100, 100, 111, 0.2)'
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
  mode: 'jit'
}
