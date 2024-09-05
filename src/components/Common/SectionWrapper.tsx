import React from 'react';
import SectionHeader from './SectionHeader';

interface SectionWrapperProps {
  title: string;
  description?: string;
  hasHairline?: boolean;
  children: React.ReactNode;
  onDotsClick?: () => void;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  description,
  hasHairline,
  children,
  onDotsClick
}) => {
  return (
    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
      <SectionHeader
        title={title}
        description={description}
        onDotsClick={onDotsClick}
        hasHairline={hasHairline}
      />
      <div className="flex flex-wrap gap-12 items-start mt-6">{children}</div>
    </div>
  );
};

export default SectionWrapper;
