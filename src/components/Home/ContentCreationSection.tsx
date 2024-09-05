import React from 'react';
import editIcon from 'assets/images/edit-04.svg';
import searchIcon from 'assets/images/search-refraction.svg';
import ContentCreationCard from './ContentCreationCard';
import SectionWrapper from 'components/Common/SectionWrapper';

interface ContentCreationSectionProps {
  onCreatePost: () => void;
  onFindTopics: () => void;
}

const ContentCreationSection: React.FC<ContentCreationSectionProps> = ({
  onCreatePost,
  onFindTopics
}) => {
  const handleDotsClick = () => {
    console.log('Dots clicked in Content Creation section');
    // Add your logic here
  };

  return (
    <SectionWrapper
      title="Start creating content"
      onDotsClick={handleDotsClick}
    >
      <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          <ContentCreationCard
            icon={editIcon}
            title="Create a new post"
            description="Dive into the editor and start creating"
            action={onCreatePost}
          />
          <ContentCreationCard
            icon={searchIcon}
            title="Find relevant Topics"
            description="Search the news to find topics to talk about"
            action={onFindTopics}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContentCreationSection;
