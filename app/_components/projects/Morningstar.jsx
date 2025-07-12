import Image from 'next/image';

export function MorningstarAboutText() {
  return (
    <>
      <p>
        Morningstar is a fully responsive e-commerce web app built to sharpen my
        skills in UI design and fullstack development.
      </p>

      <p>
        The app showcases a fake online clothing store, and pulls product data
        from a custom-built Express + MongoDB API.
      </p>

      <p>
        My goal was to simulate something akin to a real-world dev environment:
        from building an API and handling dynamic product filtering, to crafting
        a layout that is both expressive and responsive.
      </p>
    </>
  );
}
export function MorningstarAbout100() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-2 px-4'>
      <p className='text-heading text-pop text-[120px] xs:text-[140px] sm:text-[180px] md:text-[200px] hover-image-scale hover:-rotate-12 transition-all duration-500 ease-in-out'>
        100
      </p>
    </div>
  );
}
export function MorningstarAboutDetails() {
  return (
    <Image
      src={'/HER_pattern.jpg'}
      alt=''
      fill
      className='object-cover object-center lg:object-[20%_20%] hover-image-scale'
    />
  );
}
export function MorningstarDecoration() {
  return (
    <Image
      src='/HER_pattern.jpg'
      fill
      className='w-full h-full object-cover object-center lg:object-[50%_32%] hover-image-scale'
    />
  );
}
export function MorningstarVisuals() {
  return (
    <div role='img' className='relative aspect-4/3 rounded-2xl overflow-hidden'>
      <Image
        src='/morningstar-mockup.png'
        alt='Morningstar'
        fill
        className='object-cover object-center'
      />
    </div>
  );
}
