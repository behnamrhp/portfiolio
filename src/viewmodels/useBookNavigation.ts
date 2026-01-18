import { useEffect, useCallback, useState } from 'react';
import { usePageTurn } from './usePageTurn';

interface BookPage {
  id: string;
  title: string;
  path: string;
}

interface UseBookNavigationProps {
  pages: BookPage[];
}

/**
 * Comprehensive hook for book navigation
 * - Reads current page from URL on mount
 * - Updates URL when navigating (using window.history.pushState)
 * - Handles browser back/forward buttons
 */
export function useBookNavigation({
  pages,
}: UseBookNavigationProps) {
  /**
   * Find the initial page based on current URL
   */
  const getInitialPage = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    
    const currentPath = window.location.pathname;
    
    // Find matching page, but skip background page (it's not a real route)
    const pageIndex = pages.findIndex(
      (page) => page.path === currentPath && page.id !== 'bg'
    );
    
    // If found, return it
    if (pageIndex >= 0) return pageIndex;
    
    // Otherwise, default to cover page
    const coverIndex = pages.findIndex((page) => page.id === 'cover');
    return coverIndex >= 0 ? coverIndex : 0;
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
    onPageChange: (pageIndex, shouldUpdateUrl = true) => {
      const targetPage = pages[pageIndex];
      if (!targetPage || typeof window === 'undefined') return;
      
      // Only update URL if requested (skip for browser back/forward navigation)
      if (!shouldUpdateUrl) return;
      
      // Update URL using window.history.pushState (for user-initiated navigation)
      const currentPath = window.location.pathname;
      if (currentPath !== targetPage.path) {
        window.history.pushState(
          { page: pageIndex, path: targetPage.path },
          targetPage.title,
          targetPage.path
        );
      }
    },
  });

  /**
   * Handle browser back/forward buttons
   * When browser navigates, URL is already changed - just flip the page to match
   * WITHOUT updating URL again (to avoid duplicate history entries)
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = (event: PopStateEvent) => {
      let pageIndex = 0;
      
      // Try to get page from history state first
      if (event.state?.page !== undefined) {
        pageIndex = event.state.page;
      } else {
        // Otherwise find by URL path (skip background page)
        const currentPath = window.location.pathname;
        pageIndex = pages.findIndex(
          (page) => page.path === currentPath && page.id !== 'bg'
        );
        if (pageIndex < 0) {
          // Default to cover if not found
          pageIndex = pages.findIndex((page) => page.id === 'cover') || 0;
        }
      }
      
      if (pageIndex !== currentPage) {
        // Flip page WITHOUT updating URL (shouldUpdateUrl = false)
        // because browser already changed the URL
        goToPageInternal(pageIndex, false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [pages, currentPage, goToPageInternal]);

  /**
   * Handle custom navigate events from LinkText component
   * Allows internal links to trigger page navigation
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleNavigate = (event: CustomEvent<{ path: string }>) => {
      const path = event.detail.path;
      const pageIndex = pages.findIndex(
        (page) => page.path === path && page.id !== 'bg'
      );
      if (pageIndex >= 0 && pageIndex !== currentPage) {
        goToPageInternal(pageIndex);
      }
    };

    window.addEventListener('navigate', handleNavigate as EventListener);
    return () => window.removeEventListener('navigate', handleNavigate as EventListener);
  }, [pages, currentPage, goToPageInternal]);

  /**
   * Initialize URL on mount if current URL doesn't match any page
   * Sets URL to the initial page we're displaying
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const currentPath = window.location.pathname;
    const matchingPage = pages.find(
      (page) => page.path === currentPath && page.id !== 'bg'
    );
    
    // If URL doesn't match any page, update it to current page's URL
    if (!matchingPage && pages[currentPage]?.id !== 'bg') {
      window.history.replaceState(
        { page: currentPage, path: pages[currentPage].path },
        pages[currentPage].title,
        pages[currentPage].path
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount
  
  // Wrapper functions that use internal navigation
  // By default, user-initiated navigation DOES update the URL
  const goToPage = useCallback(
    (pageIndex: number, shouldUpdateUrl: boolean = true) => {
      goToPageInternal(pageIndex, shouldUpdateUrl);
    },
    [goToPageInternal]
  );

  const nextPage = useCallback(() => {
    nextPageInternal();
  }, [nextPageInternal]);

  const previousPage = useCallback(() => {
    previousPageInternal();
  }, [previousPageInternal]);
  
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

