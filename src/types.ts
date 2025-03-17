import { ReactNode, ElementType } from 'react';

export interface BodyOptions {
  curveIntensity?: number;
  horizontalVariation?: number;
  verticalVariation?: number;
}

export interface TitleOptions {
  rotationVariation?: number;
  baselineVariation?: number;
  trackingVariation?: number;
  sizeVariation?: number;
}

export interface HumaneTypeProps {
  children: ReactNode;
  bodyOptions?: BodyOptions;
  titleOptions?: TitleOptions;
  mode?: 'body' | 'title';
  as?: ElementType;
  className?: string;
  [key: string]: any; // Additional props
}

export interface HumaneTitleProps {
  children: ReactNode;
  options?: TitleOptions;
  as?: ElementType;
  className?: string;
  [key: string]: any; // Additional props
}

export interface HumaneBodyProps {
  children: ReactNode;
  options?: BodyOptions;
  as?: ElementType;
  className?: string;
  [key: string]: any; // Additional props
}
