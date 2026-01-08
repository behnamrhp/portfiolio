import { HTMLAttributes } from 'react';

export interface BookmarkProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
  position: number; // Position from left in pixels or percentage
  className?: string;
}


