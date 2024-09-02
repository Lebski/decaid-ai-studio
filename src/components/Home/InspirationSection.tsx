import React from 'react';

interface InspirationCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const InspirationCard: React.FC<InspirationCardProps> = ({ image, title, description, tags }) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[320px]">
      <img loading="lazy" src={image} alt={title} className="object-contain w-full rounded-2xl aspect-[1.43]" />
      <div className="flex flex-col mt-5 w-full">
        <div className="flex flex-col w-full">
          <div className="flex gap-4 items-start w-full">
            <h3 className="flex-1 shrink text-2xl font-semibold leading-8 text-gray-900 basis-0">{title}</h3>
            <div className="flex flex-col pt-1 w-6">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1" alt="" className="object-contain w-6 aspect-square" />
            </div>
          </div>
          <p className="mt-2 text-base leading-6 text-ellipsis text-slate-600">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 items-start mt-6 w-full text-sm font-medium leading-5 text-center whitespace-nowrap">
          {tags.map((tag, index) => (
            <span key={index} className={`self-stretch px-2.5 py-0.5 rounded-full border border-solid ${getTagStyle(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const getTagStyle = (tag: string) => {
  const styles: { [key: string]: string } = {
    Marketing: 'text-sky-700 bg-sky-50 border-sky-200',
    Communication: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    Management: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    Leadership: 'text-pink-700 bg-pink-50 border-pink-200',
    News: 'text-violet-700 bg-purple-50 border-purple-200',
    Notes: 'text-orange-700 bg-orange-50 border-orange-200',
  };
  return styles[tag] || 'text-indigo-900 bg-slate-50 border-slate-300';
};

const InspirationSection: React.FC = () => {
  const inspirationCards: InspirationCardProps[] = [
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/42492cf06bf2644edc83108647fb0297f0abe10fbdd2ef73656238ac7cec229f?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
      title: 'Create On-Brand Marketing Texts',
      description: 'Easily Create marketing texts that match your tone of voice and your companies style guides',
      tags: ['Marketing', 'Communication'],
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/17e92e8df5969c6d573031be52b486929e7b2521e95964a901301616e6a58a16?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
      title: 'Create a Meeting-Summary',
      description: 'Quickly generate comprehensive meeting summaries that capture key points and action items',
      tags: ['Management', 'Leadership'],
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6dabe04d717f205e6c0a6c3323e41e8b96f93efa7755184fc564d823e2898f2d?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
      title: 'Create Social Media Posts from News',
      description: 'Effortlessly transform the latest news into engaging social media content tailored for your audience',
      tags: ['News', 'Management'],
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6e7e15aff87625c5da178b2092997d221dee4b7a20653157b06ae7834b6d2fdb?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
      title: 'Generate a Project Briefing',
      description: 'Automatically create detailed project briefings to keep your team informed and aligned',
      tags: ['Management', 'Leadership'],
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c83e3462b174fa2a57fb0c2ebd31ab0752533f06b443612149a97001982f8742?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
      title: 'Create a Podcast from News',
      description: 'Convert current news articles into ready-to-record podcast scripts for dynamic content creation',
      tags: ['News', 'Communication'],
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e0f25d7299e804db15d93c467b62c39c4d6d632b0d7703fefd0aa8d9f0e5620b?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1',
      title: 'Create Notes from a Voice Mail',
      description: 'Accurately transcribe voicemail messages into organized notes for easy reference and follow-up',
      tags: ['Notes', 'Communication'],
    },
  ];

  return (
    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 w-full max-md:max-w-full">
          <h2 className="flex-1 shrink text-lg font-semibold leading-7 text-gray-900 whitespace-nowrap min-w-[240px] max-md:max-w-full">
            Inspiration
          </h2>
          <div className="flex flex-col self-start w-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f68377d8c842e1f1b35e340e8a284692d98f0f1c84b9c3599725b17d9b21161f?placeholderIfAbsent=true&apiKey=18de59cafc394053be3149c8f3118dd1" alt="" className="object-contain w-5 aspect-square" />
          </div>
        </div>
        <div className="flex mt-5 w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
      </div>
      <div className="flex flex-wrap gap-12 items-start mt-6 w-full max-md:max-w-full">
        {inspirationCards.map((card, index) => (
          <InspirationCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default InspirationSection;