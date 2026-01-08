import React from 'react';
import Link from 'next/link';
import { LinkTextProps } from './Typography.types';

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
  
  if (external) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link href={href} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
};

export default LinkText;


