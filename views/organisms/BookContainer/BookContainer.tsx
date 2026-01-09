import React, { useEffect, useRef, useState } from 'react';
import { BookContainerProps } from './BookContainer.types';
import Bookmark from '../../molecules/Bookmark';
import NavigationArrow from '../../molecules/NavigationArrow';
import { getResponsiveTurnConfig, isMobile } from '@/input';
import $ from 'jquery';
import '../../../src/lib/turn.js';

const BookContainer: React.FC<BookContainerProps> = ({
  pages,
  currentPage: controlledPage = 0,
  onPageChange,
  className = '',
  children,
  ...props
}) => {
  const flipBookRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(controlledPage ?? 0);
  const turnInstanceRef = useRef<JQuery | null>(null);

  // Initialize turn.js
  useEffect(() => {
    if (!pages.length) {
      return;
    }

    const initTurn = () => {
      if (!flipBookRef.current) {
        requestAnimationFrame(initTurn);
        return;
      }

      const $flipBook = $(flipBookRef.current);

      if (typeof $flipBook.turn !== 'function') {
        return;
      }

      const options: TurnJs.TurnOptions = {
        pages: pages.length,
        ...getResponsiveTurnConfig(),
        when: {
          turning: (_event, page) => {
            setCurrentPage(page - 1);
            if (onPageChange) {
              onPageChange(page - 1);
            }
          },
          start: (_event, _pageObject, _corner) => {
            // Allow page turning
          },
        },
      };

      turnInstanceRef.current = $flipBook;
      $flipBook.turn(options);
    };

    const rafId = requestAnimationFrame(initTurn);

    return () => {
      cancelAnimationFrame(rafId);
      if (turnInstanceRef.current && typeof turnInstanceRef.current.turn === 'function') {
        try {
          turnInstanceRef.current.turn('destroy');
        } catch (e) {
          // Ignore errors on cleanup
        }
      }
    };
  }, [pages.length, onPageChange, controlledPage]);

  // Handle controlled page changes
  useEffect(() => {
    if (!turnInstanceRef.current || controlledPage === undefined) return;

    const $flipBook = turnInstanceRef.current;
    
    try {
      const totalPages = $flipBook.turn('pages') as number;
      if (totalPages === 0) {
        return;
      }

      const currentTurnPage = $flipBook.turn('page') as number;

      if (currentTurnPage - 1 !== controlledPage && controlledPage >= 0 && controlledPage < totalPages) {
        $flipBook.turn('page', controlledPage + 1);
      }
    } catch (e) {
      console.warn('Error changing page:', e);
    }
  }, [controlledPage]);

  const goToPage = (pageIndex: number) => {
    if (!turnInstanceRef.current) return;
    
    try {
      if (pageIndex < 0 || pageIndex >= pages.length) return;
      
      const totalPages = turnInstanceRef.current.turn('pages') as number;
      if (!totalPages || totalPages === 0) return;
      
      const targetPage = pageIndex + 1;
      if (targetPage < 1 || targetPage > totalPages) return;
      
      turnInstanceRef.current.turn('page', targetPage);
    } catch (e) {
      console.warn('Error in goToPage:', e);
    }
  };

  const nextPage = () => {
    if (!turnInstanceRef.current) return;
    
    try {
      const totalPages = turnInstanceRef.current.turn('pages') as number;
      if (!totalPages || totalPages === 0) return;
      
      let currentTurnPage = turnInstanceRef.current.turn('page') as number;
      
      if (!currentTurnPage || isNaN(currentTurnPage) || currentTurnPage < 1) {
        currentTurnPage = currentPage + 1; // Convert 0-based to 1-based
      }
      
      if (isNaN(currentTurnPage) || currentTurnPage < 1 || currentTurnPage > totalPages) {
        console.warn('Invalid page number:', currentTurnPage);
        return;
      }
      
      const isDouble = !isMobile();
      let nextPageNum: number;
      
      if (isDouble) {
        const view = turnInstanceRef.current.turn('view', currentTurnPage) as TurnJs.View;
        const lastPageInView = view[1] || view[0] || currentTurnPage;
        nextPageNum = Math.min(totalPages, lastPageInView + 1);
      } else {
        nextPageNum = Math.min(totalPages, currentTurnPage + 1);
      }
      
      if (nextPageNum > currentTurnPage && nextPageNum <= totalPages && !isNaN(nextPageNum)) {
        turnInstanceRef.current.turn('page', nextPageNum);
      }
    } catch (e) {
      console.warn('Error in nextPage:', e);
    }
  };

  const previousPage = () => {
    if (!turnInstanceRef.current) return;
    
    try {
      const totalPages = turnInstanceRef.current.turn('pages') as number;
      if (!totalPages || totalPages === 0) return;
      
      let currentTurnPage = turnInstanceRef.current.turn('page') as number;
      
      if (!currentTurnPage || isNaN(currentTurnPage) || currentTurnPage < 1) {
        currentTurnPage = currentPage + 1; // Convert 0-based to 1-based
      }
      
      if (isNaN(currentTurnPage) || currentTurnPage < 1 || currentTurnPage > totalPages) {
        console.warn('Invalid page number:', currentTurnPage);
        return;
      }
      
      const isDouble = !isMobile();
      let prevPageNum: number;
      
      if (isDouble) {
        const view = turnInstanceRef.current.turn('view', currentTurnPage) as TurnJs.View;
        const firstPageInView = view[0] || currentTurnPage;
        prevPageNum = Math.max(1, firstPageInView - 1);
      } else {
        prevPageNum = Math.max(1, currentTurnPage - 1);
      }
      
      if (prevPageNum < currentTurnPage && prevPageNum >= 1 && !isNaN(prevPageNum)) {
        turnInstanceRef.current.turn('page', prevPageNum);
      }
    } catch (e) {
      console.warn('Error in previousPage:', e);
    }
  };

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

  const canGoNext = currentPage < pages.length - 1;
  const canGoPrevious = currentPage > 0;

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

      {/* Book Container with turn.js */}
      <div className="relative">
        {/* Navigation Arrows */}
        <NavigationArrow
          direction="left"
          onClick={previousPage}
          disabled={!canGoPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30"
        />

        <NavigationArrow
          direction="right"
          onClick={nextPage}
          disabled={!canGoNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30"
        />

        {/* FlipBook - turn.js container */}
        {/* Use 'flipBook' class to match whiteboard tool pattern */}
        <div
          ref={flipBookRef}
          className="flipBook "
        >
          {pages.map((page, index) => {
            return (
              <div
                key={page.id}
                className={`page  p${index + 1} ${index === 0 ? 'hard' : ''}`}
              >
                {
                  index === 0 ?
                        <img alt="persian book cover" src="/assets/images/cover.png" className="w-full h-full absolute top-0 left-0 object-cover" />:
                        null
                }
                <div className="font-garamond text-manuscript-ink h-full overflow-auto p-6 md:p-8 lg:p-12">
                  {children || page.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Page indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 font-garamond text-manuscript-ink opacity-60 text-sm z-10">
        Page {currentPage + 1} of {pages.length}
      </div>

      {/* Instructions hint */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 font-garamond text-manuscript-ink opacity-40 text-xs text-center z-10">
        Click arrows or drag page corners to navigate
      </div>
    </div>
  );
};

export default BookContainer;
