import React from 'react';
import { HeadingProps } from './Typography.types';

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 'h2',
  align = 'left',
  color = 'ink',
  className = '',
  ...props
}) => {
  const Component = level;
  
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
    h1: 'text-5xl md:text-6xl lg:text-7xl',
    h2: 'text-4xl md:text-5xl lg:text-6xl',
    h3: 'text-3xl md:text-4xl lg:text-5xl',
    h4: 'text-2xl md:text-3xl lg:text-4xl',
    h5: 'text-xl md:text-2xl lg:text-3xl',
    h6: 'text-lg md:text-xl lg:text-2xl',
  };
  
  const combinedClassName = `
    font-cormorant
    font-bold
    ${colorClasses[color]}
    ${alignClasses[align]}
    ${sizeClasses[level]}
    ${className}
  `.trim();
  
  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};

export default Heading;


