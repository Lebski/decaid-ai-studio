import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon: string;
  label: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <div 
        className={`flex overflow-hidden gap-2 items-center px-3 py-2 mt-1 w-full rounded-md cursor-pointer hover:bg-gray-100 transition-colors ${isActive ? 'bg-gray-50 text-gray-800' : 'bg-white'}`}
      >
        <div className="flex flex-1 shrink gap-3 items-center self-stretch my-auto w-full basis-0">
          <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <div className="self-stretch my-auto">{label}</div>
        </div>
      </div>
    </Link>
  );
};

export default NavItem;