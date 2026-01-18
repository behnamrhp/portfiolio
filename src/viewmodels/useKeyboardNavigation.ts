
import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  enabled?: boolean;
}

/**
 * Custom hook for keyboard navigation (arrow keys)
 * Handles left/right arrow keys for page navigation
 */
export function useKeyboardNavigation({
  onNext,
  onPrevious,
  enabled = true,
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if user is typing in an input field
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          onPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          onNext();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrevious, enabled]);
}

