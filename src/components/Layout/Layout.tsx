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
        <div className="flex flex-wrap bg-white">
            <Sidebar {...sidebarProps} />

            <main className="flex overflow-hidden flex-col flex-1 shrink self-start pt-8 pb-12 bg-white basis-0 min-w-[240px] max-md:max-w-full">
                <h1 className="text-3xl font-semibold leading-10 text-gray-900 px-8 max-md:px-5">
                    {title}
                </h1>
                <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                    <div className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;