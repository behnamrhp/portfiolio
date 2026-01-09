
import React from 'react';
import ImageWrapper from '../../atoms/ImageWrapper';
import { dict } from '@/input';

const CoverPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-transparent relative">
      
        {/* Title */}
        <div className="text-center">
          <h1  className="mb-2 text-[#2c231d] text-[33px] absolute left-[19.5%] top-[3%] width-full font-medium">
            {dict.cover.title}
          </h1>
          
        </div>
        
        {/* Personal image */}
        <ImageWrapper
          src="/assets/images/me.jpeg"
          alt="Behnam Rahimpour"
          aspectRatio="1:1"
          className="w-full h-full absolute lg:left-[0] lg:top-[0%] lg:w-[9.9rem] lg:h-[16.5rem] radius-[1px]  object-cover"
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

