import { ImgHTMLAttributes } from 'react';

export interface ImageWrapperProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  rounded?: boolean;
  bordered?: boolean;
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2';
  width?: number | string;
  height?: number | string;
}


