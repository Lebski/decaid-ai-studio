import React from 'react';
import Header from 'components/Common/Header';
import AINewsSearch from 'components/Research/AINewsSearch';
import SourcesSection from 'components/Research/SourcesSection';

const ResearchPage: React.FC = () => {
    const handleSearchStarted = (searchTerm: string, tagValues: string[]) => {
        console.log('Search started:', { searchTerm, tagValues });
        // Add your logic here to handle the search
    };

    return (
        <>
            <Header title="Research" />
            <AINewsSearch onSearchStarted={handleSearchStarted} />
            <SourcesSection />
        </>
    );
};

export default ResearchPage;