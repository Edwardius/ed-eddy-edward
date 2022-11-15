/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme =

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Breakpoints which determine what css layout should be 
    // used for each screen size (eg. "w-16 md:w-32 lg:w-48")
    screens: {
      'sm': '640px', 
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // Default Colour Palette
    colors: {
      transparent: 'trnsparent',
      gray: colors.gray,
      black: colors.black,
      'olive': '#ebe7e0',
      'azukired': {
        '500':'#c03541', 
        '800':'#f06571'
      },
      'azukigray': '#f5f5f5'
    },
    fontWeight: {
      '100': '100',
      '200': '200',
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
      '800': '800',
      '900': '900',
    },
    // Spacing scale, can override these values, new keys must be place in extend.spacing
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    extend: {
      fontFamily: {
        'mono': ['Mono', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans'],
        'title': ['SB', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans']
      },
      opacity: {
        '3':'.03'
      },
      maxWidth: {
        '11xl': '116rem'
      },
      screens: {
        'xs': '320px',
      }
    },
  },
  plugins: [require('tailwind-hamburgers')],
}
