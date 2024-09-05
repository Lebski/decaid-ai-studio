import React, { useState } from 'react';
import SearchBar from 'components/Sidebar/SearchBar';
import TagList from 'components/Common/TagList';
import Button from 'components/Forms/Button';

import searchIcon from 'assets/images/search-refraction-white.svg';

interface TagData {
  id: string;
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  removeIconColor?: string;
}

const initialTags: TagData[] = [
  {
    id: '1',
    text: 'AI',
    bgColor: 'bg-sky-50',
    textColor: 'text-sky-700',
    borderColor: 'border-sky-200',
    removeIconColor: 'stroke-sky-700'
  },
  {
    id: '2',
    text: 'Tech',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    borderColor: 'border-indigo-200',
    removeIconColor: 'stroke-indigo-700'
  },
  {
    id: '3',
    text: 'Copy Writing',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-700',
    borderColor: 'border-pink-200',
    removeIconColor: 'stroke-pink-700'
  }
];

interface AINewsSearchProps {
  onSearchStarted: (searchTerm: string, tagValues: string[]) => void;
}

const AINewsSearch: React.FC<AINewsSearchProps> = ({ onSearchStarted }) => {
  const [tags, setTags] = useState<TagData[]>(initialTags);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleTagRemoved = (removedTag: TagData) => {
    console.log('Tag removed:', removedTag.text);
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== removedTag.id));
  };

  const handleSearchValueChange = (value: string) => {
    console.log('Search value changed:', value);
    setSearchTerm(value);
  };

  const handleSearchBarSubmit = (value: string) => {
    console.log('Search value submitted:', value);
    const tagValues = tags.map((tag) => tag.text);
    onSearchStarted(value, tagValues);
  };

  const handleSearchButtonClick = () => {
    console.log('Search button clicked');
    const tagValues = tags.map((tag) => tag.text);
    onSearchStarted(searchTerm, tagValues);
  };

  return (
    <div className="flex flex-col items-center w-full mt-24 mb-9 max-md:max-w-full">
      <div className="flex flex-col w-full items-center gap-6">
        <div className="flex flex-col font-semibold text-center">
          <h2 className="text-base text-violet-700">AI Powered News Search</h2>
          <h1 className="mt-3 text-5xl tracking-tighter text-gray-900">
            Start your search here
          </h1>
        </div>
        <div className="flex flex-col px-6 w-full max-w-[720px] gap-3">
          <SearchBar
            onInputChange={handleSearchValueChange}
            onSubmit={handleSearchBarSubmit}
          />
          <TagList initialTags={tags} onTagRemove={handleTagRemoved} />
        </div>
        <Button
          type="button"
          variant="primary"
          size="md"
          onClick={handleSearchButtonClick}
        >
          <img src={searchIcon} alt="Search" className="w-5 h-5" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default AINewsSearch;
