import React from 'react';
import { LinkTextProps } from './Typography.types';
import { ROUTES } from '@/input/constants';

const LinkText: React.FC<LinkTextProps> = ({
  children,
  href,
  external = false,
  color = 'lapis',
  underline = true,
  className = '',
  ...props
}) => {
  const colorClasses = {
    ink: 'text-manuscript-ink hover:text-opacity-80',
    paper: 'text-manuscript-paper hover:text-opacity-80',
    lapis: 'text-manuscript-lapis hover:text-opacity-80',
  };
  
  const underlineClass = underline ? 'underline' : 'no-underline';
  
  const combinedClassName = `
    font-garamond
    transition-all
    duration-200
    ${colorClasses[color]}
    ${underlineClass}
    ${className}
  `.trim();
  
  const isInternalRoute = Object.values(ROUTES).includes(href as any);
  
  const handleInternalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (external || !isInternalRoute) return;
    
    e.preventDefault();
    
    window.history.pushState(
      { path: href },
      '',
      href
    );
    
    window.dispatchEvent(new CustomEvent('navigate', { detail: { path: href } }));
  };
  
  if (external || !isInternalRoute) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <a
      href={href}
      className={combinedClassName}
      onClick={handleInternalClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkText;


