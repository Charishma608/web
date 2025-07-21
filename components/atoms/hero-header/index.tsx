import React from 'react';
import { useStyletron } from 'baseui';

function HeroHeader() {
  const [css, theme] = useStyletron();
  const dotStyle = { 
    fontFamily: '"Arial", sans-serif',
    color: '#00C29F' 
  };
  
  return (
    <div className={css({
      marginBottom: '40px',
      [theme.mediaQuery.medium]: {
        marginBottom: '60px',
      },
      [theme.mediaQuery.large]: {
        marginBottom: '90px',
      },
    })}>
      <h1 className={css({
        marginTop: '40px',
        marginBottom: '90px',
        fontSize: '56px',
        marginLeft: '-100px',
        lineHeight: 1.2,
        fontWeight: 700,
        opacity: 1,
        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d',
        whiteSpace: 'nowrap',
        [theme.mediaQuery.small]: { 
          fontSize: '32px',
          marginBottom: '40px',
          textAlign: 'center',
          marginLeft: 0,
          whiteSpace: 'normal',
          marginTop: '20px',
        },
        [theme.mediaQuery.medium]: { 
          fontSize: '40px',
          textAlign: 'left',
          marginLeft: 0,
          whiteSpace: 'nowrap',
          marginTop: '30px',
        },
        [theme.mediaQuery.large]: { 
          fontSize: '56px',
          marginLeft: '-100px',
          marginTop: '40px',
          whiteSpace: 'nowrap',
        },
      })}>
        <div>Smart IT<span style={dotStyle}>.</span></div>
        <div>Reliable Service<span style={dotStyle}>.</span></div>
        <div>Always on Support<span style={dotStyle}>.</span></div>
      </h1>
    </div>
  );
}

export default HeroHeader;
