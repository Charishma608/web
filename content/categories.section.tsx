import React from 'react';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

import Section from '../components/atoms/section';
import { CATEGORIES } from '../lib/category-type';
import CategoryCard from '../components/molecules/category-card';

gsap.registerPlugin(ScrollTrigger);

function CategoriesSection() {
  const [css, theme] = useStyletron();






  return (
    <Section
      id="categories"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        backgroundColor: '#fdfdfd',
      }}
    >
      <div>
        <h2
          className={css({
            marginTop: 0,
            lineHeight: '1.2em',
            fontWeight: '700',
            textAlign: 'center',
            [theme.mediaQuery.small]: {
              fontSize: '28px',
              marginBottom: '32px',
              paddingLeft: '12px',
              paddingRight: '12px',
            },
            [theme.mediaQuery.medium]: {
              fontSize: '38px',
              marginBottom: '40px',
              paddingLeft: '16px',
              paddingRight: '16px',
            },
            [theme.mediaQuery.large]: {
              fontSize: '42px',
              marginBottom: '48px',
              paddingLeft: '0px',
              paddingRight: '0px',
            },
          })}
        >
          Our Services
          <span style={{ color: '#8BF1FC' }}>.</span>
        </h2>
      </div>

      <FlexGrid
        className="category-flex"
        flexGridColumnCount={[1, 2, 3, 4]}
        flexGridColumnGap={['scale200', 'scale400', 'scale800', 'scale1200']}
        flexGridRowGap={['scale400', 'scale600', 'scale800', 'scale900']}
        marginTop="scale800"
        overrides={{
          Block: {
            style: {
              paddingLeft: '16px',
              paddingRight: '16px',
              marginTop: '40px',
            },
          },
        }}
      >
        {CATEGORIES.map((category, index) => (
          <FlexGridItem className={`category-flex${index}`} key={category.id}>
            <CategoryCard category={category} index={index} />
          </FlexGridItem>
        ))}
      </FlexGrid>
    </Section>
  );
}

export default CategoriesSection;
