'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import useDismiss from '../../_hooks/useDismiss';
import useDisableBackgroundScroll from '../../_hooks/useDisableBackgroundScroll';
import ButtonIcon from '../buttons/ButtonIcon';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  srHeading?: string;
};

function Modal({ children, isOpen, onClose, srHeading }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useDisableBackgroundScroll(isOpen);
  useDismiss(modalRef, isOpen, onClose);

  const modalVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
        bounce: 0.4,
      },
    },
    exit: {
      scale: 0.85,
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeIn' },
    },
  };

  return (
    <section
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      className='fixed inset-0 w-screen h-screen 
      px-4 py-24
      sm:px-8 
      md:px-9 md:pt-12 
      lg:px-20
      xl:px-24 xl:pt-16
      bg-bgr/80 overflow-y-auto overflow-x-hidden z-[1000]'
    >
      <h2 id='modal-title' className='sr-only'>
        {srHeading}
      </h2>
      <motion.div
        ref={modalRef}
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        style={{
          willChange: 'transform, opacity',
          transformPerspective: 1000,
        }}
        className='relative flex flex-col items-center justify-center w-9/10 max-w-[1440px] max-h-full pt-18 mx-auto rounded-2xl'
      >
        <ButtonIcon
          options={{ ariaLabel: 'Close modal' }}
          className='absolute top-4 right-0'
          onClick={onClose}
        >
          <XMarkIcon className='w-8 h-8 stroke-bgr' />
        </ButtonIcon>

        {children}
      </motion.div>
    </section>
  );
}

export default Modal;
