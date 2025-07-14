'use client';

import type { ColorPalette } from '@/_types/project';
import { motion } from 'framer-motion';

function ColorPalette({ colors }: { colors: ColorPalette }) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const colorVariants = {
    hidden: { scaleY: 0, y: -10 },
    show: {
      scaleY: 1,
      y: 0,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className={`flex max-sm:flex-wrap gap-3 mb-12 lg:mb-14`}
    >
      {colors.map((color) => (
        <motion.div
          key={color.id}
          variants={colorVariants}
          className={`grow max-sm:min-w-[110px] h-[50px] md:h-20 lg:h-16 w-auto rounded-[8px] ${color.color}`}
        />
      ))}
    </motion.div>
  );
}

export default ColorPalette;
