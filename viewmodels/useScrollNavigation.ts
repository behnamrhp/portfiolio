'use client';

import { useEffect, useRef } from 'react';
import { useThrottle } from './useThrottle';

interface UseScrollNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  enabled?: boolean;
  throttleMs?: number;
  threshold?: number;
}

/**
 * Custom hook for scroll-based navigation
 * Handles wheel/scroll events for page turning
 */
export function useScrollNavigation({
  onNext,
  onPrevious,
  enabled = true,
  throttleMs = 500,
  threshold = 50,
}: UseScrollNavigationProps) {
  const isScrollingRef = useRef(false);

  const handleScrollThrottled = useThrottle((deltaY: number) => {
    if (isScrollingRef.current) return;
    
    if (Math.abs(deltaY) > threshold) {
      isScrollingRef.current = true;
      
      if (deltaY > 0) {
        onNext();
      } else {
        onPrevious();
      }
      
      setTimeout(() => {
        isScrollingRef.current = false;
      }, throttleMs);
    }
  }, throttleMs);

  useEffect(() => {
    if (!enabled) return;

    const handleWheel = (event: WheelEvent) => {
      // Only handle vertical scroll
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        handleScrollThrottled(event.deltaY);
      }
    };

    // Add event listener with passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleScrollThrottled, enabled]);
}

