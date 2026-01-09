'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BookContainerProps } from './BookContainer.types';
import Bookmark from '../../molecules/Bookmark';
import NavigationArrow from '../../molecules/NavigationArrow';
import { getResponsiveTurnConfig } from '@/input/turnConfig';

// Dynamic imports for jQuery and turn.js (client-side only)
let $: any;
let turnInitialized = false;

const BookContainer: React.FC<BookContainerProps> = ({
  pages,
  currentPage: controlledPage = 0,
  onPageChange,
  className = '',
  children,
  ...props
}) => {
  const flipBookRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(controlledPage);
  const [isBookLoaded, setIsBookLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const turnInstanceRef = useRef<any>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load jQuery and turn.js
  useEffect(() => {
    const loadLibraries = async () => {
      if (typeof window === 'undefined') return;

      try {
        // Load jQuery
        const jquery = await import('jquery');
        $ = jquery.default;
        (window as any).$ = $;
        (window as any).jQuery = $;

        // Load turn.js using script tag (turn.js needs to be loaded this way to extend jQuery)
        if (!turnInitialized) {
          await new Promise<void>((resolve, reject) => {
            // Check if turn.js is already loaded
            if (($ as any)().turn) {
              turnInitialized = true;
              resolve();
              return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/turn.js/4.1.2/turn.min.js';
            script.async = true;
            script.onload = () => {
              turnInitialized = true;
              resolve();
            };
            script.onerror = () => {
              reject(new Error('Failed to load turn.js'));
            };
            document.head.appendChild(script);
          });
        }

        setIsBookLoaded(true);
      } catch (error) {
        console.error('Error loading libraries:', error);
      }
    };

    loadLibraries();
  }, []);

  // Initialize turn.js
  useEffect(() => {
    if (!isBookLoaded || !flipBookRef.current || !$ || !pages.length) return;

    const $flipBook = $(flipBookRef.current);

    // Turn.js options
    const options = {
      ...getResponsiveTurnConfig(isMobile),
      pages: pages.length,
      when: {
        turning: (event: Event, page: number, pageObject: any) => {
          setCurrentPage(page - 1); // turn.js uses 1-based indexing
          if (onPageChange) {
            onPageChange(page - 1);
          }
        },
        turned: (event: Event, page: number) => {
          // Page turn animation completed
        },
        start: (event: Event, pageObject: any, corner: string) => {
          // Allow page turning
        },
      },
    };

    // Initialize turn.js
    $flipBook.turn(options);
    turnInstanceRef.current = $flipBook;

    // Set initial page
    if (controlledPage > 0) {
      $flipBook.turn('page', controlledPage + 1);
    }

    // Cleanup
    return () => {
      if ($flipBook.turn) {
        try {
          $flipBook.turn('destroy');
        } catch (e) {
          // Ignore errors on cleanup
        }
      }
    };
  }, [isBookLoaded, pages.length, isMobile]);

  // Handle controlled page changes
  useEffect(() => {
    if (
      !turnInstanceRef.current ||
      controlledPage === undefined ||
      !isBookLoaded
    )
      return;

    const $flipBook = turnInstanceRef.current;
    const currentTurnPage = $flipBook.turn('page');

    if (currentTurnPage - 1 !== controlledPage) {
      $flipBook.turn('page', controlledPage + 1);
    }
  }, [controlledPage, isBookLoaded]);

  // Navigation functions
  const goToPage = (pageIndex: number) => {
    if (turnInstanceRef.current && pageIndex >= 0 && pageIndex < pages.length) {
      turnInstanceRef.current.turn('page', pageIndex + 1);
    }
  };

  const nextPage = () => {
    if (turnInstanceRef.current && currentPage < pages.length - 1) {
      turnInstanceRef.current.turn('next');
    }
  };

  const previousPage = () => {
    if (turnInstanceRef.current && currentPage > 0) {
      turnInstanceRef.current.turn('previous');
    }
  };

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
        <div
          ref={flipBookRef}
          className="flipbook shadow-2xl"
          style={{
            width: isMobile
              ? (typeof window !== 'undefined' ? window.innerWidth * 0.95 : 400)
              : (typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.9, 1400) : 1400),
            height: typeof window !== 'undefined' ? Math.min(window.innerHeight * 0.85, 900) : 900,
          }}
        >
          {pages.map((page, index) => (
            <div
              key={page.id}
              className="page bg-manuscript-paper border-4 border-manuscript-ink overflow-y-auto overflow-x-hidden p-6 md:p-8 lg:p-12 scrollbar-manuscript"
              data-page-number={index + 1}
            >
              <div className="font-garamond text-manuscript-ink h-full">
                {children || page.content}
              </div>
            </div>
          ))}
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
