import React, { useEffect, useRef, useState } from 'react';
import ArticlesPage from './ArticlesPage';

/**
 * LazyArticlesPage - Wrapper that only loads articles when page becomes visible
 * Uses Intersection Observer to detect when the page enters the viewport
 */
const LazyArticlesPage: React.FC = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Create intersection observer to detect when page is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If page is visible and hasn't loaded yet, trigger load
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the page is visible
        rootMargin: '50px', // Start loading a bit before it's fully visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoad]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <ArticlesPage shouldLoad={shouldLoad} />
    </div>
  );
};

export default LazyArticlesPage;

