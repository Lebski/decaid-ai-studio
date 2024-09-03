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
      <div className="flex w-12 h-12 p-3 justify-center items-center rounded-lg border border-[#E4E7EC] bg-white shadow-[0_0_0_1px_rgba(16,24,40,0.18)_inset,0_-2px_0_0_rgba(16,24,40,0.05)_inset,0_1px_2px_0_rgba(16,24,40,0.05)]">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-6 h-6 shadow-sm aspect-square" />
      </div>
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <div className="text-base font-semibold leading-6 text-slate-700 max-md:max-w-full">{title}</div>
        <div className="text-sm leading-5 text-ellipsis text-slate-600 max-md:max-w-full">{description}</div>
      </div>
    </div>
  );
};

export default ContentCreationCard;