import React from 'react';
import { BodyTextProps } from './Typography.types';

const BodyText: React.FC<BodyTextProps> = ({
  children,
  align = 'left',
  color = 'ink',
  size = 'base',
  className = '',
  ...props
}) => {
  const colorClasses = {
    ink: 'text-manuscript-ink',
    paper: 'text-manuscript-paper',
    lapis: 'text-manuscript-lapis',
  };
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const sizeClasses = {
    sm: 'text-sm md:text-base',
    base: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl',
  };
  
  const combinedClassName = `
    font-garamond
    leading-relaxed
    ${colorClasses[color]}
    ${alignClasses[align]}
    ${sizeClasses[size]}
    ${className}
  `.trim();
  
  return (
    <p className={combinedClassName} {...props}>
      {children}
    </p>
  );
};

export default BodyText;


