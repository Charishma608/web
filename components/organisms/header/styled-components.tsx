/* eslint-disable import/prefer-default-export */
import { styled } from 'baseui';

export const StyledHeader = styled('header', ({ $theme }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 90,
  maxWidth: '1280px',
  width: '100%',
  margin: '0 auto',
  display: 'block',
  backgroundColor: 'transparent',
  background: 'none',
  [$theme.mediaQuery.small]: { padding: '10px 16px' },
  [$theme.mediaQuery.medium]: { padding: '12px 20px' },
  [$theme.mediaQuery.large]: { padding: '15px 0' },
}));

export const StyledHeaderBlock = styled('div', () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledLogoBlock = styled('div', ({ $theme }) => ({
  [$theme.mediaQuery.large]: { minWidth: '250px' },
}));

export const StyledNavBlock = styled('div', ({ $theme }) => ({
  justifyItems: 'flex-start',
  width: '100%',
  display: 'none',
  [$theme.mediaQuery.large]: {
    display: 'flex',
  },
}));

export const StyledActionsBlock = styled('div', ({ $theme }) => ({
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  display: 'none',
  [$theme.mediaQuery.large]: {
    display: 'flex',
  },
}));
