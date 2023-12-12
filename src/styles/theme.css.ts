import { createTheme } from '@vanilla-extract/css';

/**
 * Spacing
 */
const spacing = {
  0: '0',
  1: '1rem',
};

/**
 * Font sizes
 */
const fontSizes = {
  base: '16px',
  16: '1rem',
  24: '1.5rem',
};

/**
 * Font families
 */
const fontFamilies = {
  default: 'Archivo, sans-serif',
  display: 'Ubuntu, sans-serif',
};

/**
 * Font weights
 */
const fontWeights = {
  regular: '300',
  bold: '700',
};

const [themeClass, theme] = createTheme({
  spacing,
  fontFamilies,
  fontWeights,
  fontSizes,
});

export default theme;

export { themeClass };
