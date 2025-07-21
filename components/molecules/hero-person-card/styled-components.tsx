import { styled } from 'baseui';

export const HeroPerson = styled('div', ({ $theme }) => ({
  position: 'relative',
  paddingLeft: '20px',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  /* Desktop styles */
  '@media (min-width: 768px)': {
    height: '100%', /* Let parent container handle height on desktop */
  },
  /* Mobile styles */
  '@media (max-width: 767px)': {
    paddingLeft: '10px',
    paddingRight: '10px',
    height: '300px',
    '&:first-child': {
      paddingLeft: '16px',
    },
    '&:last-child': {
      paddingRight: '16px',
    },
  },
}));

export const HeroPersonContainer = styled('div', () => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
  },
  /* Mobile styles */
  '@media (max-width: 767px)': {
    minHeight: '280px',
  },
  /* Desktop styles */
  '@media (min-width: 768px)': {
    minHeight: '500px', /* Original desktop height */
  },
}));
