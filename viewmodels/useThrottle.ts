import { useCallback, useRef } from 'react';

/**
 * Custom hook for throttling function calls
 * Ensures function is called at most once per specified delay
 */
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const lastRan = useRef<number>(Date.now());

  return useCallback(
    ((...args) => {
      const now = Date.now();
      
      if (now - lastRan.current >= delay) {
        callback(...args);
        lastRan.current = now;
      }
    }) as T,
    [callback, delay]
  );
}

