import React from 'react';
import dotsIcon from 'assets/images/dots-vertical.svg';

interface SectionHeaderProps {
  title: string;
  description?: string;
  hasHairline?: boolean;
  onDotsClick?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  hasHairline = true,
  onDotsClick
}) => {
  return (
    <div className="flex flex-col w-full min-w-[240px] max-md:max-w-full">
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col flex-1 shrink justify-center basis-0">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            {title}
          </h2>
          {description && (
            <p className="mt-1 text-sm leading-5 text-ellipsis text-slate-600">
              {description}
            </p>
          )}
        </div>

        {onDotsClick && (
          <div
            className="flex flex-col self-start w-5 cursor-pointer group"
            onClick={onDotsClick}
          >
            <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-gray-100">
              <img
                src={dotsIcon}
                alt="More options"
                className="object-contain w-5 aspect-square"
              />
            </div>
          </div>
        )}
      </div>
      {hasHairline && <div className="flex mt-5 bg-gray-200 min-h-[1px]" />}
    </div>
  );
};

export default SectionHeader;
