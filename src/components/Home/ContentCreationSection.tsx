import React from 'react';
import dotsIcon from 'assets/images/dots-vertical.svg';
import editIcon from 'assets/images/edit-04.svg';
import searchIcon from 'assets/images/search-refraction.svg';

const ContentCreationSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-4 w-full max-md:max-w-full">
        <h2 className="flex-1 shrink text-lg font-semibold leading-7 text-gray-900 min-w-[240px] max-md:max-w-full">
          Start creating content
        </h2>
        <div className="flex flex-col self-start w-5">
          <img src={dotsIcon} alt="" className="object-contain w-5 aspect-square" />
        </div>
      </div>
      <div className="flex mt-5 w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-8 items-start mt-6 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
            <ContentCreationCard
              icon={editIcon}
              title="Create a new post"
              description="Dive into the editor and start creating"
            />
            <ContentCreationCard
              icon={searchIcon}
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
        <div className="flex w-12 h-12 p-3 justify-center items-center rounded-lg border border-[#E4E7EC] bg-white shadow-[0_0_0_1px_rgba(16,24,40,0.18)_inset,0_-2px_0_0_rgba(16,24,40,0.05)_inset,0_1px_2px_0_rgba(16,24,40,0.05)]">
            <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-6 h-6 shadow-sm aspect-square" />
        </div>
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <div className="text-base font-semibold leading-6 text-slate-700 max-md:max-w-full">{title}</div>
        <div className="text-sm leading-5 text-ellipsis text-slate-600 max-md:max-w-full">{description}</div>
      </div>
    </div>
  );
};

export default ContentCreationSection;