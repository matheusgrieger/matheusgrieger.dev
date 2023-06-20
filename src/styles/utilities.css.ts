import { style } from '@vanilla-extract/css';

export const srOnly = style({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  borderWidth: 0,
});
