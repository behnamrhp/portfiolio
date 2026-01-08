import { HTMLAttributes } from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerStyle = 'solid' | 'dashed' | 'dotted' | 'ornamental';
export type DividerColor = 'ink' | 'lapis';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation;
  style?: DividerStyle;
  color?: DividerColor;
  thickness?: number;
  className?: string;
}


