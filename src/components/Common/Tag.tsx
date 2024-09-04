import React from 'react';

interface TagProps {
    text: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
    isRemovable?: boolean;
    removeIconColor?: string;
    onRemove?: () => void;
}

const Tag: React.FC<TagProps> = ({
    text,
    bgColor,
    textColor,
    borderColor,
    isRemovable = false,
    removeIconColor = undefined,
    onRemove = () => { }
}) => {

    const paddingRight = isRemovable ? 'pr-1.5' : 'pr-2.5';

    return (
        <div className={`inline-flex items-center py-0.5 pl-2.5 ${paddingRight} ${bgColor} rounded-full border ${borderColor} border-solid`}>
            <span className={`text-sm font-medium leading-5 ${textColor}`}>
                {text}
            </span>
            {isRemovable && (
                <button 
                    type="button"
                    className={`ml-1 flex items-center justify-center p-0.5 w-4 h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${removeIconColor} focus:ring-opacity-50`} 
                    onClick={onRemove}
                    aria-label={`Remove ${text} tag`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                        <path d="M9 3L3 9M3 3L9 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Tag;