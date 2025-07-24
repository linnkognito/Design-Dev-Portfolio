import { FaGithub } from 'react-icons/fa';

import {
  MoodTrackingAboutLogo,
  MoodTrackingAboutSmileys,
  MoodTrackingAboutText,
  MoodTrackingDecoration,
  MoodTrackingVisuals,
} from '../_components/projects/MoodTracking';

export const moodTracking = {
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
};
