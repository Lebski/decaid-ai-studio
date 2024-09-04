import IconBox from 'components/Common/IconBox';
import React from 'react';

interface ContentCreationCardProps {
    icon: string;
    title: string;
    description: string;
    action: () => void;
}

const ContentCreationCard: React.FC<ContentCreationCardProps> = ({ icon, title, description, action }) => {
    return (
        <div
            className="flex flex-wrap flex-1 shrink gap-3 items-start p-5 bg-white rounded-xl border border-gray-200 border-solid shadow-sm basis-0 min-w-[320px] max-md:max-w-full cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={action}
        >
            <IconBox icon={icon} variant='lg'/>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-base font-semibold leading-6 text-slate-700 max-md:max-w-full">{title}</div>
                <div className="text-sm leading-5 text-ellipsis text-slate-600 max-md:max-w-full">{description}</div>
            </div>
        </div>
    );
};

export default ContentCreationCard;