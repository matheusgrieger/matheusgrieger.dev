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
  default: 'sans-serif',
  display: 'var(--font-ubuntu)',
};

/**
 * Font weights
 */
const fontWeights = {
  light: '300',
};

const [themeClass, theme] = createTheme({
  spacing,
  fontFamilies,
  fontWeights,
  fontSizes,
});

export default theme;

export { themeClass };
