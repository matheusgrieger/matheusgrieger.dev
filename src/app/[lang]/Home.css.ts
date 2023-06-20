import { style } from '@vanilla-extract/css';
import theme from '@/styles/theme.css';

export const main = style({
  minHeight: '100%',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const logo = style({
  width: 300,
  height: 'auto',
  display: 'block',
  marginBottom: theme.spacing[1],
});

export const text = style({
  fontFamily: theme.fontFamilies.display,
  fontSize: theme.fontSizes[24],
  fontWeight: theme.fontWeights.light,
});
