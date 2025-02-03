/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './public/**/*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'SanFrancisco': "url('/public/imgs/SanFrancisco.jpg')",
        'SanFranciscoDesktop': "url('/public/imgs/SanFranciscoDesktop.jpg')",
        'SearchIcon': "url(/public/imgs/icons/SearchIcon.svg)",
        'moon': 'url(/public/imgs/icons/moon.svg)',
      },

      colors: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      },

      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },

      boxShadow: {
        'custom-normal': "0px 2px 7px 0px rgba(0, 0, 0, 0.25)",
        'custom-shadow-focus': "inset 0px 0px 1px 1px rgba(204, 45, 74, 0.9)",
        'card_hover_shadow': "0px 0px 9px 2px rgba(102, 102, 102, 0.5)"
      },

      backgroundSize: {
        'custom-size': '24px 24px', // valores personalizados
      },
    },
  },
  plugins: [],
}

