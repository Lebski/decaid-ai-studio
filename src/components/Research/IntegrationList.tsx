import React from 'react';
import IntegrationCard from './IntegrationCard';

interface Integration {
    name: string;
    imageSrc: string;
    description: string;
    isActive: boolean;
}

interface IntegrationListProps {
    integrations: Integration[];
    onToggleIntegration: (integrationName: string) => void;
    onViewIntegration: (integrationName: string) => void;
}

const IntegrationList: React.FC<IntegrationListProps> = ({
    integrations,
    onToggleIntegration,
    onViewIntegration
}) => {
    return (
        <main className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
                <IntegrationCard
                    key={index}
                    name={integration.name}
                    imageSrc={integration.imageSrc}
                    description={integration.description}
                    isActive={integration.isActive}
                    onToggle={() => onToggleIntegration(integration.name)}
                    onViewIntegration={() => onViewIntegration(integration.name)}
                />
            ))}
        </main>
    );
};

export default IntegrationList;