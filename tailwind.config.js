const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './**/*.html',
    '!./**/node_modules/**',
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto'],
    },
    extend: {
      animation: {
        chatBounce1: 'chatBounce1 1s cubic-bezier(0.33, 0, 0.67, 0.50) infinite 50ms',
        chatBounce2: 'chatBounce2 1s cubic-bezier(0.33, 0, 0.67, 0.50) infinite 50ms',
        chatBounce3: 'chatBounce3 1s cubic-bezier(0.33, 0, 0.67, 0.50) infinite 50ms',
      },
      colors: {
        'stiletto': {
          50: '#FFE0E0',
          100: '#FFC2C2',
          200: '#FF8585',
          300: '#FF4747',
          400: '#F31616',
          500: '#CC0000',
          600: '#AD0000',
          700: '#8F0000',
          800: '#700000',
          900: '#520000'
        },
        'rhino': {
          50: '#E2EEF8',
          100: '#C1DAF1',
          200: '#86B8E4',
          300: '#4894D5',
          400: '#276DAA',
          500: '#19476E',
          600: '#143857',
          700: '#0F2B43',
          800: '#0A1D2E',
          900: '#050D15'
        },
      },
      keyframes: {
        chatBounce1: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-14px)' },
          '100%': { transform: 'translateY(0)' },
        },
        chatBounce2: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
          '100%': { transform: 'translateY(0)' },
        },
        chatBounce3: {
          '0%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-14px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      screens: {
        'xs': '500px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}

