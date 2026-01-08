import { HTMLAttributes } from 'react';

export interface Article {
  id: number;
  title: string;
  description?: string;
  cover_image?: string;
  url: string;
  public_reactions_count: number;
  published_at: string;
}

export interface ArticleCardProps extends HTMLAttributes<HTMLDivElement> {
  article: Article;
  onClick?: () => void;
  className?: string;
}


