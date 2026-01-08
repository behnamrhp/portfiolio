import { ImageProps as NextImageProps } from 'next/image';

export interface ImageWrapperProps extends Omit<NextImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  rounded?: boolean;
  bordered?: boolean;
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2';
}


