import React from 'react';
import { SkillIconProps } from './SkillIcon.types';
import { LinkText } from '../../atoms/Typography';

const SkillIcon: React.FC<SkillIconProps> = ({
  skill,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (e.defaultPrevented) return;
    window.open(skill.documentLink, '_blank', 'noopener,noreferrer');
  };

  const combinedClassName = `
    flex
    flex-col
    justify-between
    items-center
    gap-2
    p-1
    pb-2
    border
    border-manuscript-ink
    rounded-sm
    bg-manuscript-paper
    hover:bg-manuscript-ink
    hover:bg-opacity-5
    transition-colors
    duration-200
    select-none
    cursor-pointer
    overflow-hidden
    ${className}
  `.trim();

  return (
    <div
      className={combinedClassName}
      onClick={handleClick}
      {...props}
    >
      <div className="w-18 h-16 p-1 overflow-visible flex items-center justify-center">
        <img
          src={skill.image}
          alt={skill.title}
          className='w-32 mt-3 mb-3 object-cover'
        />
      </div>
      <LinkText
        href={skill.documentLink}
        external
        className="text-xs text-center pointer-events-none"
      >
        {skill.title}
      </LinkText>
    </div>
  );
};

export default SkillIcon;
