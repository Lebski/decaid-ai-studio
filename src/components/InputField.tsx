import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col w-full mb-5">
      <label htmlFor={`input-${label.toLowerCase()}`} className="gap-0.5 self-start text-sm font-medium leading-5 whitespace-nowrap text-slate-700">
        {label}
      </label>
      <input
        type={type}
        id={`input-${label.toLowerCase()}`}
        placeholder={placeholder}
        className="flex gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
      />
    </div>
  );
};

export default InputField;