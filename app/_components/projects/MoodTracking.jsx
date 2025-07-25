import { Bold } from '../text/TextStyles';
import TextLink from '../text/TextLink';
import Image from 'next/image';

export function MoodTrackingDecoration() {
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
export function MoodTrackingAboutText() {
  return (
    <>
      <p>
        Mood Tracking is a full-stack web app built in collaboration with
        backend developer{' '}
        <TextLink href='https://github.com/Cam96stanley'>Cameron</TextLink>. The
        app lets users track their mood, feelings, & sleep habits, & displays
        the data in a clear, friendly dashboard.
      </p>
      <p>
        For this project, I’m responsible for building the entire frontend based
        on a detailed Figma design. That means translating mockups into
        responsive, accessible components using Next.js & Tailwind CSS, while
        staying pixel-precise & UI-consistent across different screen sizes.
      </p>
      <p>
        <Bold>
          I'm currently in the middle of working on this project — live version
          coming soon! In the meantime, you can check out the code on{' '}
          <TextLink href='https://github.com/linnkognito/Mood-Tracking'>
            GitHub
          </TextLink>
          .
        </Bold>
      </p>
    </>
  );
}
export function MoodTrackingAboutSmileys() {
  const smileys = [
    '/visuals/very-happy.svg',
    '/visuals/happy.svg',
    '/visuals/neutral.svg',
    '/visuals/sad.svg',
    '/visuals/very-sad.svg',
  ];
  return (
    <div
      aria-hidden='true'
      className='grid grid-cols-2 grid-rows-5 place-items-center lg:flex items-center justify-center lg:justify-around gap-2 lg:gap-4 w-full h-full px-4 max-lg:py-4 bg-pri/20 rounded-2xl'
    >
      {smileys.map((smiley, index) => (
        <>
          <Image
            key={`smiley-${index}`}
            src={smiley}
            alt='Mood Tracking smiley face'
            width={200}
            height={200}
            className='w-[64px] h-auto
        max-md:w-[48px]
        max-sm:w-[40px]
        object-contain'
          />
          <Image
            key={`smiley-${index}`}
            src={smiley}
            alt='Mood Tracking smiley face'
            width={200}
            height={200}
            className='lg:hidden w-[64px] h-auto
        max-md:w-[48px]
        max-sm:w-[40px]
        object-contain'
          />
        </>
      ))}
    </div>
  );
}
export function MoodTrackingAboutLogo() {
  return (
    <div className='flex items-center justify-center w-full h-full px-10 bg-txt'>
      <Image
        src='/visuals/mt-logo.svg'
        alt='Mood Tracking logo'
        width={100}
        height={100}
        className='w-full h-auto object-contain'
      />
    </div>
  );
}
export function MoodTrackingVisuals() {
  return (
    <div role='img' className='relative aspect-4/3 rounded-2xl overflow-hidden'>
      <Image
        src='/mood-tracking-ui.png'
        alt='Morningstar'
        fill
        className='object-cover object-center'
      />
    </div>
  );
}
