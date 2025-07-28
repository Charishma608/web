import React, { useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';
import { CategoryType } from '../../../lib/category-type';
import {
  CategoryGoToImageBlock,
  StyledCategoryBlock,
  StyledCategoryDuration,
  StyledCategoryImage,
  StyledCategoryName,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalImage,
  ModalTitle,
  ModalDescription,
  ModalFeatures,
  FeatureItem
} from './styled-components';

// Service details data
const serviceDetails = {
  0: {
    name: 'Gen AI',
    description: 'Transform your business with cutting-edge Generative AI solutions. Our AI experts help you leverage the latest in machine learning to create intelligent, automated systems that drive growth and efficiency.',
    features: [
      'Custom AI model development',
      'Natural Language Processing (NLP) solutions',
      'Computer Vision applications',
      'Predictive analytics and insights',
      'AI-powered automation'
    ]
  },
  1: {
    name: 'Cloud',
    description: 'Comprehensive cloud solutions tailored to your business needs. We help you migrate, optimize, and manage your infrastructure on all major cloud platforms.',
    features: [
      'Cloud migration services',
      'Multi-cloud strategy development',
      'Cloud security & compliance',
      'Serverless architecture',
      'Container orchestration with Kubernetes'
    ]
  },
  2: {
    name: 'MVP',
    description: 'Quickly validate your business idea with a Minimum Viable Product. We help you build, test, and iterate fast to achieve product-market fit.',
    features: [
      'Rapid prototyping',
      'User feedback integration',
      'Market validation',
      'Scalable architecture',
      'Performance optimization'
    ]
  },
  3: {
    name: 'Staff Augmentation',
    description: 'Scale your team with top-tier talent. Our staff augmentation services provide you with skilled professionals who integrate seamlessly with your existing teams.',
    features: [
      'Dedicated developers',
      'Flexible engagement models',
      'Quick onboarding process',
      'Specialized expertise',
      'Seamless team integration'
    ]
  }
};

function CategoryCard({ category, index }: { category: CategoryType, index: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detail = serviceDetails[category.id as keyof typeof serviceDetails];

  const onMouseEnter = (e: any) => {
    gsap.to(e.currentTarget, { color: '#97c680' });
    gsap.to(`.category-flex${index}-arrow`, { y: 0 });
  };

  const onMouseLeave = (e: any) => {
    gsap.to(e.currentTarget, { color: 'black' });
    gsap.to(`.category-flex${index}-arrow`, { y: -60 });
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <StyledCategoryBlock 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}
        onClick={openModal}
        style={{ cursor: 'pointer' }}
      >
        <CategoryGoToImageBlock className={`category-flex${index}-arrow`}>
          <Image src="/up-right-arrow.png" alt="View details" height="16px" width="16px" />
        </CategoryGoToImageBlock>
        <StyledCategoryImage src={`/${category.imageUrl}`} alt={category.name} />
        <StyledCategoryName>{category.name}</StyledCategoryName>
        <StyledCategoryDuration>{category.duration}</StyledCategoryDuration>
      </StyledCategoryBlock>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalImage 
              src={`/${category.imageUrl}`} 
              alt={category.name} 
              width={800} 
              height={400}
            />
            <ModalTitle>{category.name}</ModalTitle>
            <ModalDescription>{detail.description}</ModalDescription>
            <ModalFeatures>
              {detail.features.map((feature, i) => (
                <FeatureItem key={i}>{feature}</FeatureItem>
              ))}
            </ModalFeatures>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default CategoryCard;
