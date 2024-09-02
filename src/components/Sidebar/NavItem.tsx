import React from 'react';

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  return (
    <div className={`flex overflow-hidden gap-2 items-center px-3 py-2 mt-1 w-full rounded-md ${isActive ? 'bg-gray-50 text-gray-800' : 'bg-white'}`}>
      <div className="flex flex-1 shrink gap-3 items-center self-stretch my-auto w-full basis-0">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <div className="self-stretch my-auto">{label}</div>
      </div>
    </div>
  );
};

export default NavItem;