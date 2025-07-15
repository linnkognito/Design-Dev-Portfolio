'use client';

import type { Technology } from '@/_types/project';
import { motion } from 'framer-motion';
import TechIcon from './TechIcon';

function ProjectPageTech({ technologies }: { technologies: Technology[] }) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.12,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.15, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      aria-labelledby='technologies-heading'
      className='flex max-xs:justify-between gap-7 xs:gap-8 w-fit pt-14 md:pt-16 lg:pl-4 max-lg:mx-auto'
    >
      <h2 id='technologies-heading' className='sr-only'>
        Technologies used
      </h2>

      {technologies?.map((tech: Technology) => (
        <motion.div
          key={tech.title}
          variants={iconVariants}
          title={tech.title}
          aria-label={tech.title}
        >
          <TechIcon tech={tech} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectPageTech;
