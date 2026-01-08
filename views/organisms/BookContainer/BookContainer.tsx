'use client';

import React, { useState, useEffect } from 'react';
import { BookContainerProps } from './BookContainer.types';
import Bookmark from '../../molecules/Bookmark';
import NavigationArrow from '../../molecules/NavigationArrow';

const BookContainer: React.FC<BookContainerProps> = ({
  pages,
  currentPage = 0,
  onPageChange,
  className = '',
  children,
  ...props
}) => {
  const [activePage, setActivePage] = useState(currentPage);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);
  
  const handlePageChange = (page: number) => {
    if (page >= 0 && page < pages.length) {
      setActivePage(page);
      onPageChange?.(page);
    }
  };
  
  const handlePrevious = () => {
    handlePageChange(activePage - 1);
  };
  
  const handleNext = () => {
    handlePageChange(activePage + 1);
  };
  
  const handleBookmarkClick = (index: number) => {
    handlePageChange(index);
  };
  
  // Calculate bookmark positions
  const getBookmarkPosition = (index: number) => {
    const bookmarkWidth = 100; // Base width in pixels
    const overlap = 20; // Overlap between bookmarks
    return index * (bookmarkWidth - overlap);
  };
  
  const combinedClassName = `
    relative
    w-full
    h-screen
    flex
    items-center
    justify-center
    bg-manuscript-paper
    overflow-hidden
    ${className}
  `.trim();
  
  const bookClassName = `
    relative
    w-[95vw]
    h-[95vh]
    max-w-[1400px]
    max-h-[900px]
    bg-manuscript-paper
    border-4
    border-manuscript-ink
    shadow-2xl
    flex
    ${isMobile ? 'flex-col' : 'flex-row'}
  `.trim();
  
  return (
    <div className={combinedClassName} {...props}>
      {/* Bookmarks */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative">
          {pages.map((page, index) => (
            <Bookmark
              key={page.id}
              title={page.title}
              isActive={index === activePage}
              onClick={() => handleBookmarkClick(index)}
              position={getBookmarkPosition(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Book */}
      <div className={bookClassName}>
        {/* Navigation Arrows */}
        <NavigationArrow
          direction="left"
          onClick={handlePrevious}
          disabled={activePage === 0}
        />
        
        <NavigationArrow
          direction="right"
          onClick={handleNext}
          disabled={activePage === pages.length - 1}
        />
        
        {/* Page Content Area */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16">
          {children || (
            <div className="font-garamond text-manuscript-ink">
              {pages[activePage]?.content}
            </div>
          )}
        </div>
      </div>
      
      {/* Page indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 font-garamond text-manuscript-ink opacity-60">
        {activePage + 1} / {pages.length}
      </div>
    </div>
  );
};

export default BookContainer;


