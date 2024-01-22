import { createTheme } from '@mui/material/styles';
import montserrat from "./fonts"

const theme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
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
  },
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
