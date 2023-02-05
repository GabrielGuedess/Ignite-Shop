import Link from 'next/link';

import { styled } from 'styles';

export const Wrapper = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: '65.6rem',
});

export const Title = styled('h1', {
  fontSize: '$2xl',
  color: '$gray100',
});

export const Description = styled('p', {
  fontSize: '$xl',
  color: '$gray300',
  maxWidth: '56rem',
  textAlign: 'center',
  marginTop: '3.2rem',
  lineHeight: 1.4,
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '13rem',
  height: '14.5rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '6.4rem',

  img: {
    objectFit: 'cover',
  },
});

export const Button = styled(Link, {
  marginTop: '8rem',
  display: 'block',
  fontSize: '$lg',
  color: '$green500',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    color: '$green300',
  },
});
