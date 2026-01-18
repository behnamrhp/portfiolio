import { ReactNode, HTMLAttributes } from 'react';

export interface BookPage {
  id: string;
  title: string;
  content?: ReactNode;
  path: string;
  sectionTitle?: string;
  isFirstPageOfSection?: boolean;
}

export interface BookContainerProps extends HTMLAttributes<HTMLDivElement> {
  pages: BookPage[];
  currentPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}


