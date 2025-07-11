import { About } from '@/_types/project';
import Image from 'next/image';
import LazyLoadContainer from '../motion/LazyLoadContainer';

function ProjectPageAbout({ about }: { about: About }) {
  return (
    <LazyLoadContainer
      tag='section'
      className='
    flex max-lg:flex-col gap-14 md:gap-20
    lg:items-center lg:justify-center
    w-full 
    lg:grid lg:grid-cols-[3fr_4fr]
    
    '
    >
      {/* Images */}
      <div
        className='
      grid grid-cols-[5fr_2fr] gap-4 w-full
      lg:grid-cols-1 lg:grid-rows-[2fr_5fr]
      lg:min-h-[400px]'
      >
        <div className='lg:order-2 relative aspect-4/3 w-full h-full rounded-2xl overflow-hidden'>
          <Image
            src={about.images[0].src}
            alt={about.images[0].alt}
            fill
            className='object-cover object-center'
          />
        </div>
        <div className='lg:order-1 relative rounded-2xl  overflow-hidden'>
          <Image
            src={about.images[1].src}
            alt={about.images[1].alt}
            fill
            className='object-cover object-center lg:object-top'
          />
        </div>
      </div>

      <p className='text-preset-p1 lg:w-full lg:min-w-[470px] lg:max-w-[717px] pl-7 pr-6 md:px-16 lg:py-5 lg:pl-0 lg:pr-10'>
        {about.text}
      </p>
    </LazyLoadContainer>
  );
}

export default ProjectPageAbout;
