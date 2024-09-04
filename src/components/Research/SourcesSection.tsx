import React from "react";
import SectionWrapper from "components/Common/SectionWrapper";
import TabNavigation, { Tab } from "components/Common/TabNavigation";
import Button from "components/Forms/Button";

import plusIcon from "assets/images/plus.svg";
import IntegrationList from "./IntegrationList";

const tabs: Tab[] = [
    { label: 'View all', id: 'all' },
    { label: 'News', id: 'news' },
    { label: 'Social Media', id: 'social' },
    { label: 'Finance', id: 'finance' },
    { label: 'Tech', id: 'tech' },
];

const SourcesSection: React.FC = () => {
    const handleTabChange = (tabId: string) => {
        console.log(`Tab changed to: ${tabId}`);
        // Perform any necessary actions when the tab changes
    };

    const handleDotsClick = () => {
        console.log('Dots clicked');
    };

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
            <IntegrationList />
        </SectionWrapper>
    );
}

export default SourcesSection;