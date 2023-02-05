import { Roboto } from '@next/font/google';

import { globalCss } from 'styles';

const roboto = Roboto({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
});

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,

    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',

    ':is(::before, ::after)': {
      boxSizing: 'inherit',
    },
  },

  html: {
    fontSize: '62.5%',
  },

  body: {
    fontFamily: roboto.style.fontFamily,
    fontWeight: 400,
    background: '$gray900',
    color: '$gray100',
  },
});
