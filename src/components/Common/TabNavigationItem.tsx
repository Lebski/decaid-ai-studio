import React from 'react';

interface TabNavigationItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabNavigationItem: React.FC<TabNavigationItemProps> = ({
  label,
  isActive,
  onClick
}) => {
  return (
    <li
      className={`gap-2 self-stretch px-1 pb-3 min-h-[32px] cursor-pointer ${
        isActive ? 'text-violet-700 border-b-2 border-violet-500' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default TabNavigationItem;
