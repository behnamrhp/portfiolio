import React from 'react';
import { ProjectCardProps } from './ProjectCard.types';
import { Heading, BodyText, LinkText } from '../../atoms/Typography';
import Divider from '../../atoms/Divider';
import ImageWrapper from '../../atoms/ImageWrapper';

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = '',
  ...props
}) => {
  const combinedClassName = `
    border
    border-manuscript-ink
    p-6
    hover:bg-manuscript-ink
    hover:bg-opacity-5
    transition-all
    duration-200
    bg-manuscript-paper
    ${className}
  `.trim();
  
  return (
    <div className={combinedClassName} {...props}>
      {/* Project Title */}
      <Heading level="h5" className="mb-3">
        {project.title}
      </Heading>
      
      <Divider className="mb-4" />
      
      {/* Screenshot if available */}
      {project.screenshot && (
        <div className="mb-4">
          <ImageWrapper
            src={project.screenshot}
            alt={project.title}
            aspectRatio="16:9"
            bordered
            rounded
          />
        </div>
      )}
      
      {/* Description */}
      <BodyText size="base" className="mb-4 leading-relaxed">
        {project.description}
      </BodyText>
      
      {/* Links */}
      <div className="flex flex-wrap gap-3 items-center pt-2">
        <span className="font-garamond text-sm text-manuscript-ink opacity-60">
          Links:
        </span>
        {project.links.map((link, index) => (
          <React.Fragment key={index}>
            <LinkText
              href={link.url}
              external
              className="inline-flex items-center gap-1 text-sm font-semibold"
            >
              {link.title}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </LinkText>
            {index < project.links.length - 1 && (
              <span className="text-manuscript-ink opacity-30">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;


