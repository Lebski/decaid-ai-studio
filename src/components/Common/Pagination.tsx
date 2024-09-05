import React from 'react';

import arrowLeftIcon from 'assets/images/arrow-left.svg';
import arrowRightIcon from 'assets/images/arrow-right.svg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav className="flex flex-wrap gap-3 justify-between items-center pt-5 w-full text-sm font-semibold leading-5 whitespace-nowrap border-t border-gray-200 text-slate-600" aria-label="Pagination">
      <div className="flex-1">
        <button
          className="flex overflow-hidden gap-1.5 items-center hover:text-slate-900 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={arrowLeftIcon} alt="" className="object-contain w-5 h-5" />
          <span>Previous</span>
        </button>
      </div>
      <div className="flex gap-0.5 items-center justify-center flex-1 font-medium text-center text-slate-600">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors duration-200
              ${currentPage === index + 1 
                ? 'text-gray-800 bg-gray-50 hover:bg-gray-100' 
                : 'hover:bg-gray-100 hover:text-gray-800'
              }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="flex-1 flex justify-end">
        <button
          className="flex overflow-hidden gap-1.5 items-center hover:text-slate-900 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span>Next</span>
          <img loading="lazy" src={arrowRightIcon} alt="" className="object-contain w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;