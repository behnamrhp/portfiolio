import { HTMLAttributes, CSSProperties } from 'react';

export interface BookmarkProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
  pageNumber: number; // Page number for positioning (0-indexed)
  bookLeftPosition?: number; // Left position of the book for calculating bookmark position
  className?: string;
  style?: CSSProperties; // Allow custom styles for positioning
}


