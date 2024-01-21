/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./app/**/*.{js,ts,jsx,tsx}",
    './containers/**/*.{js,ts,jsx,tsx,mdx}'
    
  ],
  theme: {
    extend: {
      text: {
        alpha: '24px',
        base: '20px',
        light: '16px',
        small: '14px',
        little: '12px'
      },
      colors: {
        primary: '#23856D',
        secondary: '#23A6F0',
        white: '#FFFFFF',
        black: '#252B42',
        grey: '#737373',
        lightGrey: '#BDBDBD',
        lightWhite: '#FAFAFA',
        lightGreen: '#2DC071'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 600,
        bolder: 700
      },
    },
  },
  plugins: [],
}

