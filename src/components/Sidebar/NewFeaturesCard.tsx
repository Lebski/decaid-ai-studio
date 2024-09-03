import React from 'react';
import closeIcon from 'assets/images/x-close.svg';
import PlayButton from './PlayButton';

interface NewFeaturesCardProps {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
  onDismiss: () => void;
  onWhatsNew: () => void;
  onPlay: () => void;
}

const NewFeaturesCard: React.FC<NewFeaturesCardProps> = ({
  title,
  description,
  image,
  onClose,
  onDismiss,
  onWhatsNew,
  onPlay
}) => {
  return (
    <div className="flex flex-col px-4 py-5 mt-6 w-full bg-gray-50 rounded-lg">
      <div className="flex flex-col w-full">
        <div className="flex relative gap-1 items-start pr-6 w-full max-md:pr-5">
          <div className="z-0 flex-1 shrink text-sm font-semibold leading-5 text-gray-900 basis-4">
            {title}
          </div>
          <button 
            onClick={onClose}
            className="flex overflow-hidden absolute -right-2 -top-3 z-0 justify-center items-center p-2 w-9 h-9 rounded-lg min-h-[36px] hover:bg-gray-200 transition-colors duration-300"
          >
            <img src={closeIcon} alt="Close" className="object-contain self-stretch my-auto w-5 aspect-square" />
          </button>
        </div>
        <div className="mt-1 text-sm leading-5 text-slate-600">
          {description}
        </div>
      </div>
      <div className="mt-4 w-full rounded-md overflow-hidden aspect-[1.59] relative">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-3 bottom-3">
          <PlayButton onClick={onPlay} />
        </div>
      </div>
      <div className="flex gap-3 items-start self-start mt-4 text-sm font-semibold leading-5">
        <button 
          onClick={onDismiss}
          className="overflow-hidden gap-1.5 self-stretch whitespace-nowrap text-slate-600 hover:text-slate-800 transition-colors duration-300"
        >
          Dismiss
        </button>
        <button 
          onClick={onWhatsNew}
          className="overflow-hidden gap-1.5 self-stretch text-violet-700 hover:text-violet-900 transition-colors duration-300"
        >
          What's new?
        </button>
      </div>
    </div>
  );
};

export default NewFeaturesCard;