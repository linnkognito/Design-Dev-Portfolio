import Image from 'next/image';

export function PortfolioTemplateDecoration() {
  return (
    <Image
      src='/photography-bridge.jpg'
      alt='Analogue photograph of a bridge'
      fill
      className='w-full h-full object-cover object-center lg:object-[50%_32%] hover-image-scale'
    />
  );
}

export function PortfolioTemplateAboutText() {
  return (
    <>
      <p>
        This photography portfolio template is a custom-built, single-page web
        app designed to showcase visual work in a clean but vibrant layout.
        Inspired by a slightly retro aesthetic, the interface combines bold
        colors, sharp typography, and smooth transitions to create a memorable
        user experience.
      </p>
      <p>
        Built with Next.js 15 and Tailwind CSS 4, the site is fully responsive
        and optimized for performance. It includes a lightweight carousel
        powered by Embla, and all content—including project data and social
        links—is managed through Sanity CMS, making it easy to update without
        touching the code.
      </p>
      <p>
        The project follows a modular structure and is set up like a monorepo,
        keeping the frontend and CMS neatly separated. It's ideal for
        photographers, designers, or digital artists looking for a fast, modern,
        and editable way to present their work online.
      </p>
    </>
  );
}

export function PortfolioTemplateAboutVisuals() {
  return (
    <div role='img' className='relative aspect-4/3 rounded-2xl overflow-hidden'>
      <Image
        src='/photography-shapes.png'
        aria-hidden='true'
        fill
        className='object-cover object-center'
      />
    </div>
  );
}

export function PortfolioTemplateUiUxVisuals() {
  return (
    <div role='img' className='relative aspect-4/3 rounded-2xl overflow-hidden'>
      <Image
        src='/photography-layout.png'
        alt='Figma Layout Design'
        fill
        className='object-cover object-center'
      />
    </div>
  );
}
