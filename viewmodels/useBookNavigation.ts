import { useEffect, useCallback, useState } from 'react';
import { usePageTurn } from './usePageTurn';
import { useKeyboardNavigation } from './useKeyboardNavigation';

interface BookPage {
  id: string;
  title: string;
  path: string;
}

interface UseBookNavigationProps {
  pages: BookPage[];
  enableKeyboard?: boolean;
}

/**
 * Comprehensive hook for book navigation
 * Uses window.history API to update URL without React Router re-rendering
 * Integrates keyboard and page turn animations
 */
export function useBookNavigation({
  pages,
  enableKeyboard = true,
}: UseBookNavigationProps) {
  // Get initial page from current URL
  const getInitialPage = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    const currentPath = window.location.pathname;
    const pageIndex = pages.findIndex((page) => page.path === currentPath);
    return pageIndex >= 0 ? pageIndex : 0;
  }, [pages]);

  const [initialPage] = useState(getInitialPage);
  
  const {
    currentPage,
    turnDirection,
    isAnimating,
    goToPage: goToPageInternal,
    nextPage: nextPageInternal,
    previousPage: previousPageInternal,
    canGoNext,
    canGoPrevious,
  } = usePageTurn({
    totalPages: pages.length,
    initialPage,
    onPageChange: (pageIndex) => {
      // Update URL using window.history API (no React Router navigation)
      const targetPage = pages[pageIndex];
      if (targetPage && typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        if (currentPath !== targetPage.path) {
          // Use pushState to update URL without page reload
          window.history.pushState(
            { page: pageIndex, path: targetPage.path },
            targetPage.title,
            targetPage.path
          );
        }
      }
    },
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = (event: PopStateEvent) => {
      // Get page index from history state or URL
      let pageIndex = 0;
      if (event.state && event.state.page !== undefined) {
        pageIndex = event.state.page;
      } else {
        const currentPath = window.location.pathname;
        pageIndex = pages.findIndex((page) => page.path === currentPath);
        if (pageIndex < 0) pageIndex = 0;
      }
      
      if (pageIndex !== currentPage) {
        goToPageInternal(pageIndex);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [pages, currentPage, goToPageInternal]);

  // Handle custom navigate events from LinkText component
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleNavigate = (event: CustomEvent<{ path: string }>) => {
      const path = event.detail.path;
      const pageIndex = pages.findIndex((page) => page.path === path);
      if (pageIndex >= 0 && pageIndex !== currentPage) {
        goToPageInternal(pageIndex);
      }
    };

    window.addEventListener('navigate', handleNavigate as EventListener);
    return () => window.removeEventListener('navigate', handleNavigate as EventListener);
  }, [pages, currentPage, goToPageInternal]);

  // Initialize URL on mount if needed
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const currentPath = window.location.pathname;
    const pageIndex = pages.findIndex((page) => page.path === currentPath);
    
    // If URL doesn't match any page, update to current page
    if (pageIndex < 0 && pages[currentPage]) {
      window.history.replaceState(
        { page: currentPage, path: pages[currentPage].path },
        pages[currentPage].title,
        pages[currentPage].path
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount - pages and currentPage are stable references
  
  // Wrapper functions that use internal navigation
  const goToPage = useCallback(
    (pageIndex: number) => {
      goToPageInternal(pageIndex);
    },
    [goToPageInternal]
  );

  const nextPage = useCallback(() => {
    nextPageInternal();
  }, [nextPageInternal]);

  const previousPage = useCallback(() => {
    previousPageInternal();
  }, [previousPageInternal]);
  
  // Keyboard navigation
  useKeyboardNavigation({
    onNext: nextPage,
    onPrevious: previousPage,
    enabled: enableKeyboard,
  });
  
  const goToPageByPath = useCallback(
    (path: string) => {
      const pageIndex = pages.findIndex((page) => page.path === path);
      if (pageIndex >= 0) {
        goToPage(pageIndex);
      }
    },
    [pages, goToPage]
  );
  
  return {
    currentPage,
    currentPageData: pages[currentPage],
    turnDirection,
    isAnimating,
    goToPage,
    goToPageByPath,
    nextPage,
    previousPage,
    canGoNext,
    canGoPrevious,
    pages,
  };
}

