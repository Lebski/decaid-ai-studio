import React from 'react';
import SearchBar from './SearchBar';
import NavItem from './NavItem';
import NewFeaturesCard from './NewFeaturesCard';
import UserProfile from './UserProfile';

import newFeatureThumbnail from 'assets/images/new-feature-thumbnail.jpeg';

interface SidebarProps {
  logo: string;
  brandName: string;
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
}

const Sidebar: React.FC<SidebarProps> = ({ logo, brandName, navItems, userProfile }) => {
  return (
    <aside className="flex overflow-hidden h-full bg-white border-r border-gray-200 min-w-[240px] w-[280px]">
      <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px]">
        <div className="flex flex-col pt-8 w-full">
          <div className="flex flex-col pr-3.5 pl-6 w-full max-md:pl-5">
            <div className="flex items-start">
              <div className="flex gap-3 items-start min-w-[240px]">
                <img loading="lazy" src={logo} alt="Company logo" className="object-contain shrink-0 w-12 shadow aspect-square" />
                <img loading="lazy" src={brandName} alt="Brand name" className="object-contain shrink-0 aspect-[3.79] w-[182px]" />
              </div>
            </div>
          </div>
          <SearchBar />
          <nav className="flex flex-col px-4 mt-6 w-full text-base font-semibold leading-6 whitespace-nowrap text-slate-700">
            {navItems.map((item, index) => (
              <NavItem key={index} icon={item.icon} label={item.label} isActive={item.isActive} />
            ))}
          </nav>
        </div>
        <div className="flex flex-col px-4 pb-8 mt-24 w-full max-md:mt-10">
          <nav className="flex flex-col w-full text-base font-semibold leading-6 whitespace-nowrap text-slate-700">
            <NavItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/82165820428cc238990a78d869106d13a8b2750b688ae0e593d76049444ab1ea?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1" label="Support" />
            <NavItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/727e1cb83bb5bd47f11b21cfab976deb51bd3279e25e7aa10272dc03f18b5b58?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1" label="Settings" />
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
      </div>
    </aside>
  );
};

export default Sidebar;