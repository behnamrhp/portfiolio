import React, { useEffect, useState } from 'react';
import Bookmark from '../../molecules/Bookmark';
import { isMobile } from '@/input';

interface BookPage {
  id: string;
  title: string;
  path: string;
  content?: React.ReactNode;
  sectionTitle?: string;
  isFirstPageOfSection?: boolean;
}

interface BookBookmarksProps {
  currentPage: number;
  onBookmarkClick: (pageIndex: number) => void;
  bookContainerRef: React.RefObject<HTMLDivElement>;
  pages: BookPage[];
  className?: string;
}

/**
 * BookBookmarks - Manages bookmark rendering and positioning
 */
const BookBookmarks: React.FC<BookBookmarksProps> = ({
  currentPage,
  onBookmarkClick,
  bookContainerRef,
  pages,
  className = '',
}) => {
  const [bookTopPosition, setBookTopPosition] = useState<number>(0);
  const [bookLeftPosition, setBookLeftPosition] = useState<number>(0);
  const isMobileScreen = isMobile();

  // Define bookmarks for main section pages
  const bookmarks = [
    { pageIndex: isMobileScreen ? 1 : 2, title: 'About', sectionTitle: 'About', pageNumber: 1 },
    { pageIndex: isMobileScreen ? 3 : 4, title: 'Skills', sectionTitle: 'Skills', pageNumber: 2 },
    { pageIndex: isMobileScreen ? 6 : 7, title: 'Projects', sectionTitle: 'Projects', pageNumber: 3 },
    { pageIndex: isMobileScreen ? 8 : 9, title: 'Articles', sectionTitle: 'Articles', pageNumber: 4 },
  ];

  // Calculate book's top and left position for bookmark placement
  useEffect(() => {
    const updateBookPosition = () => {
      if (bookContainerRef.current) {
        const rect = bookContainerRef.current.getBoundingClientRect();
        setBookTopPosition(rect.top - 62);
        
        // Adjust left position based on current page and device
        // Desktop: If on second projects page (8) or articles (9), move to left side (right page top)
        // Desktop structure: bg=0, cover=1, about=2-3, skills=4-6, projects=7-8, articles=9, back-cover=10
        let leftPosition;
        if (!isMobileScreen && currentPage >= 8) {
          // Position at the left side (start of right page in two-page view)
          leftPosition = rect.left - 30;
        } else {
          // Normal center position
          leftPosition = rect.left + rect.width - 300;
        }
        
        setBookLeftPosition(leftPosition);
      }
    };

    setTimeout(() => {
      updateBookPosition();
    }, 500);

  }, [currentPage, isMobileScreen, bookContainerRef]);

  return (
    <>
      {bookmarks.map((bookmark) => {
        // Determine if bookmark should be active
        let isActive = false;
        
        if (isMobileScreen) {
          // Mobile: Check if current page belongs to the bookmark's section
          const currentPageData = pages[currentPage];
          isActive = currentPageData?.sectionTitle === bookmark.sectionTitle;
        } else {
          // Desktop: Check if current page OR next page (right side) matches bookmark
          isActive = currentPage === bookmark.pageIndex;
          
          if (currentPage % 2 === 0) {
            // On desktop, if on even page (left side), also check the right page
            isActive = isActive || (currentPage + 1 === bookmark.pageIndex);
          }
        }
        
        return (
          <Bookmark
            key={bookmark.pageIndex}
            title={bookmark.title}
            isActive={isActive}
            onClick={() => onBookmarkClick(bookmark.pageIndex)}
            pageNumber={bookmark.pageNumber}
            bookLeftPosition={bookLeftPosition}
            style={{
              position: 'fixed',
              top: bookTopPosition > 0 && bookLeftPosition > 0 ? `${bookTopPosition}px` : '50vh',
            }}
            className={className}
          />
        );
      })}
    </>
  );
};

export default BookBookmarks;

