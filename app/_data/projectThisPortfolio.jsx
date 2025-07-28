import { FaGithub, FaGlobe } from 'react-icons/fa';
import {
  ThisPortfolioAboutImage,
  ThisPortfolioAboutText,
  ThisPortfolioAboutVisuals,
  ThisPortfolioDecoration,
  ThisPortfolioUiUxVisuals,
} from '@/_components/projects/ThisPortfolio';

export const thisPortfolio = {
  id: 'this-portfolio',
  title: 'This Portfolio',
  path: '/projects/this-portfolio',
  decoration: {
    visual: <ThisPortfolioDecoration />,
    ariaLabel: 'Gradient background of this portfolio',
    hideFromScreenReaders: false,
  },
  links: [
    {
      href: 'https://linnkognito.com/',
      title: 'Live Site',
      alt: 'Link to this very portfolio',
      icon: <FaGlobe />,
      colors: 'bg-pop stroke-bgr hover:bg-txt',
    },
    {
      href: 'https://github.com/linnkognito/Design-Dev-Portfolio',
      title: 'Github Repo',
      alt: 'Link to the Github repository for this portfolio',
      icon: <FaGithub />,
      colors: 'bg-pri stroke-bgr hover:bg-txt',
    },
  ],
  description:
    "The portfolio your are currently browsing is the product of a lot of research, trial & error, UI contemplation & hyperfocus. It represents my growth as both a designer & developer, & nothing you see here is by chance. I'd love for you to know more about it.",
  projectCardImage: {
    src: '/linnkognito-projectpage-gallery.png',
    alt: 'Figma layout: Project page gallery',
  },
  images: [
    {
      src: '/linnkognito-v3.png',
      alt: 'Hero section of this portfolio',
    },
    {
      src: '/linnkognito-projectpage-gallery.png',
      alt: `Figma layout: Project page gallery`,
    },
    {
      src: '/linnkognito-projectcard.png',
      alt: 'Figma layout: Project card',
    },
    {
      src: '/linnkognito-v2.png',
      alt: 'Home page design for version 2 of my dev portfolio',
    },
    {
      src: '/linnkognito-v1.png',
      alt: 'Home page design for version 1 of my dev portfolio',
    },
  ],
  technologies: [
    { title: 'Next.js', icon: 'nextjs' },
    { title: 'React.js', icon: 'reactjs' },
    { title: 'Tailwind CSS', icon: 'tailwind' },
    { title: 'TypeScript', icon: 'typescript' },
  ],
  about: {
    title: 'About',
    text: <ThisPortfolioAboutText />,
    visuals: [
      <ThisPortfolioAboutImage key='this-portfolio-workspace' />,
      <ThisPortfolioAboutVisuals key='this-portfolio-icons' />,
    ],
  },
  uiUx: {
    title: 'UI/UX',
    text: 'I scaled down the UI to make it as simple & focused as possible. This minimalist approach carries over to the UX as well, where I wanted things to be straightforward & streamlined. I followed familiar patterns & conventions to help users understand where things are & why they’re there. Interactions are encouraged through hover effects, animations & layout choices.',

    visuals: <ThisPortfolioUiUxVisuals />,
    colorPalette: [
      { id: 'pop', color: 'bg-pop' },
      { id: 'pri-light', color: 'bg-pri-light' },
      { id: 'pri', color: 'bg-pri' },
      { id: 'sec', color: 'bg-sec' },
    ],
  },
  challenges: [
    {
      id: 'challange-1',
      title: 'Creative process',
      icon: '/icons/icon-api.svg',
      description:
        'Staying inspired & creating something both personal & user-friendly',
    },
    {
      id: 'challange-2',
      title: 'Balanced UI',
      icon: '/icons/icon-3shapes.svg',
      description:
        'Keeping the design futuristic while avoiding bloating the UI',
    },
    {
      id: 'challange-3',
      title: 'Planning',
      icon: '/icons/icon-halfwave.svg',
      description: 'Allowing myself adequate planning time',
    },
    {
      id: 'challange-4',
      title: 'SSR',
      icon: '/icons/icon-layout.svg',
      description: 'Keeping the site as SSR-friendly as possible',
    },
  ],
  outcome: [
    {
      id: 'outcome-1',
      title: 'Purpose',
      icon: '/icons/icon-3shapes-blue.svg',
      description:
        'Spending time on the “why” behind my design choices helped me craft a portfolio that feels intentional, cohesive across all screen sizes, & true to my own aesthetic preferences.',
    },
    {
      id: 'outcome-2',
      title: 'Simplified design',
      icon: '/icons/icon-a11y.svg',
      description:
        'I simplified, then simplified some more. Focusing on well-crafted details, & letting them speak for themselves, ended up being more effective than my previous over-complicated designs.',
    },
    {
      id: 'outcome-3',
      title: 'Planning phase',
      icon: '/icons/icon-2halfcircles.svg',
      description:
        'Planning properly made the build smoother, faster & kept me (mostly) sane.',
    },
    {
      id: 'outcome-4',
      title: 'Custom API',
      icon: '/icons/icon-apicall.svg',
      description:
        'Used what I know about how Next.js works under the hood to keep things SSR where I could — good practice, even on a small build like this one.',
    },
  ],
  reflection: {
    description: [
      'Building something that represents me visually & technically has been incredibly fun & surprisingly challenging. I approached every detail with care & intention, & I hope it shows.',
      'I learned (again) that less is more, & saved a lot of time by applying my project planning experience from previous roles.',
      'This project helped me improve my UI/UX skills, & taught me how to professionally approach design decisions for greater visual storytelling.',
    ],
  },
  buttonLabel: 'Details',
};
