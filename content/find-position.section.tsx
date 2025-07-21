import React from 'react';
import { gsap } from 'gsap';
import { useStyletron } from 'baseui';
import { HERO_PERSONS } from '../lib/hero-persons';
import { HeroPersonsDiv } from './styled-components';
import Section from '../components/atoms/section';
import HeroHeader from '../components/atoms/hero-header';
import EmailInput from '../components/molecules/email-input';
import HeroPersonCard from '../components/molecules/hero-person-card';
import { Button, KIND, SIZE } from 'baseui/button';

function FindPositionSection() {
  const [css, theme] = useStyletron();
  
  React.useEffect(() => {
    gsap.fromTo('.hero-persons', { opacity: 0, x: -400 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo('.hero-header-form', { opacity: 0, y: 100 }, {
      opacity: 1, y: 0, duration: 1.1, delay: 0.5,
    });
  });

  return (
    <Section id="find-position" paddingTop={['80px', '100px', '140px']}>
      {/* Mobile Layout */}
      <div className={css({
        display: 'block',
        [theme.mediaQuery.large]: {
          display: 'none'
        }
      })}>
        {/* Mobile Images Row */}
        <div className={css({
          width: '100%',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          padding: '20px 0 40px',
          margin: '0'
        })}>
          <div className={css({
            display: 'inline-flex',
            gap: '16px',
            padding: '0 16px',
            height: '320px'
          })}>
            {HERO_PERSONS.map((person, index) => (
              <div key={`mobile-${person.id}`} className={css({
                display: 'inline-block',
                width: '280px',
                flexShrink: 0
              })}>
                <HeroPersonCard index={index} person={person} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Text Content */}
        <div className="hero-header-form" style={{ padding: '0 16px 40px' }}>
          <HeroHeader />
          <div className={css({
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px'
          })}>
            <Button
              kind={KIND.primary}
              size={SIZE.large}
              overrides={{
                BaseButton: {
                  style: {
                    backgroundColor: '#00C29F',
                    minWidth: '280px',
                    width: '100%',
                    maxWidth: '320px',
                    ':hover': {
                      backgroundColor: '#00A98E',
                    },
                    ':active': {
                      backgroundColor: '#00917A',
                    },
                  },
                },
              }}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className={css({
        display: 'none',
        [theme.mediaQuery.large]: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px'
        }
      })}>
        {/* Left Column - Text Content */}
        <div className={css({
          flex: '1',
          maxWidth: '600px',
          paddingLeft: '100px'
        })}>
          <div className="hero-header-form">
            <HeroHeader />
            <div className={css({ marginTop: '40px' })}>
              <Button
                kind={KIND.primary}
                size={SIZE.large}
                overrides={{
                  BaseButton: {
                    style: {
                      backgroundColor: '#00C29F',
                      minWidth: '280px',
                      width: '100%',
                      maxWidth: '320px',
                      ':hover': {
                        backgroundColor: '#00A98E',
                      },
                      ':active': {
                        backgroundColor: '#00917A',
                      },
                    },
                  },
                }}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className={css({
          flex: '1',
          maxWidth: '600px',
          position: 'relative',
          alignSelf: 'flex-end'
        })}>
          <HeroPersonsDiv className="hero-persons">
            {HERO_PERSONS.map((person, index) => (
              <HeroPersonCard
                key={person.id}
                index={index}
                person={person}
              />
            ))}
          </HeroPersonsDiv>
        </div>
      </div>
    </Section>
  );
}

export default FindPositionSection;
