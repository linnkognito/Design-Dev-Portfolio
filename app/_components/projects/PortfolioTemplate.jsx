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
        Here it is: a custom-built single-page portfolio template designed to
        showcase visual work.
        <br />
        The vibrant retro inspired interface features a clean layout, bold
        colors & smooth transitions - all there to create a memorable user
        experience.
      </p>
      <p>
        Built with Next.js & Tailwind CSS, the site is fully responsive &
        optimized. All content - from pictures to button labels - is managed
        through Sanity's headless CMS, making it easy to update without touching
        a single line of code.
      </p>
      <p>
        The project follows a modular structure & is set up like a monorepo,
        keeping the frontend & CMS neatly separated. It's ideal for
        photographers, designers, or digital artists looking for a fast, modern,
        & editable way to present their work online.
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
