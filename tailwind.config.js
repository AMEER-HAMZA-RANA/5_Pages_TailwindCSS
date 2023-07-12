/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
      },
      
      screens: {
        'mini': '360px',
        'miniLg': '420px',
        'sm': '640px',
        'md': '768px',
        'lg': '1030px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '2000px',
        '4xl': '2500px'
      }
      ,

      fontFamily: {
        lucky: ['Luckiest Guy','sans-serif']
      },
    },
  },
  plugins: [],
  prefix: "ameer1-",
}
