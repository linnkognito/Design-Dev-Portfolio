'use client';

import type { Technology } from '@/_types/project';
import { motion } from 'framer-motion';
import TechIcon from './TechIcon';

function ProjectPageTech({ technologies }: { technologies: Technology[] }) {
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const icon = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='flex max-xs:justify-between gap-7 xs:gap-8 w-fit pt-14 md:pt-16 lg:pl-4 max-lg:mx-auto'
    >
      {technologies?.map((tech: Technology) => (
        <motion.div variants={icon} key={tech.title}>
          <TechIcon tech={tech} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectPageTech;
