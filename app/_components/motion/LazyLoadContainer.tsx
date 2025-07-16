'use client';

import { motion } from 'framer-motion';
import type { HTMLAttributes, ElementType, ReactNode, JSX } from 'react';

type LazyLoadContainerProps = {
  children: ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
} & HTMLAttributes<HTMLElement>;

function LazyLoadContainer({
  children,
  tag = 'div',
  className,
  ...rest
}: LazyLoadContainerProps) {
  const MotionTag = motion(tag as ElementType);

  return (
    <MotionTag
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export default LazyLoadContainer;
