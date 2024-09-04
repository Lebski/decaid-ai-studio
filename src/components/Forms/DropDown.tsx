import React, { useState, useEffect } from 'react';

import chevronDown from 'assets/images/chevron-down.svg';
import chevronUp from 'assets/images/chevron-up.svg';

interface DropdownItem {
  label: string;
  value: string;
  iconSrc?: string;
}

interface DropDownProps {
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
  defaultSelected?: string | null;
}

const DropDown: React.FC<DropDownProps> = ({ 
  items, 
  onSelect, 
  placeholder = 'Select an option', 
  defaultSelected = null 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  useEffect(() => {
    if (defaultSelected) {
      const defaultItem = items.find(item => item.value === defaultSelected);
      if (defaultItem) {
        setSelectedItem(defaultItem);
        onSelect(defaultItem);
      }
    }
  }, [defaultSelected, items, onSelect]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="flex items-center justify-between px-3.5 py-2.5 w-full bg-white rounded-lg border border-gray-300 border-solid shadow-sm cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex items-center gap-2 flex-1">
          {selectedItem?.iconSrc && (
            <img src={selectedItem.iconSrc} alt="" className="w-5 h-5 object-contain" />
          )}
          <span className={selectedItem ? 'text-gray-900' : 'text-gray-400'}>
            {selectedItem ? selectedItem.label : placeholder}
          </span>
        </div>
        <img
          src={isOpen ? chevronUp : chevronDown}
          alt={isOpen ? "Close" : "Open"}
          className="w-5 h-5 object-contain"
        />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {items.map((item) => (
            <li
              key={item.value}
              className="px-3.5 py-2.5 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => handleSelect(item)}
            >
              {item.iconSrc && (
                <img src={item.iconSrc} alt="" className="w-5 h-5 object-contain" />
              )}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
export type { DropdownItem };