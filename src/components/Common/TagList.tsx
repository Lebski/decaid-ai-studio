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
  onTagRemove: (removedTag: TagData) => void;
}

const TagList: React.FC<TagListProps> = ({ initialTags, onTagRemove }) => {
  return (
    <div className="flex flex-wrap gap-2 items-start mt-3 w-full max-md:max-w-full">
      {initialTags.map((tag) => (
        <Tag 
          key={tag.id}
          isRemovable={true}
          onRemove={() => onTagRemove(tag)}
          {...tag} 
        />
      ))}
    </div>
  );
};

export default TagList;