'use client';

import { useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { usePageTurn } from './usePageTurn';
import { useKeyboardNavigation } from './useKeyboardNavigation';
import { useScrollNavigation } from './useScrollNavigation';
import { ROUTES } from '@/input/constants';

interface BookPage {
  id: string;
  title: string;
  path: string;
}

interface UseBookNavigationProps {
  pages: BookPage[];
  enableScroll?: boolean;
  enableKeyboard?: boolean;
}

/**
 * Comprehensive hook for book navigation
 * Integrates routing, keyboard, scroll, and page turn animations
 */
export function useBookNavigation({
  pages,
  enableScroll = true,
  enableKeyboard = true,
}: UseBookNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Find current page index from URL
  const currentPageIndex = pages.findIndex((page) => page.path === pathname);
  const initialPage = currentPageIndex >= 0 ? currentPageIndex : 0;
  
  const {
    currentPage,
    turnDirection,
    isAnimating,
    goToPage,
    nextPage,
    previousPage,
    canGoNext,
    canGoPrevious,
  } = usePageTurn({
    totalPages: pages.length,
    initialPage,
    onPageChange: (pageIndex) => {
      // Update URL without page refresh
      const targetPage = pages[pageIndex];
      if (targetPage && pathname !== targetPage.path) {
        router.push(targetPage.path);
      }
    },
  });
  
  // Sync page state with URL changes (browser back/forward)
  useEffect(() => {
    const urlPageIndex = pages.findIndex((page) => page.path === pathname);
    if (urlPageIndex >= 0 && urlPageIndex !== currentPage) {
      goToPage(urlPageIndex);
    }
  }, [pathname, pages, currentPage, goToPage]);
  
  // Keyboard navigation
  useKeyboardNavigation({
    onNext: nextPage,
    onPrevious: previousPage,
    enabled: enableKeyboard,
  });
  
  // Scroll navigation
  useScrollNavigation({
    onNext: nextPage,
    onPrevious: previousPage,
    enabled: enableScroll,
    throttleMs: 600,
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

