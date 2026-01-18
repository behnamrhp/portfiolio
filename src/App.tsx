import { useState, useEffect } from 'react';
import { BookLayout } from './BookLayout';

const MIN_HEIGHT = 650;

/**
 * App component
 * Handles viewport height check and delegates navigation to BookLayout
 */
function App() {
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : MIN_HEIGHT
  );
  
  // Check viewport height
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Show message if viewport height is less than minimum
  if (viewportHeight < MIN_HEIGHT) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-manuscript-paper p-8 overflow-auto">
        <div className="max-w-md text-center">
          <div className="mb-6">
            <svg
              className="w-24 h-24 mx-auto text-manuscript-ink opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          
          <h2 className="font-garamond text-2xl text-manuscript-ink mb-4 font-semibold">
            Screen Height Too Small
          </h2>
          
          <p className="font-garamond text-manuscript-ink opacity-80 mb-6 leading-relaxed">
            For the best experience and to use all functionalities of this book,
            please use a screen with more than {MIN_HEIGHT} pixels in height or rotate
            your phone to landscape mode.
          </p>
          
          <div className="text-sm font-garamond text-manuscript-ink opacity-60">
            Current height: {viewportHeight}px | Required: {MIN_HEIGHT}px
          </div>
        </div>
      </div>
    );
  }
  
  return <BookLayout />;
}

export default App;

