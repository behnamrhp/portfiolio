import React from 'react';
import { BookmarkProps } from './Bookmark.types';

/**
 * Bookmark - Vertical ribbon bookmark that appears on first page of each section
 * Positioned from above the book down to the top edge
 */
const Bookmark: React.FC<BookmarkProps> = ({
  title,
  isActive = false,
  onClick,
  pageNumber,
  bookLeftPosition = 0,
  className = '',
  style,
  ...props
}) => {
  // Calculate horizontal position based on page number
  // Start from book's left edge and stagger bookmarks so they don't overlap
  const leftPosition = bookLeftPosition > 0 ? `${bookLeftPosition + (pageNumber * 60)}px` : '50vw'; // 60px spacing between bookmarks
  
  const activeStyles = isActive
    ? 'bg-manuscript-lapis shadow-lg scale-105'
    : 'bg-neutral-400 hover:bg-manuscript-lapis shadow-md';
  

  const combinedClassName = `
    fixed
    w-12
    cursor-pointer
    transition-all
    duration-300
    z-0
    ${bookLeftPosition > 0 ? 'opacity-100' : 'opacity-0'}
    ${activeStyles}
    ${className}
  `.trim();
  
  // Bookmark ribbon style with notch at bottom
  // Merge with custom style prop (position from BookContainer)
  const bookmarkStyle: React.CSSProperties = {
    left: leftPosition,
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), 50% 100%, 0 calc(100% - 12px))',
    ...style, // Allow custom positioning from parent
  };
  
  return (
    <div
      className={combinedClassName + " rotate-180 h-[62px]  rounded-sm shadow-2xl shadow-black border-none"}
      style={bookmarkStyle}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
      title={title}
      {...props}
    >
      {/* Vertical text on bookmark */}
      <div 
        className="absolute z-50 overflow-visible inset-0 flex items-center justify-center"
        style={{
          writingMode: 'vertical-lr',
          textOrientation: 'mixed',
        }}
      >
        <span className="text-manuscript-paper font-cormorant font-semibold text-xs tracking-wider py-2">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Bookmark;


