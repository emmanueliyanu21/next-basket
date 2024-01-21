import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  primary: {
    main: '#23856D',
  },
  secondary: {
    main: '#23A6F0',
  },
  white: {
    main: '#FFFFFF',
  },
  black: {
    main: '#252B42',
  },
  grey: {
    main: '#737373',
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export { theme };
