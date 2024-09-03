import React from 'react';
import Sidebar from 'components/Sidebar/Sidebar';

interface LayoutProps {
    title: string;
    children: React.ReactNode;
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

const Layout: React.FC<LayoutProps> = ({ title, sidebarProps, children}) => {
    return (
        <div className="flex h-screen bg-white">
            <div className="fixed h-full">
                <Sidebar {...sidebarProps} />
            </div>

            <main className="flex-1 overflow-y-auto ml-[280px] pt-8 pb-12 bg-white">
                <div className="px-8 max-md:px-5">
                    <h1 className="text-3xl font-semibold leading-10 text-gray-900">
                        {title}
                    </h1>
                    <div className="mt-8">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;