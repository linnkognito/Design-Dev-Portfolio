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
  text: string;
  images: Image[];
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
  image: Image | ReactElement;
};

export type UiUx = {
  title: string;
  text: string;
  visuals: ReactElement;
  colorPalette: ColorPalette;
};
