import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import Section from '../components/atoms/section';
import FindPositionSection from '../content/find-position.section';
import CategoriesSection from '../content/categories.section';
import CustomerSection from '../content/customer.section';
import BlogsSection from '../content/blogs.section';

const Home: NextPage = function () {
  return (
    <>
      <FindPositionSection />

      <div style={{ marginBottom: '80px' }}>
        <CategoriesSection />
      </div>

      <Section
        id="skills"
        style={{
          padding: '80px 0',
          backgroundColor: '#fff',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Heading and description */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            marginBottom: '60px',
            display: 'grid',
            gap: '30px',
          }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '1.2',
              margin: 0,
            }}
          >
            Get the skills you need for a job that is in demand
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: '#97c680',
                marginLeft: '8px',
                verticalAlign: 'middle',
              }}
            ></span>
          </h2>
          <p
            style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: '#333',
              margin: 0,
            }}
          >
            The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
          </p>
        </div>

        {/* Skills & What We Do */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
          }}
        >
          {/* Skills List */}
          <div style={{ flex: '1 1 500px', position: 'relative', paddingLeft: '20px' }}>
            {/* Dotted Line */}
            <div
              style={{
                position: 'absolute',
                left: '48px',
                top: '10px',
                bottom: '10px',
                width: '1px',
                background:
                  'repeating-linear-gradient(to bottom, #97c680, #97c680 3px, transparent 3px, transparent 6px)',
                zIndex: 1,
              }}
            ></div>

            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
                title: 'Leadership',
                description: 'Fully committed to the success company.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                ),
                title: 'Responsibility',
                description: 'Employees will always be my top priority.',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                ),
                title: 'Flexibility',
                description: 'The ability to switch is an important skill.',
              },
            ].map((skill, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  marginBottom: '32px',
                  position: 'relative',
                  paddingLeft: '20px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid #97c680',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#97c680',
                    padding: '8px',
                    backgroundColor: 'white',
                    zIndex: 2,
                    marginLeft: '28px',
                  }}
                >
                  {skill.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
                    {skill.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}>
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What We Do Card */}
          <div
            style={{
              flex: '0 1 300px',
              backgroundColor: '#f9f9f9',
              borderRadius: '12px',
              padding: '30px 24px',
              alignSelf: 'flex-start',
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>What we do</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#555', marginBottom: '24px' }}>
              We help ambitious professionals like you build in-demand skills and land your dream job.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderTop: '1px solid #eee',
                paddingTop: '20px',
              }}
            >
              <div>
                <div style={{ fontSize: '28px', fontWeight: 700, color: '#97c680' }}>5+</div>
                <div style={{ fontSize: '13px', color: '#777', marginTop: '4px' }}>
                  Years of Experience
                </div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 700, color: '#97c680' }}>50+</div>
                <div style={{ fontSize: '13px', color: '#777', marginTop: '4px' }}>
                  Types of Courses
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CustomerSection />
      <BlogsSection />
    </>
  );
};

// @ts-ignore
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
