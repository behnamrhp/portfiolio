
import React from 'react';
import ImageWrapper from '../../atoms/ImageWrapper';
import { dict, getBookSizes } from '@/input';

  const bookSize = getBookSizes();
  const lageScreenWidth = bookSize.width * 0.294
  const lageScreenHeight = bookSize.height * 0.33
  const largeScreenLeft = bookSize.width * 0.35
  const largeScreenTop = bookSize.height * 0.335
  const largeScreenHeaderLeft = bookSize.width * 0.27
  const largeScreenHeaderTop = bookSize.height * 0.089
  const largeScreenHeaderFontSize = bookSize.width * 0.06
const CoverPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-transparent relative">
      
        {/* Title */}
        <div className="text-center">
          <h1
            style={{
              left: `${largeScreenHeaderLeft}px`,
              top: `${largeScreenHeaderTop}px`,
              fontSize: `${largeScreenHeaderFontSize}px`,
            }}
            className="mb-2 text-[#2c231d] width-full font-medium fixed">
            {dict.cover.title}
          </h1>
          
        </div>
        
        {/* Personal image */}
        <ImageWrapper
          src="/assets/images/me.jpeg"
          alt="Behnam Rahimpour"
          style={{
            width: `${lageScreenWidth}px`,
            height: `${lageScreenHeight}px`,
            left: `${largeScreenLeft}px`,
            top: `${largeScreenTop}px`,
          }}
          className={`w-full h-full fixed radius-[1px]  object-cover`}
        />
        
      {/* Hint to navigate */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="font-garamond text-manuscript-ink opacity-40 text-sm animate-pulse">
          Press → to begin
        </p>
      </div>
    </div>
  );
};

export default CoverPage;

