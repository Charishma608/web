import React from 'react';
import { gsap } from 'gsap/dist/gsap';
import Hamburger from '../../atoms/hamburger';
import NavList from '../../molecules/nav-list';
import Logo from '../../atoms/logo';
import {
  StyledActionsBlock,
  StyledHeader,
  StyledHeaderBlock,
  StyledLogoBlock,
  StyledNavBlock,
} from './styled-components';
import LoginButton from '../../atoms/login-button';
import FreeTrialButton from '../../atoms/free-trial-button';

function Header() {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const lastScrollY = React.useRef(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (headerRef.current) {
      if (visible) {
        gsap.to(headerRef.current, { y: 0, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.to(headerRef.current, { y: -120, duration: 0.3, ease: 'power2.in' });
      }
    }
  }, [visible]);

  return (
    <StyledHeader ref={headerRef}>
      <StyledHeaderBlock>
        <StyledLogoBlock>
          <Logo />
        </StyledLogoBlock>
        <StyledNavBlock>
          <NavList />
        </StyledNavBlock>
        <StyledActionsBlock>
          <LoginButton />
          <FreeTrialButton />
        </StyledActionsBlock>
        <Hamburger />
      </StyledHeaderBlock>
    </StyledHeader>
  );
}

export default Header;
