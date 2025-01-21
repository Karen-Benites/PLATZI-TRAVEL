/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'SanFrancisco': "url('../imgs/SanFrancisco.jpg')",
        'bali': "url('../imgs/bali.jpg')",
        'chicago': "url('../imgs/chicago.jpg')",
        'europe': "url('../imgs/europe.jpg')",
        'iceland': "url('../imgs/iceland.jpg')",
        'LA': "url('../imgs/LA.jpg')",
        'Miami': "url('../imgs/miami.jpg')",
        'NewYork': "url('../imgs/NewYork.jpg')",
        'norway': "url('../imgs/norway.jpg')",
        'SanFranciscoDesktop': "url('../imgs/SanFranciscoDesktop.jpg')",
        'seattle': "url('../imgs/seattle.jpg')",
        'switzerland': "url('../imgs/switzerland.jpg')",
        'sydney': "url('../imgs/sydney.jpg')",
        'yosemite': "url('../imgs/yosemite.jpg')",
        'SearchIcon': "url(../imgs/icons/SearchIcon.svg)",
        'moon': 'url(../imgs/icons/moon.svg)',
        'user': "url(../imgs/icons/User.svg)"
      },

      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      }),

      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      },

      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },

      boxShadow: {
        'custom-normal': "0px 2px 7px 0px rgba(0, 0, 0, 0.25)",
      },

      backgroundSize: {
        'custom-size': '24px 24px', // valores personalizados
      },
    },
  },
  plugins: [],
}

