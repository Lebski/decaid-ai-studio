import React from 'react';

const ContentHeader: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-3xl font-semibold leading-10 text-gray-900 whitespace-nowrap max-md:max-w-full">
      <div className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
            <h1 className="flex-1 shrink w-full min-w-[320px] max-md:max-w-full">Home</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;