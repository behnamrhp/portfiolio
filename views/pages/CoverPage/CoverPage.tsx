
import React from 'react';
import { Heading } from '../../atoms/Typography';
import ImageWrapper from '../../atoms/ImageWrapper';
import { dict } from '@/input';

const CoverPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-manuscript-paper relative">
      {/* Cover Background - Thick book cover effect */}
      <div className="absolute inset-0 border-8 border-manuscript-ink rounded-sm shadow-2xl">
        {/* Inner border for depth */}
        <div className="absolute inset-4 border-2 border-manuscript-ink opacity-50" />
        
        {/* Ornamental corners */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-manuscript-lapis" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-manuscript-lapis" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-manuscript-lapis" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-manuscript-lapis" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Personal Image */}
        <div className="relative">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-manuscript-lapis shadow-lg overflow-hidden bg-manuscript-ink">
            {/* Personal image */}
            <ImageWrapper
              src="/assets/images/me.jpeg"
              alt="Behnam Rahimpour"
              aspectRatio="1:1"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-2 border-2 border-manuscript-lapis rounded-full opacity-30" />
        </div>
        
        {/* Title */}
        <div className="text-center">
          <Heading level="h1" color="ink" className="mb-2">
            {dict.cover.title}
          </Heading>
          
          {/* Ornamental line */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-24 h-0.5 bg-manuscript-lapis" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-manuscript-lapis"
            >
              <path
                d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="w-24 h-0.5 bg-manuscript-lapis" />
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="font-garamond text-manuscript-ink text-lg md:text-xl opacity-80 text-center max-w-md">
          Portfolio & Philosophy
        </p>
      </div>
      
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

