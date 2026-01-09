'use client';

import React from 'react';
import { BookContainerProps } from './BookContainer.types';
import Bookmark from '../../molecules/Bookmark';
import NavigationArrow from '../../molecules/NavigationArrow';
import { useBookNavigation } from '@/viewmodels';

const BookContainer: React.FC<BookContainerProps> = ({
  pages,
  currentPage: controlledPage,
  onPageChange,
  className = '',
  children,
  ...props
}) => {
  const {
    currentPage,
    turnDirection,
    isAnimating,
    goToPage,
    nextPage,
    previousPage,
    canGoNext,
    canGoPrevious,
  } = useBookNavigation({
    pages: pages.map((p) => ({ id: p.id, title: p.title, path: p.path })),
    enableScroll: true,
    enableKeyboard: true,
  });

  // Support controlled component pattern
  React.useEffect(() => {
    if (controlledPage !== undefined && controlledPage !== currentPage) {
      goToPage(controlledPage);
    }
  }, [controlledPage, currentPage, goToPage]);

  React.useEffect(() => {
    if (onPageChange && controlledPage === undefined) {
      onPageChange(currentPage);
    }
  }, [currentPage, onPageChange, controlledPage]);

  // Calculate bookmark positions
  const getBookmarkPosition = (index: number) => {
    const bookmarkWidth = 100;
    const overlap = 20;
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
    flex-col
    book-page
    ${turnDirection === 'forward' ? 'page-turn-forward' : ''}
    ${turnDirection === 'backward' ? 'page-turn-backward' : ''}
  `.trim();

  const contentClassName = `
    flex-1
    overflow-y-auto
    overflow-x-hidden
    p-6
    md:p-8
    lg:p-12
    scrollbar-manuscript
    ${isAnimating ? 'page-content-exit' : 'page-content-enter'}
  `.trim();

  return (
    <div className={combinedClassName} {...props}>
      {/* Bookmarks */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="relative pointer-events-auto">
          {pages.map((page, index) => (
            <Bookmark
              key={page.id}
              title={page.title}
              isActive={index === currentPage}
              onClick={() => goToPage(index)}
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
          onClick={previousPage}
          disabled={!canGoPrevious}
        />

        <NavigationArrow
          direction="right"
          onClick={nextPage}
          disabled={!canGoNext}
        />

        {/* Page Content Area */}
        <div className={contentClassName}>
          {children || (
            <div className="font-garamond text-manuscript-ink">
              {pages[currentPage]?.content}
            </div>
          )}
        </div>
      </div>

      {/* Page indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 font-garamond text-manuscript-ink opacity-60 text-sm z-10">
        Page {currentPage + 1} of {pages.length}
      </div>

      {/* Instructions hint (can be removed later) */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 font-garamond text-manuscript-ink opacity-40 text-xs text-center z-10">
        Use ← → keys, scroll, or click arrows to navigate
      </div>
    </div>
  );
};

export default BookContainer;

