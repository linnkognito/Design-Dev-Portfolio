import Image from 'next/image';
import { FaGithub, FaGlobe } from 'react-icons/fa';

function MorningstarDecoration() {
  return (
    <Image
      src='/HER_pattern.jpg'
      fill
      className='w-full h-full object-cover object-center lg:object-[50%_32%] hover:scale-105 will-change-transform transition-transform ease-in-out duration-500 cursor-crosshair'
    />
  );
}

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
    decoration: <MorningstarDecoration />,
    description:
      'Responsive React frontend with API integration for live product data. Colorful layout, dynamic filtering, and real-world-ready design.',
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
      { src: '/morningstar-1.png', alt: 'Products page' },
      {
        src: '/morningstar-2.png',
        alt: 'Products page details - menus and hover effects',
      },
      {
        src: '/morningstar-3.png',
        alt: 'Home page for small screens and dropdown menu',
      },
      {
        src: '/morningstar-4.png',
        alt: 'Product page',
      },
    ],
    buttonLabel: 'Details',
  },
  {
    id: 'mood-tracking',
    title: 'Mood Tracking',
    path: '/projects/mood-tracking',
    decoration: <MoodTrackingDecoration />,
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
