import React from 'react';
import ContentHeader from './ContentHeader';
import ContentCreationSection from './ContentCreationSection';
import InspirationSection from './InspirationSection';

const MainContent: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col flex-1 shrink self-start pt-8 pb-12 bg-white basis-0 min-w-[240px] max-md:max-w-full">
      <ContentHeader />
      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
          <ContentCreationSection />
          <InspirationSection />
        </div>
      </div>
    </main>
  );
};

export default MainContent;