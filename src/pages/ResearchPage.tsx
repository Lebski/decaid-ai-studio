import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Common/Header';
import AINewsSearch from 'components/Research/AINewsSearch';
import SourcesSection, { Integration, initialIntegrations } from 'components/Research/SourcesSection';

const ResearchPage: React.FC = () => {
    const navigate = useNavigate();
    const [integrations, setIntegrations] = useState<Integration[]>(initialIntegrations);

    const handleSearchStarted = (searchTerm: string, tagValues: string[]) => {
        const activeSources = integrations
            .filter(integration => integration.isActive)
            .map(integration => integration.name);

        const encodedSearch = encodeURIComponent(searchTerm);
        const encodedTags = encodeURIComponent(JSON.stringify(tagValues));
        const encodedSources = encodeURIComponent(JSON.stringify(activeSources));

        navigate(`/research/results?search=${encodedSearch}&tags=${encodedTags}&sources=${encodedSources}`);
    };

    const handleToggleIntegration = (integrationName: string) => {
        setIntegrations(prevIntegrations =>
            prevIntegrations.map(integration =>
                integration.name === integrationName
                    ? { ...integration, isActive: !integration.isActive }
                    : integration
            )
        );
    };

    const handleViewIntegration = (integrationName: string) => {
        console.log(`Viewing integration: ${integrationName}`);
    };

    const handleRequestSource = () => {
        console.log('Request source');
    };

    return (
        <>
            <Header title="Research" />
            <AINewsSearch onSearchStarted={handleSearchStarted} />
            <SourcesSection
                integrations={integrations}
                onToggleIntegration={handleToggleIntegration}
                onViewIntegration={handleViewIntegration}
                onRequestSource={handleRequestSource}
            />
        </>
    );
};

export default ResearchPage;