import React from 'react';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Tab, Tabs } from 'baseui/tabs-motion';
import Section from '../components/atoms/section';
import { CATEGORIES } from '../lib/category-type';
import CategoryCard from '../components/molecules/category-card';

gsap.registerPlugin(ScrollTrigger);

function CategoriesSection() {
  const [css, theme] = useStyletron();
  const [activeKey, setActiveKey] = React.useState('all');

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.category-flex',
        start: '-340px top',
        end: '-120px end',
        fastScrollEnd: true,
        onEnter: () => tl.play(),
        onEnterBack: () => tl.reverse(),
        onLeaveBack: () => tl.reverse(),
      },
    });

    tl.fromTo(
      ['.category-flex0', '.category-flex3'],
      { y: 0 },
      { y: 124, duration: 0.6 }
    ).fromTo(
      '.category-flex1',
      { y: 0 },
      { y: 78, duration: 0.6 },
      0
    ).paused();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const tabOverrides = {
    Tab: {
      style: {
        paddingTop: '6px',
        paddingBottom: '6px',
        marginRight: '12px',
        marginLeft: '12px',
        fontWeight: 700,
      },
    },
  };

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
          <span style={{ color: '#97c680' }}>.</span>
        </h2>
      </div>

      <Tabs
        activeKey={activeKey}
        onChange={({ activeKey }) => setActiveKey(activeKey as string)}
        overrides={{
          TabList: { style: { justifyContent: 'center', flexWrap: 'wrap' } },
          TabBorder: { style: { backgroundColor: 'white' } },
          TabHighlight: { style: { height: '1px' } },
        }}
      >
        <Tab key="all" overrides={tabOverrides} title="All services" />
        <Tab key="entertainment" overrides={tabOverrides} title="Gen AI" />
        <Tab key="lifestyle" overrides={tabOverrides} title="Cloud" />
        <Tab key="writing" overrides={tabOverrides} title="Digital Transformation" />
        <Tab key="business" overrides={tabOverrides} title="MVP" />
        <Tab key="food" overrides={tabOverrides} title="Staff Augmentation" />
      </Tabs>

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
        {CATEGORIES.filter(category => {
          if (
            ['all', 'entertainment', 'lifestyle', 'writing', 'business', 'food'].includes(activeKey)
          ) {
            return true;
          }
          return category.name.toLowerCase().includes(activeKey);
        }).map((category, index) => (
          <FlexGridItem className={`category-flex${index}`} key={category.id}>
            <CategoryCard category={category} index={index} />
          </FlexGridItem>
        ))}
      </FlexGrid>
    </Section>
  );
}

export default CategoriesSection;
