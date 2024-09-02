import React from 'react';

type TestimonialSliderButtonProps = {
  variant: 'next' | 'prev';
  onClick: () => void;
};

const TestimonialSliderButton: React.FC<TestimonialSliderButtonProps> = ({ variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center w-14 h-14 rounded-full border border-white border-opacity-50 transition-colors duration-300 ease-in-out hover:bg-white hover:bg-opacity-50"
      aria-label={variant === 'next' ? 'Next testimonial' : 'Previous testimonial'}
    >
      {variant === 'next' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      )}
    </button>
  );
};

export default TestimonialSliderButton;