import React from 'react';
import { NavigationArrowProps } from './NavigationArrow.types';

const NavigationArrow: React.FC<NavigationArrowProps> = ({
  direction,
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const rotationClasses = {
    left: 'rotate-180',
    right: '',
  };
  
  const combinedClassName = `
    p-3
    bg-manuscript-paper
    border-2
    border-manuscript-ink
    hover:bg-manuscript-ink
    hover:text-manuscript-paper
    transition-all
    duration-200
    cursor-pointer
    disabled:opacity-30
    disabled:cursor-not-allowed
    disabled:hover:bg-manuscript-paper
    disabled:hover:text-manuscript-ink
    ${className}
  `.trim();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={combinedClassName}
      onClick={handleClick}
      disabled={disabled}
      aria-label={`Navigate ${direction}`}
      {...props}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={rotationClasses[direction]}
      >
        {/* Persian-style ornamental arrow */}
        <path d="M5 12h14M12 5l7 7-7 7" />
        <path d="M9 8l3-3 3 3" opacity="0.5" />
        <path d="M9 16l3 3 3-3" opacity="0.5" />
      </svg>
    </button>
  );
};

export default NavigationArrow;


