import { FaGithub, FaGlobe } from 'react-icons/fa';
import { TbRouteAltRight } from 'react-icons/tb';
import {
  MorningstarAbout100,
  MorningstarAboutDetails,
  MorningstarDecoration,
  MorningstarAboutText,
  MorningstarVisuals,
} from '../_components/projects/Morningstar';

function MoodTrackingDecoration() {
  const base =
    'lg:w-1/5 h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-[scale,opacity] duration-400 ease-in-out will-change-[scale,opacity]';

  return (
    <div className='group flex flex-col lg:flex-row gap-2 lg:gap-4 w-full h-full cursor-crosshair'>
      <div className={`${base} bg-mt-red group-hover:delay-0`} />
      <div className={`${base} bg-mt-amber group-hover:delay-50`} />
      <div className={`${base} bg-mt-green group-hover:delay-100`} />
      <div className={`${base} bg-mt-blue group-hover:delay-150`} />
      <div className={`${base} bg-mt-indigo group-hover:delay-200`} />
    </div>
  );
}

export const projects = [
  {
    id: 'morningstar',
    title: 'Morningstar',
    path: '/projects/morningstar',
    image: {
      src: '/morningstar-mockup.png',
      alt: 'Morningstar',
    },
    decoration: {
      visual: <MorningstarDecoration />,
      ariaLabel:
        'Woman in bold streetwear representing the Morningstar fashion brand',
      hideFromScreenReaders: false,
    },
    description:
      'Responsive Next.js frontend for a fashion e-commerce app. Features include dynamic filtering, custom API integration and a vibrant UI built with Tailwind. Designed for real-world readiness and smooth performance across devices.',
    about: {
      title: 'About',
      text: <MorningstarAboutText />,
      visuals: [<MorningstarAbout100 />, <MorningstarAboutDetails />],
    },
    uiUx: {
      title: 'UI/UX',
      text: 'Built with utility-first Tailwind classes for quick styling and consistency. The layout is fully responsive and scales smoothly from mobile to widescreen. I also focused on creating seamless interaction design — making sure users can access key content and actions within one or two clicks, wherever they are, for an experience that feels natural and effortless.',
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
    technologies: [
      { title: 'React.js', icon: 'reactjs' },
      { title: 'Node.js', icon: 'nodejs' },
      { title: 'Tailwind CSS', icon: 'tailwind' },
      { title: 'TypeScript', icon: 'typescript' },
    ],
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
    features: [
      {
        id: 'dynamic-routing',
        title: 'Dynamic Routing',
        description:
          'Built with React Router, the app uses nested routes and dynamic URL parameters to handle product categories and item detail pages. This prevents full page reloads, in order to create a seamless user experience.',
        image: (
          <TbRouteAltRight className='w-[200px] h-[200px] stroke-pop stroke-1' />
        ),
      },
      {
        id: 'state-management',
        title: 'State Management',
        description:
          'I knew I wanted to keep product and cart logic centralized with global state. I used Redux Toolkit to manage global state for the products, cart, filters and UI controls. Async logic (like API fetching) is handled with thunks.',
        image: {
          src: '/morningstar-2.png',
          alt: 'Products page details - menus and hover effects',
        },
      },
      {
        id: 'custom-api',
        title: 'Custom API',
        description:
          'Powered by Express and MongoDB, I built a custom REST API to serve product data. The API supports filtering, querying by category or type, and is designed to mirror the structure of a real-world backend.',
        image: {
          src: '/morningstar-3.png',
          alt: 'Home page for small screens and dropdown menu',
        },
      },
    ],
    buttonLabel: 'Details',
  },
  {
    id: 'mood-tracking',
    title: 'Mood Tracking',
    path: '/projects/mood-tracking',
    decoration: {
      visual: <MoodTrackingDecoration />,
      ariaLabel: 'Color palette of Mood Tracking project',
      hideFromScreenReaders: false,
    },
    description:
      'This is the frontend of the collaborative Mood Tracking project, a full-stack web app that lets users track their mood, feelings, and sleep habits. It presents the data in a clean, easy-to-understand dashboard.',
    technologies: [
      { title: 'Next.js', icon: 'nextjs' },
      { title: 'Tailwind CSS', icon: 'tailwind' },
    ],
    image: {
      src: '/mood-tracking-1.png',
      alt: 'Dashboard of project: Mood Tracking',
    },
    images: [
      {
        src: '/mood-tracking-2.png',
        alt: 'Dashboard of project: Mood Tracking',
      },
      {
        src: '/mood-tracking-3.png',
        alt: 'Dashboards for responsive design of project: Mood Tracking',
      },
      {
        src: '/mood-tracking-4.png',
        alt: 'Modal screen with form to add new mood entry of project: Mood Tracking',
      },
      {
        src: '/mood-tracking-ui-2.png',
        alt: 'Color theme of project: Mood Tracking, from Figma Design',
      },
      {
        src: '/mood-tracking-ui-3.png',
        alt: 'Icons and emojis of project: Mood Tracking, from Figma Design',
      },
    ],
    links: [
      {
        href: 'https://github.com/linnkognito/Mood-Tracking',
        title: 'Github Repo',
        alt: 'Link to the Github repository for Mood Tracking',
        icon: <FaGithub />,
        colors: 'bg-pri stroke-bgr hover:bg-txt',
      },
    ],
    buttonLabel: 'Details',
  },
];
