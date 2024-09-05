import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Common/Header';
import AINewsSearch from 'components/Research/AINewsSearch';
import SourcesSection, { Integration } from 'components/Research/SourcesSection';

import apIcon from 'assets/images/source-icons/ap.png';
import zeitIcon from 'assets/images/source-icons/zeit.png';
import tagesschauIcon from 'assets/images/source-icons/tagesschau.png';
import guardianIcon from 'assets/images/source-icons/guardian.png';
import nytimesIcon from 'assets/images/source-icons/nyt.png';
import hnIcon from 'assets/images/source-icons/hackernews.png';
import hfIcon from 'assets/images/source-icons/huggingface.png';
import redditIcon from 'assets/images/source-icons/reddit.png';
import bensbitesIcon from 'assets/images/source-icons/bens-bites.png';

const integrationData: Integration[] = [
    {
        name: "Hacker News",
        imageSrc: hnIcon,
        description: "Streamline software projects, sprints, and bug tracking.",
        isActive: false,
        category: "tech"
    },
    {
        name: "HuggingFace",
        imageSrc: hfIcon,
        description: "Link pull requests and automate workflows.",
        isActive: true,
        category: "tech"
    },
    {
        name: "Reddit",
        imageSrc: redditIcon,
        description: "Embed file previews in projects.",
        isActive: false,
        category: "social"
    },
    {
        name: "Ben's Bites",
        imageSrc: bensbitesIcon,
        description: "AI for Non-Techies — Learn how AI tools can transform your productivity",
        isActive: false,
        category: "tech"
    },
    {
        name: "Die Zeit",
        imageSrc: zeitIcon,
        description: "Die Zeit is a German national weekly newspaper published in Hamburg in Germany.",
        isActive: true,
        category: "news"
    },
    {
        name: "Tagesschau",
        imageSrc: tagesschauIcon,
        description: "Die erste Adresse für Nachrichten und Information: An 365 Tagen im Jahr, rund um die Uhr aktualisiert.",
        isActive: true,
        category: "news"
    },
    {
        name: "AP",
        imageSrc: apIcon,
        description: "The Associated Press is an American not-for-profit news agency headquartered in New York City.",
        isActive: true,
        category: "news"
    },
    {
        name: "The Guardian",
        imageSrc: guardianIcon,
        description: "The Guardian is a British daily newspaper. It was founded in 1821 as The Manchester Guardian.",
        isActive: true,
        category: "news"
    },
    {
        name: "The New York Times",
        imageSrc: nytimesIcon,
        description: "The New York Times is an American daily newspaper based in New York City.",
        isActive: false,
        category: "news"
    }
];

const ResearchPage: React.FC = () => {
    const navigate = useNavigate();
    const [integrations, setIntegrations] = useState<Integration[]>(integrationData);

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