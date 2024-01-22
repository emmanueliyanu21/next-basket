import montserrat from "./libs/fonts"
// fontFamily: montserrat.style.fontFamily,
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./app/**/*.{js,ts,jsx,tsx}",
    './containers/**/*.{js,ts,jsx,tsx,mdx}'
    
  ],
  purge: [
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
        montserrat: ['var(--font-montserrat)'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 600,
        bolder: 700
      },
      // screens: {
      //   'xs': '0px',
      //   'sm': '600px',
      //   'md': '960px',
      //   'lg': '1100px',
      //   'xl': '1920px',
      //   // Add your custom breakpoints here
      //   '2xl': '2400px',
      // },
    },
  },
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
  ],
}

