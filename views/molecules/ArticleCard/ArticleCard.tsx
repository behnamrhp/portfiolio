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
    gap-4
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
  
  console.log(article);
  return (
    <div
      className={combinedClassName}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      {...props}
    >
      {article.cover_image && (
        <div className="flex-shrink-0 w-24 h-24">
          <ImageWrapper
            src={article.cover_image}
            alt={article.title}
            width={96}
            height={96}
            bordered
            rounded
          />
        </div>
      )}
      
      <div className="flex-1 min-w-0 cursor-pointer">
        <Heading
          level="h4"
          className="mb-2 group-hover:text-manuscript-lapis transition-colors line-clamp-2 cursor-pointer"
        >
          {article.title}
        </Heading>
        
        {article.description && (
          <BodyText size="sm" className="mb-2 line-clamp-2 opacity-80 cursor-pointer">
            {article.description}
          </BodyText>
        )}
        
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
    </div>
  );
};

export default ArticleCard;


