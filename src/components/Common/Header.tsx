import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <h1 className="text-3xl font-semibold leading-10 text-gray-900 mb-8">
            {title}
        </h1>
    );
};

export default Header;