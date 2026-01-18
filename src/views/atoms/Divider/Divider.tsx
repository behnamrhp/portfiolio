import React from 'react';
import { DividerProps } from './Divider.types';

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  dividerStyle = 'solid',
  color = 'ink',
  thickness = 1,
  className = '',
  ...props
}) => {
  const colorClasses = {
    ink: 'border-manuscript-ink',
    lapis: 'border-manuscript-lapis',
  };
  
  const styleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
    ornamental: 'border-double',
  };
  
  const orientationClasses = {
    horizontal: `border-t-${thickness} w-full`,
    vertical: `border-l-${thickness} h-full`,
  };
  
  if (dividerStyle === 'ornamental') {
    return (
      <div
        className={`flex items-center justify-center my-4 ${className}`}
        {...props}
      >
        <div className={`flex-1 ${colorClasses[color]} border-t`}></div>
        <div className={`px-4 ${colorClasses[color]}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`${color === 'ink' ? 'stroke-manuscript-ink' : 'stroke-manuscript-lapis'}`}
          >
            <path
              d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={`flex-1 ${colorClasses[color]} border-t`}></div>
      </div>
    );
  }
  
  const combinedClassName = `
    ${colorClasses[color]}
    ${styleClasses[dividerStyle]}
    ${orientationClasses[orientation]}
    ${className}
  `.trim();
  
  return <div className={combinedClassName} {...props} />;
};

export default Divider;


