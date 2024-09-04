import React from "react";

interface ToggleProps {
    // Add props if needed
}

const Toggle: React.FC<ToggleProps> = () => {
    return (
        <div className="flex overflow-hidden items-start max-w-full text-sm font-semibold leading-5 whitespace-nowrap rounded-lg border border-gray-300 border-solid shadow-sm min-h-[40px] w-[132px]">
            <button className="gap-2 self-stretch px-4 py-2 text-gray-800 bg-gray-50 border-r border-gray-300 min-h-[40px]">
                Text
            </button>
            <button className="gap-2 self-stretch px-4 py-2 bg-white border-r border-gray-300 min-h-[40px] text-slate-700">
                Voice
            </button>
        </div>
    );
};

export default Toggle;