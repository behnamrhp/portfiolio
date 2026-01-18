import { ReactNode, HTMLAttributes } from 'react';

export interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}


