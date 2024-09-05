import React, { useState } from "react";
import SectionWrapper from "components/Common/SectionWrapper";
import TabNavigation, { Tab } from "components/Common/TabNavigation";
import Button from "components/Forms/Button";
import IntegrationList from "./IntegrationList";

import plusIcon from "assets/images/plus.svg";
import apIcon from 'assets/images/source-icons/ap.png';
import zeitIcon from 'assets/images/source-icons/zeit.png';
import tagesschauIcon from 'assets/images/source-icons/tagesschau.png';
import guardianIcon from 'assets/images/source-icons/guardian.png';
import nytimesIcon from 'assets/images/source-icons/nyt.png';
import hnIcon from 'assets/images/source-icons/hackernews.png';
import hfIcon from 'assets/images/source-icons/huggingface.png';
import redditIcon from 'assets/images/source-icons/reddit.png';
import bensbitesIcon from 'assets/images/source-icons/bens-bites.png';

const tabs: Tab[] = [
    { label: 'View all', id: 'all' },
    { label: 'News', id: 'news' },
    { label: 'Social Media', id: 'social' },
    { label: 'Finance', id: 'finance' },
    { label: 'Tech', id: 'tech' },
];

interface Integration {
    name: string;
    imageSrc: string;
    description: string;
    isActive: boolean;
    category: string;
}

const initialIntegrations: Integration[] = [
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

const SourcesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [integrations, setIntegrations] = useState(initialIntegrations);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
    };

    const handleDotsClick = () => {
        console.log('Dots clicked');
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

    const filteredIntegrations = activeTab === 'all'
        ? integrations
        : integrations.filter(integration => integration.category === activeTab);

    return (
        <SectionWrapper
            title="Sources"
            hasHairline={false}
            onDotsClick={handleDotsClick}
        >
            <div className="relative w-full">
                <div className="absolute bottom-3 right-0 z-10">
                    <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => console.log('Request source')}
                    >
                        <img src={plusIcon} alt="Add" className="w-5 h-5" />
                        Request Source
                    </Button>
                </div>
                <TabNavigation
                    tabs={tabs}
                    initialActiveTabId="all"
                    onTabChange={handleTabChange}
                />
            </div>
            <IntegrationList
                integrations={filteredIntegrations}
                onToggleIntegration={handleToggleIntegration}
                onViewIntegration={handleViewIntegration}
            />
        </SectionWrapper>
    );
}

export default SourcesSection;