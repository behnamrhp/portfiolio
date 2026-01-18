import React from 'react';
import NavigationArrow from '../../molecules/NavigationArrow';
import { useKeyboardNavigation } from '@/viewmodels';

interface BookNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  className?: string;
}

/**
 * BookNavigation - Handles navigation arrows and keyboard controls
 */
const BookNavigation: React.FC<BookNavigationProps> = ({
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  className = '',
}) => {
  // Keyboard navigation - uses the same functions as arrow buttons
  useKeyboardNavigation({
    onNext,
    onPrevious,
    enabled: true,
  });

  return (
    <>
      {/* Left Navigation Arrow */}
      <NavigationArrow
        direction="left"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 ${className}`}
      />

      {/* Right Navigation Arrow */}
      <NavigationArrow
        direction="right"
        onClick={onNext}
        disabled={!canGoNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 ${className}`}
      />
    </>
  );
};

export default BookNavigation;
