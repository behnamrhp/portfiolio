import { HTMLAttributes, ReactNode } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextAlign = 'left' | 'center' | 'right';
export type TextColor = 'ink' | 'paper' | 'lapis';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: HeadingLevel;
  align?: TextAlign;
  color?: TextColor;
  className?: string;
}

export interface BodyTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  align?: TextAlign;
  color?: TextColor;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  className?: string;
}

export interface LinkTextProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  external?: boolean;
  color?: TextColor;
  underline?: boolean;
  className?: string;
}


