import React from 'react';

interface PlayButtonProps {
  onClick?: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 flex-shrink-0 backdrop-blur-[8px] rounded-full overflow-hidden relative cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="absolute top-0 left-0"
      >
        <g filter="url(#filter0_b_186_1699)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM20.25 32.8033L33.75 25.2576C34.75 24.6987 34.75 23.3013 33.75 22.7424L20.25 15.1967C19.25 14.6378 18 15.3365 18 16.4543V31.5457C18 32.6635 19.25 33.3622 20.25 32.8033Z"
            fill="white"
            fillOpacity="1"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_186_1699"
            x="-16"
            y="-16"
            width="80"
            height="80"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_186_1699"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_186_1699"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};

export default PlayButton;