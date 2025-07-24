import { FaGithub, FaGlobe } from 'react-icons/fa';
import {
  MorningstarAbout100,
  MorningstarAboutDetails,
  MorningstarDecoration,
  MorningstarAboutText,
  MorningstarVisuals,
} from '../_components/projects/Morningstar';
import {
  MoodTrackingAboutLogo,
  MoodTrackingAboutSmileys,
  MoodTrackingAboutText,
  MoodTrackingDecoration,
  MoodTrackingVisuals,
} from '../_components/projects/MoodTracking';
import {
  PortfolioTemplateAboutText,
  PortfolioTemplateAboutVisuals,
  PortfolioTemplateDecoration,
  PortfolioTemplateUiUxVisuals,
} from '@/_components/projects/PortfolioTemplate';

export const projects = [
  // Morningstar ///////////////////////
  {
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
        href: 'https://github.com/linnkognito/',
        title: 'Github Repo',
        alt: 'Link to the Github repository for Morningstar',
        icon: <FaGithub />,
        colors: 'bg-pri stroke-bgr hover:bg-txt',
      },
    ],
    description:
      'Full-stack web app built with Next.js, Tailwind, and MongoDB. Custom-designed UI with dynamic API integration, responsive layouts & a perfect Lighthouse score. I handled the entire frontend design & development.',

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
  },

  // Mood Tracking ///////////////////////
  {
    id: 'mood-tracking',
    title: 'Mood Tracking',
    path: '/projects/mood-tracking',
    decoration: {
      visual: <MoodTrackingDecoration />,
      ariaLabel: 'Color palette of Mood Tracking project',
      hideFromScreenReaders: false,
    },
    links: [
      {
        href: 'https://github.com/linnkognito/Mood-Tracking',
        title: 'Github Repo',
        alt: 'Link to the Github repository for Mood Tracking',
        icon: <FaGithub />,
        colors: 'bg-pri stroke-bgr hover:bg-txt',
      },
    ],
    description:
      'This is the frontend of the collaborative Mood Tracking project, a full-stack web app that lets users track their mood, feelings, and sleep habits. Features a fully responsive design, OAuth authentication and a bunch of API calls.',

    images: [
      {
        src: '/mood-tracking-2.png',
        alt: 'Mood Tracking Dashboard with a caption saying: How are you feeling today? followed by a mood and sleep trend graph',
      },
      {
        src: '/mood-tracking-1.png',
        alt: 'Mood Tracking Dashboard with logged values, featuring a yellow happy smiley face and a graph of the mood values',
      },

      {
        src: '/mood-tracking-3.png',
        alt: 'Modal screen with form to add new mood entry',
      },

      {
        src: '/mood-tracking-4.png',
        alt: 'Login Screen for Mood Tracking',
      },
      {
        src: '/mood-tracking-5.png',
        alt: 'Mood Tracking Dashboard with logged values, featuring a violet sad smiley face and a graph of the mood values',
      },
    ],
    technologies: [
      { title: 'Next.js', icon: 'nextjs' },
      { title: 'React.js', icon: 'reactjs' },
      { title: 'Tailwind CSS', icon: 'tailwind' },
    ],
    about: {
      title: 'About',
      text: <MoodTrackingAboutText />,
      visuals: [
        <MoodTrackingAboutLogo key='mood-tracking-logo' />,
        <MoodTrackingAboutSmileys key='smileys' />,
      ],
    },
    buttonLabel: 'Details',
    features: [
      {
        id: 'feature-1',
        title: 'Figma-to-code',
        description:
          'This project has been a deep dive into precision coding - matching the Figma mockups exactly when it comes to spacing, font sizing, visual alignment, and consistent component structure. It’s helped me sharpen my attention to detail across both layout and behavior.',
        image: {
          src: '/visuals/visual-figma.svg',
          alt: 'Visual of the Figma-to-code of project: Mood Tracking',
        },
      },
      {
        id: 'feature-2',
        title: 'Accessible',
        description:
          'From form modals to dashboard cards, every interactive element is built with semantic HTML and designed to be keyboard and screen reader accessible. Focus states, button structure, and flow logic follow a11y-first principles from the start.',
        image: {
          src: '/visuals/visual-a11y.svg',
          alt: 'Visual of the accessible of project: Mood Tracking',
        },
      },
      {
        id: 'feature-3',
        title: 'Flexible code',
        description:
          'Since I’m collaborating with a backend developer, I’ve kept the frontend modular and maintainable. Pages and components are organized for clear separation of concerns, and styling is handled entirely with Tailwind to keep the codebase lean and scalable.',
        image: {
          src: '/visuals/visual-modular.svg',
          alt: 'Visual of the flexible code of project: Mood Tracking',
        },
      },
    ],
    uiUx: {
      title: 'UI/UX',
      text: 'The UI, designed by dev Cameron from a detailed Figma design, is pixel-perfect and responsive across breakpoints. The layout includes a dashboard, modal flows, and form interactions, all made with accessible, semantic HTML and responsive Tailwind utilities. Components are cleanly structured and reusable, making collaboration with a separate backend smooth and scalable.',

      visuals: <MoodTrackingVisuals />,
      colorPalette: [
        { id: 'red', color: 'bg-mt-red' },
        { id: 'amber', color: 'bg-mt-amber' },
        { id: 'green', color: 'bg-mt-green' },
        { id: 'blue', color: 'bg-mt-blue' },
        { id: 'indigo', color: 'bg-mt-indigo' },
      ],
    },
  },

  // Portfolio Template  ////////////////////
  {
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
        alt: 'Link to the live site for the Photography Portfolio Template',
        icon: <FaGlobe />,
        colors: 'bg-pop stroke-bgr hover:bg-txt',
      },
      {
        href: 'https://github.com/linnkognito/Photography-Portfolio-Template',
        title: 'Github Repo',
        alt: 'Link to the Github repository for thePhotography Portfolio Template',
        icon: <FaGithub />,
        colors: 'bg-pri stroke-bgr hover:bg-txt',
      },
    ],
    description:
      'Single-page portfolio featuring a colorful customized UI & headless CMS for easy content updates. Built with React, Tailwind, and Sanity.',

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
      text: 'The aim for the UI was to create a colorful, modern, and feminine design with a subtle retro touch. The layout is intentionally minimal—using just a few bold colors and a straightforward one-page structure to keep the focus on the work.',

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
  },
];
