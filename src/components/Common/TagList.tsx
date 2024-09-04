import React from 'react';
import Tag from './Tag';

interface TagData {
  id: string;
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  removeIconColor?: string;
}

interface TagListProps {
  initialTags: TagData[];
  onTagRemove?: (removedTag: TagData) => void;
}

const TagList: React.FC<TagListProps> = ({ initialTags, onTagRemove }) => {
  const isRemovable = !!onTagRemove;

  return (
    <div className="flex flex-wrap gap-2 items-start w-full">
      {initialTags.map((tag) => (
        <Tag 
          key={tag.id}
          isRemovable={isRemovable}
          onRemove={isRemovable ? () => onTagRemove(tag) : undefined}
          {...tag} 
        />
      ))}
    </div>
  );
};

export default TagList;