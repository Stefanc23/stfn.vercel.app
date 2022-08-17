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
        dark: '#222831',
      },
      fontFamily: {
        sans: ['Inter', fontFamily.sans],
      },
      animation: {
        gradient: 'gradient 10s infinite alternate',
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundSize: '300%',
            backgroundPosition: 'left',
          },
          '100%': {
            backgroundSize: '300%',
            backgroundPosition: 'right',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.69deg)',
          },
          '75%': {
            transform: 'rotate(-0.69deg)',
          },
        },
      },
    },
  },
};
