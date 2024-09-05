import React from 'react';
import Button from 'components/Forms/Button';
import TagList from 'components/Common/TagList';

import generateIcon from 'assets/images/star-06-white.svg';
import externalLinkIcon from 'assets/images/link-external-01.svg';

interface SearchResultCardTagData {
  id: string;
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

interface SearchResultCardProps {
  imageUrl: string;
  logoUrl: string;
  tags: SearchResultCardTagData[];
  title: string;
  description: string;
  timeAgo: string;
  sourceUrl: string;
  displayUrl: string;
  onGenerateClick: () => void;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({
  imageUrl,
  logoUrl,
  tags,
  title,
  description,
  timeAgo,
  sourceUrl,
  displayUrl,
  onGenerateClick
}) => {
  return (
    <article className="flex flex-wrap gap-5 p-4 w-full bg-white rounded-xl border border-gray-200 border-solid shadow-sm max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col items-start px-2 pt-32 pb-2 rounded-lg min-h-[144px] w-[200px] max-md:pt-24 max-md:pr-5">
        <img
          loading="lazy"
          src={imageUrl}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="absolute left-2 bottom-2 flex items-center rounded-full bg-blend-normal">
          <img
            loading="lazy"
            src={logoUrl}
            alt=""
            className="object-contain self-stretch my-auto rounded-2xl aspect-square w-[30px] border-2 border-white border-solid"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 shrink self-start basis-4 min-w-[240px] max-md:max-w-full">
        <TagList initialTags={tags} />
        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink text-lg text-black basis-7 min-w-[240px] max-md:max-w-full">
            <h2 className="font-semibold leading-loose max-md:max-w-full">
              {title}
            </h2>
            <p className="mt-1 font-light leading-7 max-md:max-w-full">
              {description}
            </p>
          </div>
          <Button
            type="button"
            variant="primary"
            size="square"
            onClick={onGenerateClick}
          >
            <img src={generateIcon} alt="Generate" className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-6 justify-between items-center mt-4 w-full text-base font-medium leading-6 text-slate-600 max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-start self-stretch my-auto">
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center whitespace-nowrap hover:underline"
            >
              <img
                src={externalLinkIcon}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <div className="self-stretch my-auto">{displayUrl}</div>
            </a>
            <div className="gap-2 self-stretch">{timeAgo}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SearchResultCard;
export type { SearchResultCardTagData };
