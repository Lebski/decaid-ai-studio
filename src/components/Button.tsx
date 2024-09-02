import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, variant, className, children }) => {
  const baseClasses = "flex overflow-hidden gap-1.5 justify-center items-center px-4 py-2.5 w-full text-base font-semibold leading-6 rounded-lg border-2 border-solid shadow-sm";
  const variantClasses = {
    primary: "text-white bg-violet-500 border-white border-opacity-10",
    secondary: "text-slate-700 bg-white border-gray-300",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;