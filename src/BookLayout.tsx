import { useState, useEffect, useCallback } from 'react';
import { BookContainer } from '@/views/organisms';
import { 
  sections, 
  flattenSections, 
  getSectionByPageIndex, 
  getFirstPageIndexByPath 
} from './sections';
import { isMobile } from '@/input';

/**
 * BookLayout - Main book component with section-based URL routing
 * 
 * Architecture:
 * - Sections: Logical content areas (About, Skills, etc.) with one URL path
 * - Physical Pages: What users see and flip through
 * - One section can have multiple physical pages
 * - URL changes only when navigating between sections
 * 
 * Example:
 * - About section (/about) has 2 physical pages
 * - Flipping within About: URL stays /about
 * - Flipping from About to Skills: URL changes to /skills
 */
export function BookLayout() {
  // Flatten sections into page array
  const flatPages = flattenSections(sections);
  
  // Get initial page from URL
  const getInitialPage = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    const currentPath = window.location.pathname;
    return getFirstPageIndexByPath(flatPages, currentPath);
  }, [flatPages]);
  
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  
  // Handle page change
  const handlePageChange = useCallback((newPageIndex: number) => {
    if (newPageIndex < 0 || newPageIndex >= flatPages.length) return;
    
    const isMobileScreen = isMobile();
    
    // Update page state
    setCurrentPage(newPageIndex);
    
    // Determine which page's section to show in URL
    // Desktop: In two-page mode, show the section of the RIGHT page (odd index)
    // Mobile: Show the section of the current page
    let pageToShowInUrl = newPageIndex;
    
    if (!isMobileScreen && newPageIndex % 2 === 0 && newPageIndex > 0) {
      // If on an even page (left side) in desktop mode, check if next page exists
      // and show that section in the URL (right page)
      if (newPageIndex + 1 < flatPages.length) {
        const rightPage = flatPages[newPageIndex + 1];
        const leftPage = flatPages[newPageIndex];
        
        // If the right page is a different section, show it in URL
        if (rightPage.sectionId !== leftPage.sectionId) {
          pageToShowInUrl = newPageIndex + 1;
        }
      }
    }
    
    const sectionToShow = getSectionByPageIndex(flatPages, pageToShowInUrl);
    
    if (sectionToShow && window.location.pathname !== sectionToShow.path) {
      window.history.pushState(
        { page: pageToShowInUrl, section: sectionToShow.id },
        sectionToShow.title,
        sectionToShow.path
      );
    }
  }, [flatPages]);
  
  // Handle browser back/forward
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handlePopState = () => {
      const currentPath = window.location.pathname;
      const pageIndex = getFirstPageIndexByPath(flatPages, currentPath);
      setCurrentPage(pageIndex);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [flatPages]);
  
  // Convert flat pages to format BookContainer expects
  const bookPages = flatPages.map(page => ({
    id: page.id,
    title: page.title,
    path: page.sectionPath,
    content: page.content,
    sectionTitle: page.sectionTitle,
    isFirstPageOfSection: page.isFirstPageOfSection,
  }));
  
  return (
    <BookContainer 
      pages={bookPages} 
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
}

