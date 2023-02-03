import { styled } from 'styles';

export const Wrapper = styled('a', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
});

export const Footer = styled('footer', {
  position: 'absolute',
  inset: 'auto 0.4rem 0.4rem 0.4rem',
  padding: '3.2rem',
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgba(0, 0, 0, 0.6)',
  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',
});

export const Title = styled('strong', {
  fontSize: '$lg',
});

export const Price = styled('span', {
  fontSize: '$xl',
  fontWeight: 'bold',
  color: '$green300',
});
