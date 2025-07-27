import { styled } from 'baseui';

export const StyledCategoryBlock = styled('div', ({
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
}));

export const CategoryGoToImageBlock = styled('div', ({
  borderRadius: '50%',
  height: '32px',
  width: '32px',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 2,
  right: '12px',
  top: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate3d(0px, -60px, 0px)',
}));

export const StyledCategoryImage = styled('img', ({
  width: '100%',
  borderRadius: '20px',
}));

export const StyledCategoryName = styled('h3', ({
  fontWeight: 800,
  marginTop: '10px',
  marginBottom: '4px',
}));

export const StyledCategoryDuration = styled('p', ({
  margin: 0,
  fontSize: '14px',
  fontWeight: 500,
}));

// Modal Styles
export const ModalOverlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
});

export const ModalContent = styled('div', {
  backgroundColor: 'white',
  borderRadius: '12px',
  maxWidth: '800px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  padding: '30px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
});

export const CloseButton = styled('button', {
  position: 'absolute',
  top: '15px',
  right: '15px',
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#666',
  '&:hover': {
    color: '#333',
  },
});

export const ModalImage = styled('img', {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '20px',
});

export const ModalTitle = styled('h2', {
  fontSize: '28px',
  marginBottom: '15px',
  color: '#333',
});

export const ModalDescription = styled('p', {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#555',
  marginBottom: '20px',
});

export const ModalFeatures = styled('div', {
  marginTop: '20px',
});

export const FeatureItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  '&:before': {
    content: '"✓"',
    color: '#97c680',
    marginRight: '10px',
    fontWeight: 'bold',
  },
});
