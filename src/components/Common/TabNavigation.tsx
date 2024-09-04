import React, { useState } from 'react';
import TabItem from './TabNavigationItem';

export interface Tab {
  label: string;
  id: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  initialActiveTabId?: string;
  onTabChange?: (tabId: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, initialActiveTabId, onTabChange }) => {
  const [activeTabId, setActiveTabId] = useState(initialActiveTabId || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <nav className="border-b border-gray-200 w-full">
      <ul className="flex gap-3 items-start text-sm font-semibold leading-5 text-gray-500">
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            label={tab.label}
            isActive={tab.id === activeTabId}
            onClick={() => handleTabClick(tab.id)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default TabNavigation;