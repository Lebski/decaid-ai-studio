import React from 'react';
import arrowIcon from 'assets/images/arrow-up-right.svg';
import TagList from 'components/Common/TagList';

interface InspirationCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  action?: () => void;
}

const InspirationCard: React.FC<InspirationCardProps> = ({
  image,
  title,
  description,
  tags,
  action
}) => {
  const tagData = tags.map((tag, index) => ({
    id: index.toString(),
    ...getTagStyle(tag)
  }));

  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[320px]">
      <div
        className="w-full rounded-2xl overflow-hidden aspect-[1.43] cursor-pointer"
        onClick={action}
      >
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col mt-5 w-full">
        <div className="flex flex-col w-full">
          <div
            className="flex gap-4 items-start w-full cursor-pointer"
            onClick={action}
          >
            <h3 className="flex-1 shrink text-2xl font-semibold leading-8 text-gray-900 basis-0">
              {title}
            </h3>
            <div className="flex flex-col pt-1 w-6">
              <img
                src={arrowIcon}
                alt=""
                className="object-contain w-6 aspect-square"
              />
            </div>
          </div>
          <p className="mt-2 text-base leading-6 text-ellipsis text-slate-600">
            {description}
          </p>
        </div>
        <div className="mt-6">
          <TagList initialTags={tagData} />
        </div>
      </div>
    </div>
  );
};

interface TagData {
  id: string;
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

const getTagStyle = (tag: string): Omit<TagData, 'id'> => {
  const styles: { [key: string]: Omit<TagData, 'id'> } = {
    Marketing: {
      text: 'Marketing',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-700',
      borderColor: 'border-sky-200'
    },
    Communication: {
      text: 'Communication',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      borderColor: 'border-indigo-200'
    },
    Management: {
      text: 'Management',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-200'
    },
    Leadership: {
      text: 'Leadership',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700',
      borderColor: 'border-pink-200'
    },
    News: {
      text: 'News',
      bgColor: 'bg-purple-50',
      textColor: 'text-violet-700',
      borderColor: 'border-violet-200'
    },
    Notes: {
      text: 'Notes',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-200'
    }
  };
  return (
    styles[tag] || {
      text: tag,
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      borderColor: 'border-indigo-200'
    }
  );
};

export default InspirationCard;
export type { InspirationCardProps };
