import React from 'react';
import bgImage from 'assets/images/bg-testimonial.jpg';
import TestimonialSliderButton from './TestimonialSliderButton';

const Testimonial: React.FC = () => {
  const handlePrevClick = () => {
    // Handle previous testimonial logic
    console.log('Previous testimonial');
  };

  const handleNextClick = () => {
    // Handle next testimonial logic
    console.log('Next testimonial');
  };

  return (
    <section className="relative flex-none w-1/2 min-h-screen overflow-hidden">
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-tl-[80px] rounded-bl-[80px]"
      />
      <div className="relative flex flex-col justify-end h-full p-14 z-10">
        <blockquote className="text-4xl font-medium tracking-tighter leading-10 text-white mb-6">
          "We've been using Untitled to kick start every new project and can't
          imagine working without it."
        </blockquote>
        <div>
          <h2 className="text-3xl font-semibold leading-10 text-white mb-3">
            Amélie Laurent
          </h2>
          <div className="flex justify-between items-end">
            <div className="text-white">
              <p className="text-lg font-semibold leading-7">
                Lead Designer, Layers
              </p>
              <p className="text-base font-medium leading-6">
                Web Development Agency
              </p>
            </div>
            <div className="flex gap-4">
              <TestimonialSliderButton
                variant="prev"
                onClick={handlePrevClick}
              />
              <TestimonialSliderButton
                variant="next"
                onClick={handleNextClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
