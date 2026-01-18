import React from 'react';
import { SkeletonProps } from './Skeleton.types';

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  className = '',
  style,
  ...props
}) => {
  const variantClasses = {
    text: 'rounded-sm h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-sm',
  };
  
  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-pulse', // Can be enhanced with custom animation
    none: '',
  };
  
  const inlineStyles: React.CSSProperties = {
    ...style,
    width: width || (variant === 'circular' ? '40px' : '100%'),
    height: height || (variant === 'circular' ? '40px' : undefined),
  };
  
  const combinedClassName = `
    bg-manuscript-ink
    bg-opacity-20
    ${variantClasses[variant]}
    ${animationClasses[animation]}
    ${className}
  `.trim();
  
  return (
    <div
      className={combinedClassName}
      style={inlineStyles}
      {...props}
    />
  );
};

export default Skeleton;


