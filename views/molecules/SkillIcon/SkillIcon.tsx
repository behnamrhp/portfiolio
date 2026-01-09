
import React, { useEffect, useRef } from 'react';
import { SkillIconProps } from './SkillIcon.types';
import ImageWrapper from '../../atoms/ImageWrapper';
import { LinkText } from '../../atoms/Typography';

const SkillIcon: React.FC<SkillIconProps> = ({
  skill,
  isDraggable = true,
  className = '',
  ...props
}) => {
  const iconRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isDraggable && iconRef.current) {
      const element = iconRef.current;
      let initialX = 0;
      let initialY = 0;
      let isDragging = false;
      
      const handleMouseDown = (e: MouseEvent) => {
        isDragging = true;
        initialX = e.clientX - element.offsetLeft;
        initialY = e.clientY - element.offsetTop;
        element.style.cursor = 'grabbing';
      };
      
      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        element.style.position = 'relative';
        element.style.left = `${e.clientX - initialX}px`;
        element.style.top = `${e.clientY - initialY}px`;
      };
      
      const handleMouseUp = () => {
        if (isDragging) {
          isDragging = false;
          element.style.cursor = 'grab';
          // Return to place animation
          element.style.transition = 'all 0.3s ease';
          element.style.left = '0px';
          element.style.top = '0px';
          setTimeout(() => {
            element.style.transition = '';
          }, 300);
        }
      };
      
      element.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        element.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDraggable]);
  
  const handleClick = (e: React.MouseEvent) => {
    if (e.defaultPrevented) return;
    window.open(skill.documentLink, '_blank', 'noopener,noreferrer');
  };
  
  const combinedClassName = `
    flex
    flex-col
    items-center
    gap-2
    p-3
    border
    border-manuscript-ink
    rounded-sm
    bg-manuscript-paper
    hover:bg-manuscript-ink
    hover:bg-opacity-5
    transition-colors
    duration-200
    ${isDraggable ? 'cursor-grab' : 'cursor-pointer'}
    ${className}
  `.trim();
  
  return (
    <div
      ref={iconRef}
      className={combinedClassName}
      onClick={handleClick}
      {...props}
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <ImageWrapper
          src={skill.image}
          alt={skill.title}
          width={48}
          height={48}
        />
      </div>
      <LinkText
        href={skill.documentLink}
        external
        className="text-xs text-center"
        onClick={(e) => e.preventDefault()} // Handle click on parent
      >
        {skill.title}
      </LinkText>
    </div>
  );
};

export default SkillIcon;


