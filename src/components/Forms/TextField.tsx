import React from "react";

interface TextFieldProps {
    name: string;
    ariaLabel: string;
    placeholder?: string;
    maxChars?: number;
}

const TextField: React.FC<TextFieldProps> = ({ name, ariaLabel, placeholder, maxChars }) => {
    return (
        <div className="flex flex-col mt-3 min-h-[180px] max-md:max-w-full">
            <textarea
              className="flex-1 shrink gap-2 px-3.5 py-3 bg-white rounded-lg border border-gray-300 border-solid shadow-sm size-full max-md:max-w-full text-base leading-6 text-gray-900 min-h-[154px]"
              placeholder={placeholder}
              aria-label={ariaLabel}
              name={name}
            ></textarea>
            <p className="mt-1.5 text-sm leading-5 text-slate-600 max-md:max-w-full">
              275 characters left
            </p>
          </div>
    );
};

export default TextField;