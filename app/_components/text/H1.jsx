import Image from 'next/image';

function H1() {
  return (
    <h1
      id='index-heading'
      className='flex flex-col w-fit pt-1/3 font-semibold tracking-wide uppercase'
    >
      <span className='text-5xl md:text-7xl lg:text-8xl leading-none'>
        I&apos;m Linn
      </span>

      <div className='w-full text-6xl md:text-8xl lg:text-9xl text-pop leading-none inline-block'>
        Design
        <span className='text-txt'>/</span>
        <span className='text-pri'>Dev</span>
      </div>

      <span className='pt-1 pr-4 text-5xl md:text-7xl lg:text-8xl leading-none'>
        Hybrid
      </span>
    </h1>
  );
}

export default H1;
