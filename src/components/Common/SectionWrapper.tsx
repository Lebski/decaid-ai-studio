import React from 'react';
import dotsIcon from 'assets/images/dots-vertical.svg';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  onDotsClick?: () => void;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children, onDotsClick }) => {
  return (
    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 w-full max-md:max-w-full">
          <h2 className="flex-1 shrink text-lg font-semibold leading-7 text-gray-900 whitespace-nowrap min-w-[240px] max-md:max-w-full">
            {title}
          </h2>
          <div 
            className="flex flex-col self-start w-5 cursor-pointer group"
            onClick={onDotsClick}
          >
            <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-gray-100">
              <img src={dotsIcon} alt="More options" className="object-contain w-5 aspect-square" />
            </div>
          </div>
        </div>
        <div className="flex mt-5 w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
      </div>
      <div className="flex flex-wrap gap-12 items-start mt-6 w-full max-md:max-w-full">
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;