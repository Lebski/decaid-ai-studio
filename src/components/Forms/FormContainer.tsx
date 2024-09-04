import React from "react";

interface FormContainerProps {
  className?: string;
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ className, children }) => {
  return (
    <div className={`flex flex-wrap w-full max-w-[808px] max-md:max-w-full ${className}`}>
      {children}
    </div>
  );
};

export default FormContainer;