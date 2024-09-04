import React from 'react';

interface InputLabelProps {
    label: string;
    description: string;
    required?: boolean;
}

const InputLabel: React.FC<InputLabelProps> = ({ label, description, required }) => {

    return (
        <div className="flex flex-col flex-1 shrink text-sm leading-5 basis-0 max-w-[280px] min-w-[200px]">
        <label className="flex gap-0.5 items-center self-start font-semibold whitespace-nowrap">
          <span className="self-stretch my-auto text-slate-700">{label}</span>
          {required && <span className="self-stretch my-auto text-violet-500">*</span>}
        </label>
        <p className="text-slate-600">{description}</p>
      </div>
    );
}

export default InputLabel;