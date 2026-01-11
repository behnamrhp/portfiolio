import React, { useEffect, useRef, useState, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { BookContainerProps } from './BookContainer.types';
import Bookmark from '../../molecules/Bookmark';
import NavigationArrow from '../../molecules/NavigationArrow';
import { getResponsivePageFlipConfig, getBookSizes, SIZE_CONFIG, isMobile } from '@/input';

// Page component for react-pageflip that accepts ref
// react-pageflip expects pages to be div elements with forwarded refs
const Page = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; style?: React.CSSProperties; className?: string; pageNumber?: number; dataDensity?: string }
>((props, ref) => {
  return (
    <div
      ref={ref}
      className={props.className}
      data-page-number={props.pageNumber}
      data-density={props.dataDensity}
      style={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
});

Page.displayName = 'Page';

const BookContainer: React.FC<BookContainerProps> = ({
  pages,
  currentPage: controlledPage = 0,
  onPageChange,
  className = '',
  children,
  ...props
}) => {
  const flipBookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(controlledPage ?? 0);
  const isInitializedRef = useRef(false);
  const bookSize = getBookSizes();

  // Helper to get pageFlip instance
  const getPageFlip = () => {
    if (!flipBookRef.current) return null;
    try {
      return flipBookRef.current.pageFlip();
    } catch (e) {
      console.warn('Error getting pageFlip instance:', e);
      return null;
    }
  };

  // Handle page flip event
  const handleFlip = useCallback(
    (e: any) => {
      // react-pageflip onFlip event structure: e.target is the PageFlip instance
      const pageFlip = e.target || getPageFlip();
      if (!pageFlip) return;

      try {
        const newPage = pageFlip.getCurrentPageIndex();
        setCurrentPage(newPage);
        if (onPageChange) {
          onPageChange(newPage);
        }
      } catch (error) {
        console.warn('Error in handleFlip:', error);
      }
    },
    [onPageChange]
  );

  // Mark as initialized after first render
  useEffect(() => {
    const timer = setTimeout(() => {
      isInitializedRef.current = true;
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle controlled page changes
  useEffect(() => {
    if (controlledPage === undefined || !isInitializedRef.current) return;
    const pageFlip = getPageFlip();
    if (!pageFlip) return;

    try {
      const currentPageNum = pageFlip.getCurrentPageIndex();
      if (currentPageNum !== controlledPage && controlledPage >= 0 && controlledPage < pages.length) {
        pageFlip.turnToPage(controlledPage);
      }
    } catch (e) {
      console.warn('Error changing page:', e);
    }
  }, [controlledPage, pages.length]);

  const goToPage = (pageIndex: number) => {
    const pageFlip = getPageFlip();
    if (!pageFlip) return;

    try {
      if (pageIndex < 0 || pageIndex >= pages.length) return;
      pageFlip.turnToPage(pageIndex);
    } catch (e) {
      console.warn('Error in goToPage:', e);
    }
  };

  const nextPage = () => {
    const pageFlip = getPageFlip();
    if (!pageFlip) return;

    try {
      const currentPageNum = pageFlip.getCurrentPageIndex();
      if (currentPageNum < pages.length - 1) {
        pageFlip.flipNext('top');
      }
    } catch (e) {
      console.warn('Error in nextPage:', e);
    }
  };

  const previousPage = () => {
    const pageFlip = getPageFlip();
    if (!pageFlip) return;

    try {
      const currentPageNum = pageFlip.getCurrentPageIndex();
      if (currentPageNum > 0) {
        pageFlip.flipPrev('top');
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
  const isMobileScreen = isMobile();

  const pageFlipConfig = getResponsivePageFlipConfig();

  // Render pages - react-pageflip requires each page as a child
  // For double page mode on desktop, we need to handle it differently
  // Since react-pageflip works with single pages, we'll use single page mode for now
  // and adjust the width for desktop to accommodate double-page view
  const renderPages =  pages.map((page, index) => {
    const pageNumber = isMobileScreen ? index + 1 : index + 2;
    const isFirstPage = isMobileScreen ? index === 0 : index === 1;
    const isLastPage = index === pages.length - 1;

    if (index === 0 && !isMobileScreen) {
      return (
        <Page key="cover0"
        pageNumber={0} className="page bg-[url('/assets/images/bg.png')] bg-contain page-cover page-cover-top hard font-garamond">
          <div className="page-content" />
        </Page>
      )
    }
    
    // Determine page classes based on position and type
    const pageClasses = `
      page
      ${isFirstPage || isLastPage ? 'page-cover hard' : ''}
      ${isFirstPage ? 'page-cover-top' : ''}
      ${isLastPage ? 'page-cover-bottom' : ''}
      bg-manuscript-paper
      text-manuscript-ink
      overflow-auto
      font-garamond
    `.trim();
    
      return (
        <Page
          key={page.id}
          pageNumber={pageNumber}
          dataDensity={isFirstPage || isLastPage ? "hard" : "soft"}
          className={pageClasses}
        >
          <div className='page-content'>
            {((index === 1 && !isMobileScreen) || (index === 0 && isMobileScreen)) && (
              <div style={{
                height: bookSize.height,
                width: bookSize.width,
                backgroundImage: `url("/assets/images/cover.png")`,
                backgroundSize: '100% 100%',
                backgroundPosition: '0 0',
                backgroundRepeat: 'no-repeat',
              }} className='fixed top-0 left-0 z-0' >

                test
              </div>
            )}
            <div className="font-garamond h-full overflow-auto p-6 md:p-8 lg:p-12 relative z-10">
              {children || page.content}
            </div>
          </div>
        </Page>
      );
    });
  

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

      {/* Book Container with react-pageflip */}
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

        {/* FlipBook - react-pageflip container */}
        <HTMLFlipBook
          ref={flipBookRef}
          width={bookSize.width}
          height={bookSize.height}
          minWidth={bookSize.width}
          minHeight={bookSize.height}
          maxWidth={pageFlipConfig.maxWidth ?? SIZE_CONFIG.BOOK_HEIGHT}
          maxHeight={pageFlipConfig.maxHeight ?? SIZE_CONFIG.BOOK_HEIGHT}
          size={"stretch"}
          drawShadow={pageFlipConfig.drawShadow ?? true}
          flippingTime={pageFlipConfig.flippingTime}
          usePortrait={isMobileScreen}
          startPage={isMobileScreen ? 0 : 1}
          startZIndex={isMobileScreen ? 0 : 1}
          autoSize={pageFlipConfig.autoSize ?? false}
          maxShadowOpacity={pageFlipConfig.maxShadowOpacity ?? 0.5}
          showCover={pageFlipConfig.showCover ?? true}
          mobileScrollSupport={pageFlipConfig.mobileScrollSupport ?? true}
          clickEventForward={pageFlipConfig.clickEventForward}
          useMouseEvents={pageFlipConfig.useMouseEvents}
          swipeDistance={pageFlipConfig.swipeDistance}
          showPageCorners={pageFlipConfig.showPageCorners ?? true}
          disableFlipByClick={pageFlipConfig.disableFlipByClick}
          onFlip={handleFlip}
          className="flipbook-container"
          style={{}}
        >
          {renderPages}
        </HTMLFlipBook>
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