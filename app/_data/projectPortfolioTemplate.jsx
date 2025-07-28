import { FaGithub, FaGlobe } from 'react-icons/fa';
import {
  PortfolioTemplateAboutText,
  PortfolioTemplateAboutVisuals,
  PortfolioTemplateDecoration,
  PortfolioTemplateUiUxVisuals,
} from '@/_components/projects/PortfolioTemplate';

export const portfolioTemplate = {
  id: 'portfolio-template',
  title: 'Portfolio Template',
  path: '/projects/portfolio-template',
  decoration: {
    visual: <PortfolioTemplateDecoration />,
    ariaLabel: 'Analogue photograph of a bridge',
    hideFromScreenReaders: false,
  },
  links: [
    {
      href: 'https://photo-portfolio-template.netlify.app/',
      title: 'Live Site',
      alt: 'Live site forPhotography Portfolio Template',
      icon: <FaGlobe />,
      colors: 'bg-pop stroke-bgr hover:bg-txt',
    },
    {
      href: 'https://github.com/linnkognito/Photography-Portfolio-Template',
      title: 'Github Repo',
      alt: 'Github repository for thePhotography Portfolio Template',
      icon: <FaGithub />,
      colors: 'bg-pri stroke-bgr hover:bg-txt',
    },
  ],
  description:
    'Single-page portfolio featuring a colorful customized UI & headless CMS for easy content updates. Built with Next.js, Tailwind, and Sanity.',

  images: [
    {
      src: '/photography-mockup-diagonal.png',
      alt: 'Mockup images of project: Photography Portfolio',
    },
    {
      src: '/photography-mockup-hero.png',
      alt: 'Hero image',
    },
    {
      src: '/photography-mockup-about.png',
      alt: 'About page for large screens',
    },
    {
      src: '/photography-mockup-work.png',
      alt: 'About page for medium and small screens',
    },
    {
      src: '/photography-mockup-footer.png',
      alt: 'Portfolio project grid plus preview of hover effect',
    },
  ],
  technologies: [
    { title: 'Next.js', icon: 'nextjs' },
    { title: 'React.js', icon: 'reactjs' },
    { title: 'Sanity', icon: 'sanity' },
    { title: 'Tailwind CSS', icon: 'tailwind' },
  ],
  about: {
    title: 'About',
    text: <PortfolioTemplateAboutText />,
    visuals: [
      <PortfolioTemplateAboutVisuals key='photography-shapes' />,
      <PortfolioTemplateDecoration key='photography-bridge' />,
    ],
  },
  buttonLabel: 'Details',
  uiUx: {
    title: 'UI/UX',
    text: 'The aim for the UI was to create a colorful, modern, and feminine design with a subtle retro touch. The layout is intentionally minimal - using a one-page structure & just a few bold colors & to keep the focus on the work.',

    visuals: <PortfolioTemplateUiUxVisuals />,
    colorPalette: [
      { id: 'blossom', color: 'bg-blossom' },
      { id: 'blossom-dark', color: 'bg-blossom-dark' },
      { id: 'cherry', color: 'bg-cherry' },
      { id: 'cherry-dark', color: 'bg-cherry-dark' },
      { id: 'bigarreau', color: 'bg-bigarreau' },
      { id: 'bigarreau-dark', color: 'bg-bigarreau-dark' },
    ],
  },
};
