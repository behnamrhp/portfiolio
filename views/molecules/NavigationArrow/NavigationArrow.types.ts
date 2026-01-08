import { HTMLAttributes } from 'react';

export type ArrowDirection = 'left' | 'right';

export interface NavigationArrowProps extends HTMLAttributes<HTMLButtonElement> {
  direction: ArrowDirection;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}


