import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, value, onChange, required }) => {
  return (
    <div className="flex flex-col w-full mb-5">
      <label htmlFor={`input-${label.toLowerCase()}`} className="gap-0.5 self-start text-sm font-medium leading-5 whitespace-nowrap text-slate-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="flex gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
      />
    </div>
  );
};

export default InputField;