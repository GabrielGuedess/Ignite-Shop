import { styled } from 'styles';

export const Wrapper = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '6.4rem',
  maxWidth: '118.0rem',
  margin: '0 auto',
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '57.6rem',
  height: '65.6rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const Title = styled('h1', {
  fontSize: '$2xl',
  color: '$gray300',
});

export const Price = styled('span', {
  marginTop: '1.6rem',
  display: 'block',
  fontSize: '$2xl',
  color: '$green300',
});

export const Description = styled('p', {
  marginTop: '4rem',
  fontSize: '$md',
  lineHeight: 1.6,
  color: '$gray300',
});

export const Button = styled('button', {
  marginTop: 'auto',
  background: '$green500',
  border: 0,
  color: 'white',
  borderRadius: 8,
  padding: '2rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',
  transition: 'all 0.2s ease-in-out',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green300',
  },
});
