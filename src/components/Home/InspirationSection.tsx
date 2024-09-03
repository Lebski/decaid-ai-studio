import React from 'react';
import InspirationCard, { InspirationCardProps } from './InspirationCard';
import SectionWrapper from 'components/SectionWrapper';

interface InspirationSectionProps {
    cards: InspirationCardProps[]
}

const InspirationSection: React.FC<InspirationSectionProps> = ({ cards }) => {
  return (
    <SectionWrapper title="Inspiration">
      {cards.map((card, index) => (
        <InspirationCard key={index} {...card} />
      ))}
    </SectionWrapper>
  );
};

export default InspirationSection;