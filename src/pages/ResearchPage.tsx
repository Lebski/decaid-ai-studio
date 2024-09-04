import React from 'react';
import Header from 'components/Common/Header';
import AINewsSearch from 'components/Research/AINewsSearch';

const ResearchPage: React.FC = () => {
    return (
        <>
            <Header title="Research" />
            <AINewsSearch />
        </>
    );
};

export default ResearchPage;