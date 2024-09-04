import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, variant, className, onClick, children }) => {
  const baseClasses = "flex overflow-hidden gap-1.5 justify-center items-center px-4 py-2.5 w-full text-base font-semibold leading-6 rounded-lg border-2 border-solid shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500";
  const variantClasses = {
    primary: "text-white bg-violet-500 border-white border-opacity-10 hover:bg-violet-700",
    secondary: "text-slate-700 bg-white border-gray-300",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;