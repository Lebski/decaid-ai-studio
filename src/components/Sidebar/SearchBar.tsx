import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-col px-6 mt-6 max-w-full text-base leading-6 text-gray-500 whitespace-nowrap w-[279px] max-md:px-5">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 w-full bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
            <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fddd009ff5792fce86ef31defd8ace7e48ca792e51dd23fd6ce9f957a6c6815?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
              <input type="text" placeholder="Search" aria-label="Search" className="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis bg-transparent border-none outline-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;