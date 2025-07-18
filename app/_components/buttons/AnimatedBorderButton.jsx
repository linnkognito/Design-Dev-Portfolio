'use client';

import { motion, useTime, useTransform } from 'framer-motion';
import ButtonCTA from './ButtonCTA';

function AnimatedBorderButton() {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, var(--color-pop), var(--color-pri),var(--color-bgr))`;
  });

  const scrollToProjects = () => {
    const el = document.getElementById('project-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      role='button'
      className='relative z-0 w-1/2 min-w-fit max-w-[670px] mb-10'
    >
      <ButtonCTA
        variant='right'
        color='none'
        ariaLabel='View my work'
        className='relative w-full py-2 text-lg font-semibold bg-bgr hover:bg-gray-900 z-[100]'
        onClick={() => {
          console.log('clicked');
          scrollToProjects();
        }}
      >
        Discover
      </ButtonCTA>
      <motion.div
        className='absolute -inset-[1px] rounded-tl-full rounded-br-full z-0'
        style={{
          background: rotatingBg,
        }}
      />
    </div>
  );
}

export default AnimatedBorderButton;
