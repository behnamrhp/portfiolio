import React, { useState } from 'react';
import { ImageWrapperProps } from './ImageWrapper.types';

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  rounded = false,
  bordered = false,
  aspectRatio,
  className = '',
  width,
  height,
  style,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
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
    ${roundedClass}
    ${borderedClass}
    ${aspectClass}
    ${className}
  `.trim();
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  
  // If aspect ratio is specified, use container approach
  if (aspectRatio) {
    return (
      <div className={`relative ${combinedClassName}`} style={style}>
        {isLoading && !hasError && (
          <div className="absolute inset-0 bg-manuscript-paper animate-pulse" />
        )}
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-manuscript-paper text-manuscript-ink">
            <span className="text-sm">Image not found</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}
            loading="lazy"
            {...props}
          />
        )}
      </div>
    );
  }
  
  // Standard image without aspect ratio container
  return (
    <div style={style} className={combinedClassName}>
      {isLoading && !hasError && (
        <div className="w-full h-full bg-manuscript-paper animate-pulse" />
      )}
      {hasError ? (
        <div className="flex items-center justify-center bg-manuscript-paper text-manuscript-ink p-4">
          <span className="text-sm">Image not found</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          className={`${isLoading ? 'opacity-0' : 'opacity-100'} h-full w-full transition-opacity`}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWrapper;


