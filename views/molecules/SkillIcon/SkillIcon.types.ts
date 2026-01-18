import { HTMLAttributes } from 'react';
import { Skill } from '@/input/types';

export interface SkillIconProps extends HTMLAttributes<HTMLButtonElement> {
  skill: Skill;
  className?: string;
}


