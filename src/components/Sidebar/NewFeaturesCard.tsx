import React from 'react';

const NewFeaturesCard: React.FC = () => {
  return (
    <div className="flex flex-col px-4 py-5 mt-6 w-full bg-gray-50 rounded-lg">
      <div className="flex flex-col w-full">
        <div className="flex relative gap-1 items-start pr-6 w-full max-md:pr-5">
          <div className="z-0 flex-1 shrink text-sm font-semibold leading-5 text-gray-900 basis-4">
            New features available!
          </div>
          <div className="flex overflow-hidden absolute -right-2 -top-3 z-0 justify-center items-center p-2 w-9 h-9 rounded-lg min-h-[36px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb57fb24d93af049edd86849d5170085e6d090faa8b41bfb6dea24b0b215363?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1" alt="" className="object-contain self-stretch my-auto w-5 aspect-square" />
          </div>
        </div>
        <div className="mt-1 text-sm leading-5 text-slate-600">
          Check out the new dashboard view. Pages now load faster.
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d53629f105056fdf14de0b0eec86797578c52b100bd22c4eeab17217e3de2282?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1" alt="New dashboard preview" className="object-contain mt-4 rounded-md aspect-[1.59] w-[216px]" />
      <div className="flex gap-3 items-start self-start mt-4 text-sm font-semibold leading-5">
        <button className="overflow-hidden gap-1.5 self-stretch whitespace-nowrap text-slate-600">
          Dismiss
        </button>
        <button className="overflow-hidden gap-1.5 self-stretch text-violet-700">
          What's new?
        </button>
      </div>
    </div>
  );
};

export default NewFeaturesCard;