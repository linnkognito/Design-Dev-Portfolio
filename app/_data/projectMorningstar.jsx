import { FaGithub, FaGlobe } from 'react-icons/fa';
import {
  MorningstarAbout100,
  MorningstarAboutDetails,
  MorningstarDecoration,
  MorningstarAboutText,
  MorningstarVisuals,
} from '@/_components/projects/Morningstar';

export const morningstar = {
  id: 'morningstar',
  title: 'Morningstar',
  path: '/projects/morningstar',
  decoration: {
    visual: <MorningstarDecoration />,
    ariaLabel:
      'Woman in bold streetwear representing the Morningstar fashion brand',
    hideFromScreenReaders: false,
  },
  links: [
    {
      href: 'https://shop-morningstar.netlify.app/',
      title: 'Live Site',
      alt: 'Link to the live site for Morningstar',
      icon: <FaGlobe />,
      colors: 'bg-pop stroke-bgr hover:bg-txt',
    },
    {
      href: 'https://github.com/linnkognito/Morningstar',
      title: 'Github Repo',
      alt: 'Link to the Github repository for Morningstar',
      icon: <FaGithub />,
      colors: 'bg-pri stroke-bgr hover:bg-txt',
    },
  ],
  description:
    'Full-stack web app built with Next.js, Tailwind & MongoDB. Featuring a custom-designed & fully responsive UI with dynamic API integration & a perfect Lighthouse score to go with it. I handled the entire frontend design & development portion.',

  images: [
    {
      src: '/morningstar-mockup.png',
      alt: 'Mockup of desktop view for Morningstar, showcasing the home page, products pages, and the page for a single product.',
    },
    {
      src: '/morningstar-mobile.png',
      alt: `Mockup of mobile view for Morningstar's home page, including the main navigation dropdown menu and its hover effects.`,
    },
    {
      src: '/morningstar-1.png',
      alt: "Screenshot of the Women's products section of Morningstar. The page is light with pastel colored accents and gradients.",
    },
    {
      src: '/morningstar-4.png',
      alt: 'Screenshot of the single product page for Morningstar, the layout featured a large modeled product image to the left, and description and color, size and quantity selection to the right.',
    },
    {
      src: '/morningstar-2.png',
      alt: 'Different types of menus of the products page, including the dropdown menu for sorting options, and the product card menu for quick selection and adding to cart.',
    },
  ],
  technologies: [
    { title: 'Next.js', icon: 'nextjs' },
    { title: 'React.js', icon: 'reactjs' },
    { title: 'Node.js', icon: 'nodejs' },
    { title: 'Tailwind CSS', icon: 'tailwind' },
    { title: 'TypeScript', icon: 'typescript' },
  ],
  about: {
    title: 'About',
    text: <MorningstarAboutText />,
    visuals: [
      <MorningstarAbout100 key='100' />,
      <MorningstarAboutDetails key='details' />,
    ],
  },
  uiUx: {
    title: 'UI/UX',
    text: 'Navigation is designed to be quick & easy. Users can reach key content & actions within one or two clicks from anywhere on the site. The UI is playful with a style that feels both modern & a little nostalgic - something that works well across a wide age range.',

    visuals: <MorningstarVisuals />,
    colorPalette: [
      { id: 'zest', color: 'bg-zest' },
      { id: 'ember', color: 'bg-ember' },
      { id: 'aura', color: 'bg-aura' },
      { id: 'mint', color: 'bg-mint' },
      { id: 'pearl', color: 'bg-pearl' },
      { id: 'sea', color: 'bg-sea' },
    ],
  },
  challenges: [
    {
      id: 'challange-1',
      title: 'REST API',
      icon: '/icons/icon-api.svg',
      description: 'Keep product data dynamic and always up to date',
    },
    {
      id: 'challange-2',
      title: 'Global state',
      icon: '/icons/icon-3shapes.svg',
      description: 'Manage global state for cart, wishlist, and filtering',
    },
    {
      id: 'challange-3',
      title: 'Dynamic data',
      icon: '/icons/icon-halfwave.svg',
      description: 'Make the app accessible for all users',
    },
    {
      id: 'challange-4',
      title: 'Lighthouse score',
      icon: '/icons/icon-layout.svg',
      description: 'Hit a perfect 100/100 Lighthouse score',
    },
  ],
  outcome: [
    {
      id: 'outcome-1',
      title: 'Custom API',
      icon: '/icons/icon-3shapes-blue.svg',
      description:
        'Built and connected a custom REST API to serve live product data',
    },
    {
      id: 'outcome-2',
      title: 'Global state',
      icon: '/icons/icon-a11y.svg',
      description:
        'Managed global state with Redux slices (cart, wishlist, filters)',
    },
    {
      id: 'outcome-3',
      title: 'Lighthouse score',
      icon: '/icons/icon-2halfcircles.svg',
      description:
        'Wrote semantic HTML, added ARIA labels & created reusable A11y-friendly components',
    },
    {
      id: 'outcome-4',
      title: 'Custom API',
      icon: '/icons/icon-apicall.svg',
      description:
        'Focused on performance and best practices & landed a 100/100 Lighthouse score',
    },
  ],
  reflection: {
    image: '/morningstar-2.png',
    description: [
      'This project was technically complete months ago, but I revisited it with fresh eyes to polish the layout & clean up the code. I made the structure more maintainable & optimized everything for performance & readability.',
      'I enjoyed making the navigation smooth & intuitive, so users could access key features with as few clicks as possible.',
      'Along the way, I deepened my understanding of fullstack development & gained confidence designing layout systems from scratch.',
    ],
  },
  features: [
    {
      id: 'feature-1',
      title: 'Design System',
      description:
        'I created a consistent, component-based UI using Tailwind & custom design tokens. Every part of the layout - from buttons to cards to color palette - follows a shared system to keep the app visually cohesive & easy to expand.',
      image: {
        src: '/visuals/visual-designsystem.svg',
        alt: 'Visual of the design system of project: Morningstar',
      },
    },
    {
      id: 'feature-2',
      title: 'Responsive layout',
      description:
        'The layout adapts smoothly from mobile to widescreen using utility-first classes. I paid close attention to spacing, scaling & content structure to ensure the site feels intuitive no matter the device size.',
      image: {
        src: '/visuals/visual-responsive.svg',
        alt: 'Visual of the responsive layout of project: Morningstar',
      },
    },
    {
      id: 'feature-3',
      title: 'Interactivity',
      description:
        'From dropdown menus to product hover states, every interaction was designed to feel intentional. I focused on micro-interactions & visual feedback to guide the user without distracting them.',
      image: {
        src: '/visuals/visual-interactivity.svg',
        alt: 'Visual of the interactivity of project: Morningstar',
      },
    },
    {
      id: 'feature-4',
      title: 'Filtering & Sorting',
      description:
        'I built filter and sorting features that feel fast & intuitive. Filter menus, sort dropdowns & category pages are all powered by async Redux logic & tightly integrated with the API structure.',
      image: {
        src: '/visuals/visual-filtersort.svg',
        alt: 'Visual of the filtering & sorting of project: Morningstar',
      },
    },
  ],
  buttonLabel: 'Details',
};
