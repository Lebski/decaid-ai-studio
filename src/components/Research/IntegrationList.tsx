import React from 'react';
import IntegrationCard from './IntegrationCard';

import apIcon from 'assets/images/source-icons/ap.png';
import zeitIcon from 'assets/images/source-icons/zeit.png';
import tagesschauIcon from 'assets/images/source-icons/tagesschau.png';
import guardianIcon from 'assets/images/source-icons/guardian.png';
import nytimesIcon from 'assets/images/source-icons/nyt.png';
import hnIcon from 'assets/images/source-icons/hackernews.png';
import hfIcon from 'assets/images/source-icons/huggingface.png';
import redditIcon from 'assets/images/source-icons/reddit.png';
import bensbitesIcon from 'assets/images/source-icons/bens-bites.png';

interface Integration {
    name: string;
    imageSrc: string;
    description: string;
    isActive: boolean;
}

const integrations: Integration[] = [
    {
        name: "Hacker News",
        imageSrc: hnIcon,
        description: "Streamline software projects, sprints, and bug tracking.",
        isActive: false
    },
    {
        name: "HuggingFace",
        imageSrc: hfIcon,
        description: "Link pull requests and automate workflows.",
        isActive: true
    },
    {
        name: "Reddit",
        imageSrc: redditIcon,
        description: "Embed file previews in projects.",
        isActive: false
    },
    {
        name: "Ben's Bites",
        imageSrc: bensbitesIcon,
        description: "AI for Non-Techies — Learn how AI tools can transform your productivity",
        isActive: false
    },
    {
        name: "Die Zeit",
        imageSrc: zeitIcon,
        description: "Die Zeit is a German national weekly newspaper published in Hamburg in Germany.",
        isActive: true
    },
    {
        name: "Tagesschau",
        imageSrc: tagesschauIcon,
        description: "Die erste Adresse für Nachrichten und Information: An 365 Tagen im Jahr, rund um die Uhr aktualisiert.",
        isActive: true
    },
    {
        name: "AP",
        imageSrc: apIcon,
        description: "The Associated Press is an American not-for-profit news agency headquartered in New York City.",
        isActive: true
    },
    {
        name: "The Guardian",
        imageSrc: guardianIcon,
        description: "The Guardian is a British daily newspaper. It was founded in 1821 as The Manchester Guardian.",
        isActive: true
    },
    {
        name: "The New York Times",
        imageSrc: nytimesIcon,
        description: "The New York Times is an American daily newspaper based in New York City.",
        isActive: false
    }
];

const IntegrationList: React.FC = () => {
    const handleToggleIntegration = (integrationName: string) => {
        console.log(`Integration toggled: ${integrationName}`);
    }

    const handleViewIntegration = (integrationName: string) => {
        console.log(`Viewing integration: ${integrationName}`);
    }

    return (
        <main className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
                <IntegrationCard
                    key={index}
                    name={integration.name}
                    imageSrc={integration.imageSrc}
                    description={integration.description}
                    isActive={integration.isActive}
                    onToggle={() => handleToggleIntegration(integration.name)}
                    onViewIntegration={() => handleViewIntegration(integration.name)}
                />
            ))}
        </main>
    );
};

export default IntegrationList;