import techIcons from '@/_data/techIcons';

export type Image = {
  src: string;
  alt: string;
};

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

export type UiUx = {
  title: string;
  text: string;
  visuals: Image;
  colorPalette: ColorPalette;
};
