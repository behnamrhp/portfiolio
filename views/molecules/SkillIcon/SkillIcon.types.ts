import { HTMLAttributes } from 'react';
import { Skill } from '@/input/types';

export interface SkillIconProps extends HTMLAttributes<HTMLDivElement> {
  skill: Skill;
  className?: string;
}


