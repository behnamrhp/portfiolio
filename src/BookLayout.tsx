import { useState, useEffect, useCallback } from 'react';
import { BookContainer } from '@/views/organisms';
import { 
  sections, 
  flattenSections, 
  getSectionByPageIndex, 
  getFirstPageIndexByPath 
} from './sections';

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
    
    const currentSection = getSectionByPageIndex(flatPages, currentPage);
    const newSection = getSectionByPageIndex(flatPages, newPageIndex);
    
    // Update page state
    setCurrentPage(newPageIndex);
    
    // Update URL only if section changed
    if (currentSection?.id !== newSection?.id && newSection) {
      
      window.history.pushState(
        { page: newPageIndex, section: newSection.id },
        newSection.title,
        newSection.path
      );
    }
  }, [currentPage, flatPages]);
  
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
  }));
  
  return (
    <BookContainer 
      pages={bookPages} 
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
}

