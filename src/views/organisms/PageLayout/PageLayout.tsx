import React from 'react';
import { PageLayoutProps } from './PageLayout.types';

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
    overflow-x-visible
    ${className}
  `.trim();
  
  return (
    <div className={combinedClassName} {...props}>
      {/* Content */}
      <div className="flex-1 overflow-visible">
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


