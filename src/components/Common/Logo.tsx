import React from 'react';
import logoImage from 'assets/images/logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="flex absolute top-8 left-8 z-0 items-start max-w-full w-[142px]">
      <img
        loading="lazy"
        src={logoImage}
        className="object-contain aspect-[4.44] w-[142px]"
        alt="Company Logo"
      />
    </div>
  );
};

export default Logo;
