import React from 'react';

const ContentCreationSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-4 w-full max-md:max-w-full">
        <h2 className="flex-1 shrink text-lg font-semibold leading-7 text-gray-900 min-w-[240px] max-md:max-w-full">
          Start creating content
        </h2>
        <div className="flex flex-col self-start w-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/27b851aea66c4d666f1ce529e99b2eefd71b87052354fd2ff0203d3f1f8b74ed?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1" alt="" className="object-contain w-5 aspect-square" />
        </div>
      </div>
      <div className="flex mt-5 w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-8 items-start mt-6 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
            <ContentCreationCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f6a8dcaaea91e0c465698bfc2fd7e25ee364e4e11981aaca16b7a65b86dc3b?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1"
              title="Create a new post"
              description="Dive into the editor and start creating"
            />
            <ContentCreationCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1136cf0427a7be39f9b8fec48122920c075fd2e06edf516027652afabaac08bd?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1"
              title="Find relevant Topics"
              description="Search the news to find topics to talk about"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContentCreationCardProps {
  icon: string;
  title: string;
  description: string;
}

const ContentCreationCard: React.FC<ContentCreationCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-wrap flex-1 shrink gap-3 items-start p-5 bg-white rounded-xl border border-gray-200 border-solid shadow-sm basis-0 min-w-[320px] max-md:max-w-full">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-12 shadow-sm aspect-square" />
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <div className="text-base font-semibold leading-6 text-slate-700 max-md:max-w-full">{title}</div>
        <div className="text-sm leading-5 text-ellipsis text-slate-600 max-md:max-w-full">{description}</div>
      </div>
    </div>
  );
};

export default ContentCreationSection;