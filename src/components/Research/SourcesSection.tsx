import React, { useState, useMemo } from "react";
import SectionWrapper from "components/Common/SectionWrapper";
import TabNavigation, { Tab } from "components/Common/TabNavigation";
import Button from "components/Forms/Button";
import IntegrationList from "./IntegrationList";

import plusIcon from "assets/images/plus.svg";

export interface Integration {
    name: string;
    imageSrc: string;
    description: string;
    isActive: boolean;
    category: string;
}

interface SourcesSectionProps {
    integrations: Integration[];
    onToggleIntegration: (integrationName: string) => void;
    onViewIntegration: (integrationName: string) => void;
    onRequestSource: () => void;
}

const SourcesSection: React.FC<SourcesSectionProps> = ({
    integrations,
    onToggleIntegration,
    onViewIntegration,
    onRequestSource
}) => {
    const tabs: Tab[] = useMemo(() => {
        const categorySet: { [key: string]: boolean } = { all: true };
        integrations.forEach(integration => {
            categorySet[integration.category] = true;
        });
        const categories = Object.keys(categorySet);
        
        return categories.map(category => ({
            label: category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1),
            id: category
        }));
    }, [integrations]);

    const [activeTab, setActiveTab] = useState(tabs[0]?.id || 'all');

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
    };

    const handleDotsClick = () => {
        console.log('Dots clicked');
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
                        onClick={onRequestSource}
                    >
                        <img src={plusIcon} alt="Add" className="w-5 h-5" />
                        Request Source
                    </Button>
                </div>
                <TabNavigation
                    tabs={tabs}
                    initialActiveTabId={tabs[0]?.id || 'all'}
                    onTabChange={handleTabChange}
                />
            </div>
            <IntegrationList
                integrations={filteredIntegrations}
                onToggleIntegration={onToggleIntegration}
                onViewIntegration={onViewIntegration}
            />
        </SectionWrapper>
    );
}

export default SourcesSection;