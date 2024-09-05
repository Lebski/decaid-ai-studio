import React, { useState } from 'react';

interface ToggleSwitchProps {
  id: string;
  onToggle: (isChecked: boolean) => void;
  initialState?: boolean;
  label?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  id,
  onToggle,
  initialState = false,
  label
}) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onToggle(newState);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className="absolute w-0 h-0 opacity-0"
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
      {label && (
        <label
          htmlFor={id}
          className="ml-2 text-sm font-medium leading-5 text-slate-700"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default ToggleSwitch;
