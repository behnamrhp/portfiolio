import React from 'react';
import Image from 'next/image';
import { ImageWrapperProps } from './ImageWrapper.types';

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  rounded = false,
  bordered = false,
  aspectRatio,
  className = '',
  ...props
}) => {
  const roundedClass = rounded ? 'rounded-sm' : '';
  const borderedClass = bordered ? 'border border-manuscript-ink' : '';
  
  const aspectRatioClasses = {
    '1:1': 'aspect-square',
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '3:2': 'aspect-[3/2]',
  };
  
  const aspectClass = aspectRatio ? aspectRatioClasses[aspectRatio] : '';
  
  const combinedClassName = `
    relative
    ${roundedClass}
    ${borderedClass}
    ${aspectClass}
    ${className}
  `.trim();
  
  return (
    <div className={combinedClassName}>
      <Image
        src={src}
        alt={alt}
        fill={aspectRatio ? true : false}
        className={aspectRatio ? 'object-cover' : ''}
        {...props}
      />
    </div>
  );
};

export default ImageWrapper;


