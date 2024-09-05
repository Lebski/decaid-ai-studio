import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Common/Header';
import AINewsSearch from 'components/Research/AINewsSearch';
import SourcesSection from 'components/Research/SourcesSection';

const ResearchPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSearchStarted = (searchTerm: string, tagValues: string[]) => {
        console.log('Search started:', { searchTerm, tagValues });
        
        // Encode the search term and tags for the URL
        const encodedSearch = encodeURIComponent(searchTerm);
        const encodedTags = encodeURIComponent(JSON.stringify(tagValues));

        // Navigate to the results page with search parameters
        navigate(`/research/results?search=${encodedSearch}&tags=${encodedTags}`);
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