import React from 'react';
import { PaginationProps } from './Pagination.types';
import Button from '../../atoms/Button';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  ...props
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // Always show first page
    pages.push(1);
    
    if (currentPage > 3) {
      pages.push('...');
    }
    
    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    
    if (currentPage < totalPages - 2) {
      pages.push('...');
    }
    
    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  const combinedClassName = `
    flex
    items-center
    justify-center
    gap-2
    font-garamond
    ${className}
  `.trim();
  
  return (
    <div className={combinedClassName} {...props}>
      <Button
        variant="ghost"
        size="sm"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ←
      </Button>
      
      {getPageNumbers().map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="px-2 text-manuscript-ink"
            >
              ...
            </span>
          );
        }
        
        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;
        
        return (
          <Button
            key={pageNumber}
            variant={isActive ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => handlePageClick(pageNumber)}
            aria-label={`Go to page ${pageNumber}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {pageNumber}
          </Button>
        );
      })}
      
      <Button
        variant="ghost"
        size="sm"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        →
      </Button>
    </div>
  );
};

export default Pagination;


