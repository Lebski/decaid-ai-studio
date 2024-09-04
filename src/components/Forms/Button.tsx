import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg' | 'square';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, variant, size, className, onClick, children }) => {
  const baseClasses = "flex overflow-hidden gap-1.5 justify-center items-center font-semibold leading-6 rounded-lg border-2 border-solid shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500";
  const sizeClasses = {
    sm: "text-sm px-3 py-2",
    md: "text-sm px-3.5 py-2.5",
    lg: "text-md px-4 py-2.5",
    square: "text-sm px-3 aspect-square",
  };
  const variantClasses = {
    primary: "text-white bg-violet-500 border-white border-opacity-10 hover:bg-violet-700",
    secondary: "text-slate-700 bg-white border-gray-300",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;