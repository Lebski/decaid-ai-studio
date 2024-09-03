import React from 'react';
import SearchBar from './SearchBar';
import NavItem from './NavItem';
import NewFeaturesCard from './NewFeaturesCard';
import UserProfile from './UserProfile';

import newFeatureThumbnail from 'assets/images/new-feature-thumbnail.jpeg';
import supportIcon from 'assets/images/life-buoy-01.svg';
import settingsIcon from 'assets/images/settings-01.svg';

interface SidebarProps {
  logo: string;
  navItems: Array<{
    icon: string;
    label: string;
    isActive?: boolean;
  }>;
  userProfile: {
    avatar: string;
    name: string;
    email: string;
  };
  onSearchInputChange?: (value: string) => void;
  onSearchSubmit?: (value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  logo, 
  navItems, 
  userProfile, 
  onSearchInputChange, 
  onSearchSubmit 
}) => {
  return (
    <aside className="flex flex-col h-full bg-white border-r border-gray-200 w-[280px] min-w-[240px] overflow-hidden">
      <div className="flex flex-col flex-grow">
        <div className="pt-8 pr-3.5 pl-6 max-md:pl-5">
          <img src={logo} alt="Company logo" className="object-contain shrink-0" />
        </div>
        <SearchBar 
          onInputChange={onSearchInputChange}
          onSubmit={onSearchSubmit}
        />
        <nav className="flex flex-col px-4 mt-6 text-base font-semibold leading-6 text-slate-700">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </nav>
      </div>
      <div className="flex flex-col px-4 pb-8 mt-auto">
        <nav className="flex flex-col w-full text-base font-semibold leading-6 text-slate-700">
          <NavItem icon={supportIcon} label="Support" />
          <NavItem icon={settingsIcon} label="Settings" />
        </nav>
        <NewFeaturesCard 
          title="New feature" 
          description="This is a new feature description" 
          image={newFeatureThumbnail}
          onClose={() => console.log('Close clicked')}
          onDismiss={() => console.log('Dismiss clicked')}
          onWhatsNew={() => console.log('What\'s new clicked')}
          onPlay={() => console.log('Play clicked')}
        />
        <UserProfile {...userProfile} />
      </div>
    </aside>
  );
};

export default Sidebar;
export type { SidebarProps };