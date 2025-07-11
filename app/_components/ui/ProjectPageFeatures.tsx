'use client';

import { useState } from 'react';
import { Feature } from '@/_types/project';
import Heading from '../text/Heading';
// import Image from 'next/image';
import SlideshowBar from './SlideshowBar';
import ButtonPrevNextChevron from '../buttons/ButtonPrevNextChevron';
import LazyLoadContainer from '../motion/LazyLoadContainer';

function ProjectPageFeatures({ features }: { features: Feature[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const cur = features[activeSlide];
  const numFeatures = features.length;

  return (
    <LazyLoadContainer
      tag='section'
      className='flex flex-col items-center justify-center lg:gap-20 w-full md:px-10 lg:px-0'
    >
      <div
        className='
          flex flex-col items-center justify-center
          lg:grid lg:grid-cols-[2fr_3fr] lg:place-items-center
          xl:grid-cols-[auto_3fr_2fr_auto]
          lg:gap-14 w-full'
      >
        <ButtonPrevNextChevron variant='prev' />

        <div
          className='
            relative aspect-auto
            grow flex items-center justify-center
            w-full
            h-full min-h-[363px]
            max-lg:mx-auto
            mb-12 md:mb-14 lg:mb-0
            rounded-2xl overflow-hidden
            border-2 border-pri
        '
        >
          {/* <Image
          src={cur.image.src}
          alt={cur.image.alt}
          fill
          className='object-cover object-center'
          /> */}
        </div>

        {/* Text */}
        <div className='flex flex-col items-center justify-center gap-8 w-full lg:w-[5/10] lg:min-w-[523px] h-fit max-lg:mb-16 lg:pt-4 lg:pr-8'>
          <Heading tag='h3' color='pop' className='w-full max-lg:text-center'>
            {cur.title}
          </Heading>

          <div className='h-fit max-lg:px-5'>
            {typeof cur.description === 'string' ? (
              <p className='text-preset-p3 max-lg:px-5'>{cur.description}</p>
            ) : (
              cur.description
            )}
          </div>
        </div>

        <ButtonPrevNextChevron variant='next' />
      </div>

      <SlideshowBar quantity={numFeatures} activeSlide={activeSlide} />
    </LazyLoadContainer>
  );
}

export default ProjectPageFeatures;
