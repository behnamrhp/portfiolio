import React from 'react';
import { ArticleCardProps } from './ArticleCard.types';
import { Heading, BodyText } from '../../atoms/Typography';
import ImageWrapper from '../../atoms/ImageWrapper';

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onClick,
  className = '',
  ...props
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(article.url, '_blank', 'noopener,noreferrer');
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };
  
  const combinedClassName = `
    flex
    flex-col
    gap-3
    p-4
    border
    border-manuscript-ink
    hover:bg-manuscript-ink
    hover:bg-opacity-5
    transition-all
    duration-200
    cursor-pointer
    group
    ${className}
  `.trim();
  
  return (
    <div
      className={combinedClassName}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      {...props}
    >
      {/* Row 1: Image and Title */}
      <div className="flex gap-4 items-start">
        {article.cover_image && (
          <div className="flex-shrink-0 w-20 h-20">
            <ImageWrapper
              src={article.cover_image}
              alt={article.title}
              width={80}
              height={80}
              bordered
              rounded
            />
          </div>
        )}
        
        <Heading
          level="h6"
          className="flex-1 group-hover:text-manuscript-lapis transition-colors line-clamp-2 cursor-pointer"
        >
          {article.title}
        </Heading>
      </div>
      
      {/* Row 2: Description */}
      {article.description && (
        <BodyText size="sm" className="line-clamp-2 opacity-80 cursor-pointer w-full">
          {article.description}
        </BodyText>
      )}
      
      {/* Row 3: Reactions and Date */}
      <div className="flex items-center gap-4 text-sm text-manuscript-ink opacity-60 cursor-pointer">
        <span>❤️ {String(article.page_views_count || 0)} views</span>
        <span>
          {new Date(article.published_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;


