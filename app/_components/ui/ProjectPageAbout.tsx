'use client';

import { About } from '@/_types/project';
import { motion } from 'framer-motion';
import SlideVisibleBottom from '@/_animations/SlideVisibleBottom';

function ProjectPageAbout({ about }: { about: About }) {
  const imageSmallVariant = {
    hidden: { opacity: 0, scaleX: 0.8, x: 100, transformOrigin: 'right' },
    show: {
      opacity: 1,
      scaleX: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
  const imageLargeVariant = {
    hidden: { opacity: 0, scaleX: 0, x: 100, transformOrigin: 'left' },
    show: {
      opacity: 1,
      scaleX: 1,
      x: 0,
      transition: { delay: 0.2, duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className='flex max-lg:flex-col gap-14 md:gap-20 lg:items-center lg:justify-center w-full lg:grid lg:grid-cols-[3fr_4fr]'>
      {/* Images */}
      <div
        className='
          grid grid-cols-[5fr_2fr] grid-rows-1 gap-4 w-full
          lg:grid-cols-1 lg:grid-rows-[2fr_5fr]
          lg:min-h-[400px] max-h-[492px]
          '
      >
        <motion.div
          variants={imageLargeVariant}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.8 }}
          className='order-1 lg:order-2 relative aspect-4/3 w-full h-full rounded-2xl overflow-hidden border-2'
        >
          {about.visuals[0]}
        </motion.div>

        <motion.div
          variants={imageSmallVariant}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.5 }}
          className='order-2 lg:order-1 relative lg:w-full lg:h-full rounded-2xl overflow-hidden'
        >
          {about.visuals[1]}
        </motion.div>
      </div>

      <SlideVisibleBottom className='w-full'>
        <div className='flex flex-col gap-4 text-preset-p1 lg:w-full lg:min-w-[470px] lg:max-w-[717px] pl-7 pr-6 md:px-16 lg:py-5 lg:pl-0 lg:pr-10'>
          {about.text}
        </div>
      </SlideVisibleBottom>
    </section>
  );
}

export default ProjectPageAbout;
