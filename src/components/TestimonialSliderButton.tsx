import React from 'react';
import next from 'assets/images/testimonial-slider-next.svg';
import prev from 'assets/images/testimonial-slider-prev.svg';

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
        <img src={next} alt="Next testimonial" className="w-6 h-6 flex-shrink-0" />
      ) : (
        <img src={prev} alt="Previous testimonial" className="w-6 h-6 flex-shrink-0" />
      )}
    </button>
  );
};

export default TestimonialSliderButton;