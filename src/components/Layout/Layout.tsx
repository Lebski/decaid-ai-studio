import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from 'components/Home/MainContent';

interface LayoutProps {
  sidebarProps: {
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
  };
}

const Layout: React.FC<LayoutProps> = ({ sidebarProps }) => {
  return (
    <div className="flex flex-wrap bg-white">
      <Sidebar {...sidebarProps} />
      <MainContent />
    </div>
  );
};

export default Layout;