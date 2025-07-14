'use client';

import { motion } from 'framer-motion';

interface SlideVisibleBottomProps {
  children: React.ReactNode;
  className?: string;
}

function SlideVisibleBottom({ children, className }: SlideVisibleBottomProps) {
  const slideVisibleBottomVariants = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={slideVisibleBottomVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export default SlideVisibleBottom;
