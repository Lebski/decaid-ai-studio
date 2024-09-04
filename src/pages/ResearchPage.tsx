import React from 'react';
import Header from 'components/Common/Header';
import AINewsSearch from 'components/Research/AINewsSearch';
import SourcesSection from 'components/Research/SourcesSection';

const ResearchPage: React.FC = () => {
    return (
        <>
            <Header title="Research" />
            <AINewsSearch />
            <SourcesSection />
        </>
    );
};

export default ResearchPage;