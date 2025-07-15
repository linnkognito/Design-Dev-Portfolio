'use client';

import type { Images } from '@/_types/project';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SlideshowBar from './SlideshowBar';

function ProjectPageHeroSlideshow({ images }: { images: Images }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <motion.div
        className='relative flex gap-4 w-full mb-20 
      snap-x snap-mandatory scroll-smooth'
      >
        {images.map((image, index) => (
          <div
            key={`${image.src}-${currentImage}`}
            className='relative aspect-4/3 min-w-full snap-start shrink-0 rounded-2xl overflow-hidden'
          >
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              fill
              priority
              className='object-cover object-center'
            />
          </div>
        ))}
      </motion.div>

      <SlideshowBar
        quantity={images.length}
        activeSlide={currentImage}
        setActiveSlide={setCurrentImage}
      />
    </>
  );
}

export default ProjectPageHeroSlideshow;
