import React, { useState } from 'react';

interface ToggleOption {
  caption: string;
  value: string;
}

interface ToggleProps {
  options: ToggleOption[];
  onSelect: (selectedValue: string) => void;
}

const Toggle: React.FC<ToggleProps> = ({ options, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onSelect(options[index].value);
  };

  return (
    <div>
      <div className="inline-flex overflow-hidden items-start text-sm font-semibold leading-5 whitespace-nowrap rounded-lg border border-gray-300 border-solid shadow-sm">
        {options.map((option, index) => (
          <button
            key={option.value}
            className={`px-4 py-2 ${
              index === selectedIndex
                ? 'text-gray-800 bg-gray-50'
                : 'bg-white text-slate-700'
            } ${
              index !== options.length - 1 ? 'border-r border-gray-300' : ''
            } min-h-[40px]`}
            onClick={() => handleSelect(index)}
          >
            {option.caption}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toggle;
