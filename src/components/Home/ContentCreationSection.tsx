import React from 'react';
import dotsIcon from 'assets/images/dots-vertical.svg';
import editIcon from 'assets/images/edit-04.svg';
import searchIcon from 'assets/images/search-refraction.svg';
import ContentCreationCard from './ContentCreationCard';

const ContentCreationSection: React.FC = () => {
  const handleCreatePost = () => {
    console.log('Create a new post');
    // Add your logic here
  };

  const handleFindTopics = () => {
    console.log('Find relevant topics');
    // Add your logic here
  };

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
              action={handleCreatePost}
            />
            <ContentCreationCard
              icon={searchIcon}
              title="Find relevant Topics"
              description="Search the news to find topics to talk about"
              action={handleFindTopics}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreationSection;