
import { useState, useCallback } from 'react';

export type PageTurnDirection = 'forward' | 'backward' | null;

interface UsePageTurnProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

interface UsePageTurnReturn {
  currentPage: number;
  turnDirection: PageTurnDirection;
  isAnimating: boolean;
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

/**
 * Custom hook for managing page turn state and animations
 * Provides smooth page turning with direction tracking
 */
export function usePageTurn({
  totalPages,
  initialPage = 0,
  onPageChange,
}: UsePageTurnProps): UsePageTurnReturn {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [turnDirection, setTurnDirection] = useState<PageTurnDirection>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPage = useCallback(
    (targetPage: number) => {
      if (
        targetPage === currentPage ||
        targetPage < 0 ||
        targetPage >= totalPages ||
        isAnimating
      ) {
        return;
      }

      const direction = targetPage > currentPage ? 'forward' : 'backward';
      
      setIsAnimating(true);
      setTurnDirection(direction);
      
      // Simulate page turn animation
      setTimeout(() => {
        setCurrentPage(targetPage);
        onPageChange?.(targetPage);
        
        // Reset animation state
        setTimeout(() => {
          setTurnDirection(null);
          setIsAnimating(false);
        }, 100);
      }, 600); // Animation duration
    },
    [currentPage, totalPages, isAnimating, onPageChange]
  );

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const previousPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const canGoNext = currentPage < totalPages - 1 && !isAnimating;
  const canGoPrevious = currentPage > 0 && !isAnimating;

  return {
    currentPage,
    turnDirection,
    isAnimating,
    goToPage,
    nextPage,
    previousPage,
    canGoNext,
    canGoPrevious,
  };
}

