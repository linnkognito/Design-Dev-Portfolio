'use client';

import { useState } from 'react';
import { Feature } from '@/_types/project';
import Heading from '../text/Heading';
import Image from 'next/image';
import SlideshowBar from './SlideshowBar';

function ProjectPageFeatures({ features }: { features: Feature[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const cur = features[activeSlide];
  const numFeatures = features.length;

  // function handleNext() {
  //   setSlide((index) => {
  //     if (index === numFeatures - 1) return 0;
  //     return index + 1;
  //   });
  // }
  // function handlePrev() {
  //   setSlide((index) => {
  //     if (index === 0) return numFeatures - 1;
  //     return index - 1;
  //   });
  // }

  return (
    <div>
      <div className='relative flex items-center justify-center aspect-5/3 w-full mx-auto rounded-2xl overflow-hidden border-2 border-pri mb-12'>
        {typeof cur.image === 'object' && 'src' in cur.image ? (
          <Image
            src={cur.image.src}
            alt={cur.image.alt}
            fill
            className='object-cover object-center'
          />
        ) : (
          cur.image
        )}
      </div>

      <Heading tag='h3' color='pop' className='mb-8 text-center'>
        {cur.title}
      </Heading>

      <div className='px-5 mb-14'>
        {typeof cur.description === 'string' ? (
          <p className='text-preset-p3 px-5'>{cur.description}</p>
        ) : (
          cur.description
        )}
      </div>

      {/* Slideshow bar */}
      <SlideshowBar quantity={numFeatures} activeSlide={activeSlide} />
    </div>
  );
}

export default ProjectPageFeatures;
