'use client';

import { useState } from 'react';
import type { Images } from '@/_types/project';
import { motion } from 'framer-motion';
import Image from 'next/image';

function ProjectPageHeroGallery({ images }: { images: Images }) {
  const [featuredImage, setFeaturedImage] = useState(0);

  const otherImagesContainerVariant = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const featuredImageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <section
      className='max-md:hidden 
        flex max-lg:flex-col gap-4
        h-fit w-full
    '
    >
      {/* Featured Image */}
      <motion.div
        variants={featuredImageVariant}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='group relative aspect-4/3 
        w-full lg:max-w-6/10
        rounded-2xl overflow-hidden'
      >
        <Image
          src={images[featuredImage].src}
          alt={images[featuredImage].alt}
          fill
          priority
          className='object-center group-hover:brightness-110 group-hover:scale-105 transition-all duration-500 ease-in-out will-change-[scale,brightness]'
        />
      </motion.div>

      {/* Other Images */}
      <motion.div
        variants={otherImagesContainerVariant}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='grid grid-cols-4 lg:grid-cols-2 xl:grid-rows-2 gap-4 w-full'
      >
        {images.map(
          (image, index) =>
            index !== featuredImage && (
              <motion.div
                variants={imageVariant}
                key={image.src.split('.')[0]}
                onClick={() => setFeaturedImage(index)}
                className='group relative aspect-4/3 rounded-2xl overflow-hidden cursor-zoom-in'
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className='object-center group-hover:brightness-110 group-hover:scale-105 transition-all duration-500 ease-in-out will-change-[scale,brightness]'
                />
              </motion.div>
            )
        )}
      </motion.div>
    </section>
  );
}

export default ProjectPageHeroGallery;
