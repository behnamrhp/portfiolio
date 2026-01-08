import React from 'react';
import { PageLayoutProps } from './PageLayout.types';
import { Heading, BodyText } from '../../atoms/Typography';
import Divider from '../../atoms/Divider';

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  children,
  footer,
  className = '',
  ...props
}) => {
  const combinedClassName = `
    flex
    flex-col
    h-full
    w-full
    ${className}
  `.trim();
  
  return (
    <div className={combinedClassName} {...props}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <Heading level="h2" className="mb-2">
              {title}
            </Heading>
          )}
          
          {subtitle && (
            <BodyText size="lg" className="opacity-80">
              {subtitle}
            </BodyText>
          )}
          
          <Divider style="ornamental" className="mt-4" />
        </div>
      )}
      
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
      
      {/* Footer */}
      {footer && (
        <div className="mt-6 pt-4 border-t border-manuscript-ink">
          {footer}
        </div>
      )}
    </div>
  );
};

export default PageLayout;


