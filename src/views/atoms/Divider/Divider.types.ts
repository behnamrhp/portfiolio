import { HTMLAttributes } from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerStyle = 'solid' | 'dashed' | 'dotted' | 'ornamental';
export type DividerColor = 'ink' | 'lapis';

export interface DividerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  orientation?: DividerOrientation;
  dividerStyle?: DividerStyle;
  color?: DividerColor;
  thickness?: number;
  className?: string;
}


