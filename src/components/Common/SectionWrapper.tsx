import React from 'react';
import SectionHeader from './SectionHeader';

interface SectionWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  onDotsClick?: () => void;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, description, children, onDotsClick }) => {
  return (
    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
      <SectionHeader title={title} description={description} onDotsClick={onDotsClick} />
      <div className="flex flex-wrap gap-12 items-start mt-6">
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;