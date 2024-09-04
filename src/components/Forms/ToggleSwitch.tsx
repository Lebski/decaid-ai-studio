import React, { useState } from 'react';

interface ToggleSwitchProps {
  label: string;
  id: string;
  onToggle: (isChecked: boolean) => void;
  initialState?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, id, onToggle, initialState = false }) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onToggle(newState);
  };

  return (
    <div className="flex gap-2 items-start min-w-[240px] w-[344px]">
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor={id}
        className={`flex overflow-hidden items-center p-0.5 w-9 rounded-full min-h-[20px] cursor-pointer transition-colors duration-200 ease-in-out ${
          isChecked ? 'bg-violet-500' : 'bg-gray-200'
        }`}
      >
        <div
          className={`flex self-stretch my-auto w-4 h-4 bg-white rounded-full shadow min-h-[16px] transition-transform duration-200 ease-in-out ${
            isChecked ? 'translate-x-4' : 'translate-x-0'
          }`}
        />
      </label>
      <label htmlFor={id} className="flex-1 shrink text-sm font-medium leading-5 min-w-[240px] text-slate-700">
        {label}
      </label>
    </div>
  );
};

export default ToggleSwitch;