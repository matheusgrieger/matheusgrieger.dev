import { globalStyle } from '@vanilla-extract/css';
import theme from './theme.css';

/**
 * Modern CSS Reset adapted from Josh W Comeau
 * @see https://www.joshwcomeau.com/css/custom-css-reset/
 */

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('*', {
  margin: 0,
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
  fontFamily: theme.fontFamilies.default,
  fontSize: theme.fontSizes.base,
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});
