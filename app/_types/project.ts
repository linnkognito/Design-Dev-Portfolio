import techIcons from '@/_data/techIcons';
import { ReactElement } from 'react';

export type Image = {
  src: string;
  alt: string;
};

export type Images = Image[];

export type Technology = {
  title: string;
  icon: keyof typeof techIcons;
};

export type About = {
  title: string;
  text: string | ReactElement;
  visuals: ReactElement[];
};

export type Color = {
  id: string;
  color: string;
};

export type ColorPalette = Color[];

export type Feature = {
  id: string;
  title: string;
  description: string | ReactElement;
  image: ReactElement;
};

export type UiUx = {
  title: string;
  text: string;
  visuals: ReactElement;
  colorPalette: ColorPalette;
};

export type Link = {
  href: string;
  alt: string;
  title: string;
  icon: ReactElement;
  colors: string;
};

export type Decoration = {
  visual: ReactElement;
  ariaLabel?: string;
  hideFromScreenReaders?: boolean;
};

export type Project = {
  id: string;
  title: string;
  path: string;
  image: Image;
  decoration: Decoration;
  description: string | ReactElement;
  about: About;
  uiUx: UiUx;
  technologies: Technology[];
  links: Link[];
  images: Image[];
  features: Feature[];
  buttonLabel: string;
};
