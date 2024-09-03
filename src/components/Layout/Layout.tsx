import React from 'react';
import Sidebar, { SidebarProps } from 'components/Sidebar/Sidebar';

interface LayoutProps {
    children: React.ReactNode;
    sidebarProps: SidebarProps;
}

const Layout: React.FC<LayoutProps> = ({ sidebarProps, children }) => {
    return (
        <div className="flex h-screen bg-white">
            <div className="fixed h-full">
                <Sidebar {...sidebarProps} />
            </div>

            <main className="flex-1 overflow-y-auto ml-[280px] pt-8 pb-12 bg-white">
                <div className="px-8 max-md:px-5">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;