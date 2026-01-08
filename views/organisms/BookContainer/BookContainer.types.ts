import { ReactNode, HTMLAttributes } from 'react';

export interface BookPage {
  id: string;
  title: string;
  content: ReactNode;
  path: string;
}

export interface BookContainerProps extends HTMLAttributes<HTMLDivElement> {
  pages: BookPage[];
  currentPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}


