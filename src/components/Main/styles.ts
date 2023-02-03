import { styled } from 'styles';

export const Wrapper = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: '3rem',
  color: '$white',
  textAlign: 'center',
  background: '#06092b',
});

export const Logo = styled('img', {
  width: '25rem',
  marginBottom: '2rem',
});

export const Title = styled('h1', {
  marginBottom: '1rem',
  fontSize: '2.5rem',
});

export const Description = styled('h2', {
  fontSize: '2rem',
  fontWeight: 400,
});

export const Illustration = styled('img', {
  width: 'min(30rem, 100%)',
  marginTop: '3rem',
});
