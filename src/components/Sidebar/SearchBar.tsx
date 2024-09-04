import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import searchIcon from 'assets/images/search-lg.svg';

interface SearchBarProps {
  onInputChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onInputChange, onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmit) {
      onSubmit(inputValue);
    }
  };

  return (
    <div className="mt-6 max-w-full">
      <div className="flex items-center px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 shadow-sm">
        <img 
          src={searchIcon} 
          alt="Search icon" 
          className="w-5 h-5 mr-2"
        />
        <input 
          type="text" 
          placeholder="Search" 
          aria-label="Search" 
          className="flex-1 bg-transparent border-none outline-none text-base text-gray-500"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default SearchBar;