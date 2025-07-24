import Image from 'next/image';
import IconCube from '../ui/IconCube';

export function ThisPortfolioDecoration() {
  return <div className='w-full h-full bg-gradient-to-r from-pri to-bgr' />;
}
export function ThisPortfolioAboutImage() {
  return (
    <div
      role='img'
      className='relative h-full w-full aspect-4/3 border-2 border-pop rounded-2xl overflow-hidden'
    >
      <Image
        src='/linnkognito-workspace.png'
        alt='Workspace of the designer'
        fill
        className='object-cover object-center'
      />
    </div>
  );
}
export function ThisPortfolioAboutText() {
  return (
    <>
      <p>
        This portfolio has gone through many iterations - each one marking a
        milestone in my design/dev journey. Through reflection, experimentation
        & a lot of trial & error, I haven’t just built a site, but also shaped
        my personal brand.
        <br />I have no doubt that this portfolio will continue to evolve, but
        I'm proud of what I've created so far.
      </p>

      <p>
        I once again choose Next.js & Tailwind CSS for this project. Next.js for
        its performance & Tailwind for its ability to greatly increase my
        workflow speed. Animations are created using Framer Motion.
      </p>
    </>
  );
}
export function ThisPortfolioAboutVisuals() {
  return (
    <div className='grid max-lg:grid-rows-4 lg:grid lg:grid-cols-4 items-center justify-center gap-4 h-full p-4 border-2 border-pri rounded-2xl overflow-hidden'>
      <IconCube
        icon='/icons/icon-3shapes-blue.svg'
        bgColor='bg-txt'
        className='w-full h-auto aspect-square'
      />
      <IconCube
        icon='/icons/icon-a11y.svg'
        bgColor='bg-pop'
        className='w-full h-auto aspect-square'
      />
      <IconCube
        icon='/icons/icon-2halfcircles.svg'
        bgColor='bg-pri'
        className='w-full h-auto aspect-square'
      />
      <IconCube
        icon='/icons/icon-apicall.svg'
        bgColor='bg-sec'
        className='w-full h-auto aspect-square'
      />
    </div>
  );
}
export function ThisPortfolioUiUxVisuals() {
  return (
    <div
      role='img'
      className='relative aspect-4/3 h-full w-full border-2 border-pop rounded-2xl overflow-hidden'
    >
      <Image
        src='/linnkognito-layout.png'
        alt='Figma layout of this portfolio'
        fill
        className='object-cover object-center'
      />
    </div>
  );
}
