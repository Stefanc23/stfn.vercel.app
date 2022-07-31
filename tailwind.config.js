const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './react-bricks/**/*.tsx',
    './node_modules/react-bricks-ui/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F58148',
          50: '#FEF5EE',
          100: '#FEE8D6',
          200: '#FBCEAD',
          300: '#F8AB79',
          400: '#F58148',
          500: '#F15B1E',
          600: '#E34113',
          700: '#BC2F12',
          800: '#962716',
          900: '#782316',
        },
        secondary: {
          DEFAULT: '#FEB914',
          50: '#FFE3A2',
          100: '#FFDD8E',
          200: '#FED165',
          300: '#FEC53D',
          400: '#FEB914',
          500: '#D99901',
          600: '#A17201',
          700: '#694A00',
          800: '#312300',
          900: '#000000',
        },
        light: '#EDF2F7',
        dark: '#232323',
      },
      fontFamily: {
        sans: ['Inter', fontFamily.sans],
      },
    },
  },
};
