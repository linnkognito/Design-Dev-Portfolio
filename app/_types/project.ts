import techIcons from '@/_data/techIcons';

export type Technology = {
  title: string;
  icon: keyof typeof techIcons;
};
