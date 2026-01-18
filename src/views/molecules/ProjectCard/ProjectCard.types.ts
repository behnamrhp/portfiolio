import { HTMLAttributes } from 'react';
import { Project } from '@/input/types';

export interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: Project;
  className?: string;
}


