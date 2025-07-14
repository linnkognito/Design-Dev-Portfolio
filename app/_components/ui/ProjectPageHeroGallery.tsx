'use client';

import { useMemo, useState } from 'react';
import type { Images } from '@/_types/project';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

function ProjectPageHeroGallery({ images }: { images: Images }) {
  const [featuredImage, setFeaturedImage] = useState(images[0]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };
  const thumbnailVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  function handleImageClick(index: number) {
    setFeaturedImage(images[index]);
  }

  return (
    <section className='max-md:hidden flex max-lg:flex-col gap-4 h-fit w-full'>
      {/* Featured Image */}
      <AnimatePresence mode='wait' initial={true}>
        <motion.div
          key={featuredImage.src}
          initial={{
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.6 },
          }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
          className='group relative aspect-4/3 w-full lg:max-w-6/10 rounded-2xl overflow-hidden'
        >
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            priority
            className='object-cover object-center group-hover:brightness-110 group-hover:scale-105 transition-all duration-500 ease-in-out will-change-[scale,brightness]'
          />
        </motion.div>
      </AnimatePresence>

      {/* Other Images */}

      <motion.div
        key='gallery'
        variants={containerVariants}
        initial='hidden'
        animate='show'
        className='grid grid-cols-4 lg:grid-cols-2 xl:grid-rows-2 gap-4 w-full'
      >
        {images.map((image, index) => {
          if (image.src === featuredImage.src) return null;

          return (
            <motion.div
              key={`${image.src}-${index}-${featuredImage.src}`}
              variants={thumbnailVariants}
              onClick={() => handleImageClick(index)}
              className='group relative aspect-4/3 rounded-2xl overflow-hidden cursor-zoom-in'
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className='object-cover object-center group-hover:brightness-110 group-hover:scale-105 transition-all duration-500 ease-in-out will-change-[scale,brightness]'
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default ProjectPageHeroGallery;
