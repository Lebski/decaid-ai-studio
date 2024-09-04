import React from "react";

interface FormContentProps {
    className?: string;
    children: React.ReactNode;
}

const FormContent: React.FC<FormContentProps> = ({ className, children }) => {
    return (
        <div className={`flex flex-col gap-3 flex-1 shrink max-w-lg basis-0 min-w-[320px] max-md:max-w-full ${className || ""}`}>
            {children}
        </div>
    );
};

export default FormContent;