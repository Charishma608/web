/* eslint-disable import/prefer-default-export */
import { styled } from 'baseui';

type StyledNavLinkProps = {
  $isActive: boolean;
};

export const StyledNav = styled('nav', ({ $theme }) => ({
  width: '100%',
  [$theme.mediaQuery.small]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  [$theme.mediaQuery.medium]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  [$theme.mediaQuery.large]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
}));

export const StyledNavLink = styled<'a', StyledNavLinkProps>('a', ({ $theme, $isActive }) => ({
  color: $theme.colors.mono800,
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  lineHeight: '22px',
  boxShadow: $isActive ? 'inset 0 -9px 0 0 #555555' : 'inset 0 0 0 0 #555555',
  transition: 'box-shadow 0.3s ease',
  ':hover': {
    boxShadow: 'inset 0 -9px 0 0 #555555',
  },
  [$theme.mediaQuery.small]: {
    padding: '20px',
    borderBottom: '1px solid rgba(30,30,47,.1)',
    display: 'block',
    width: '100%',
  },
  [$theme.mediaQuery.medium]: {
    padding: '20px',
    borderBottom: '1px solid rgba(30,30,47,.1)',
    display: 'block',
    width: '100%',
  },
  [$theme.mediaQuery.large]: {
    marginRight: '1.5rem',
    display: 'inline-block',
    borderBottom: 'none',
  },
}));
