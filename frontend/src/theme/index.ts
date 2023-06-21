import { defineStyle, extendTheme } from '@chakra-ui/react';
import { headingTheme } from './components/Heading';

const fonts = { mono: `'Menlo', monospace` };

// const breakpoints = {
//   sm: '40em',
//   md: '52em',
//   lg: '64em',
//   xl: '80em',
// };

const colors = {
  // brand: {
  //   900: '#1a365d',
  //   800: '#153e75',
  //   700: '#2a69ac',
  // },
  brand: {
    900: '#A0365d',
    800: '#AA3e75',
    700: '#AA69ac',
  },
};

export const theme = extendTheme({
  semanticTokens: {
    // colors: {
    //   text: {
    //     default: '#16161D',
    //     _dark: '#ade3b8',
    //   },
    //   heroGradientStart: {
    //     default: '#7928CA',
    //     _dark: '#e3a7f9',
    //   },
    //   heroGradientEnd: {
    //     default: '#FF0080',
    //     _dark: '#fbec8f',
    //   },
    // },
    // radii: {
    //   button: '12px',
    // },
  },
  colors,
  fonts,
  // breakpoints,
  components: {
    Heading: headingTheme,
  },
});
