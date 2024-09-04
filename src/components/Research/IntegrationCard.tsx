import React from 'react';

interface IntegrationCardProps {
  name: string;
  imageSrc: string;
  description: string;
  isActive: boolean;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ name, imageSrc, description, isActive }) => {
  return (
    <article className="flex flex-col bg-white rounded-xl border border-gray-200 border-solid shadow-sm w-full min-w-[320px] h-full">
      <div className="flex flex-col p-5 flex-grow">
        <div className="flex gap-2 items-start w-full">
          <div className="flex flex-1 shrink gap-3 items-center basis-0 min-w-0">
            <div className="flex-shrink-0 flex items-center self-stretch p-0.5 my-auto bg-white rounded-lg shadow-sm h-[52px] w-[52px]">
              <img loading="lazy" src={imageSrc} alt={`${name} logo`} className="object-contain self-stretch my-auto w-12 rounded-lg aspect-square" />
            </div>
            <h2 className="flex-1 self-stretch my-auto text-base font-semibold leading-6 text-gray-900 truncate">
              {name}
            </h2>
          </div>
          <div className="flex-shrink-0 flex flex-col w-9">
            <div className={`flex overflow-hidden items-center p-0.5 w-9 ${isActive ? 'bg-violet-500' : 'bg-gray-100'} rounded-full min-h-[20px]`}>
              <div className="flex self-stretch my-auto w-4 h-4 bg-white rounded-full shadow min-h-[16px]" />
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm leading-5 text-slate-600 line-clamp-3">
          {description}
        </p>
      </div>
      <footer className="flex flex-col pb-4 w-full text-sm font-semibold leading-5 text-violet-700 mt-auto">
        <div className="flex w-full bg-gray-200 min-h-[1px]" />
        <div className="flex gap-4 items-center px-6 mt-4 w-full max-md:px-5">
          <div className="flex flex-1 shrink gap-3 items-center self-stretch my-auto w-full basis-0">
            <button className="overflow-hidden gap-1.5 self-stretch my-auto">
              View integration
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default IntegrationCard;