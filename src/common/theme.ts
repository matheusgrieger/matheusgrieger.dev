export const colorPalette = {
  indigo: '#3a015c',
  atomicTangerine: '#f7996e',
  white: '#fff',
  blackOlive: '#353531',
  grayWeb: '#73287',
};

export const fontFamily = {
  main: '\'Montserrat\', sans-serif',
  display: '\'Major Mono Display\', monospaced',
};

export const transition = {
  in: {
    speed: 250,
    easing: 'ease-out',
  },
  out: {
    speed: 200,
    easing: 'ease-in',
  },
  general: {
    speed: 200,
    easing: 'ease',
  },
};

export const gap = 32;

export const breakpoints = {
  tablet: 769,
  desktop: 960 + 2 * gap,
  widescreen: 1152 + 2 * gap,
  fullhd: 1344 + 2 * gap,
};
