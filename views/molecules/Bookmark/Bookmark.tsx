import React from 'react';
import { BookmarkProps } from './Bookmark.types';

const Bookmark: React.FC<BookmarkProps> = ({
  title,
  isActive = false,
  onClick,
  position,
  className = '',
  ...props
}) => {
  const activeStyles = isActive
    ? 'bg-manuscript-lapis text-manuscript-paper'
    : 'bg-manuscript-paper text-manuscript-ink hover:bg-manuscript-ink hover:text-manuscript-paper';
  
  const combinedClassName = `
    absolute
    top-0
    transform
    -translate-y-full
    px-4
    py-2
    font-cormorant
    text-sm
    border
    border-manuscript-ink
    border-b-0
    cursor-pointer
    transition-all
    duration-200
    min-w-[80px]
    text-center
    ${activeStyles}
    ${className}
  `.trim();
  
  return (
    <div
      className={combinedClassName}
      style={{ left: `${position}px` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
      {...props}
    >
      {title}
    </div>
  );
};

export default Bookmark;


