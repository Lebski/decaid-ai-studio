import React from 'react';
import InspirationCard, { InspirationCardProps } from './InspirationCard';
import SectionWrapper from 'components/Common/SectionWrapper';

interface InspirationSectionProps {
    cards: InspirationCardProps[]
}

const InspirationSection: React.FC<InspirationSectionProps> = ({ cards }) => {
  const handleDotsClick = () => {
    console.log('Dots clicked in Inspiration section');
    // Add your logic here
  };

  return (
    <SectionWrapper title="Inspiration" onDotsClick={handleDotsClick}>
      {cards.map((card, index) => (
        <InspirationCard key={index} {...card} />
      ))}
    </SectionWrapper>
  );
};

export default InspirationSection;