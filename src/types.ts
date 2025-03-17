import { ReactNode, ElementType, HTMLAttributes } from 'react';

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

export interface HumaneTypeProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  bodyOptions?: BodyOptions;
  titleOptions?: TitleOptions;
  mode?: 'body' | 'title';
  as?: ElementType;
  className?: string;
}

export interface HumaneTitleProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  options?: TitleOptions;
  as?: ElementType;
  className?: string;
}

export interface HumaneBodyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  options?: BodyOptions;
  as?: ElementType;
  className?: string;
}
