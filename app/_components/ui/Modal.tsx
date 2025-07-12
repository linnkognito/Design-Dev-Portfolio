'use client';

import { useRef } from 'react';
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
  const modalRef = useRef();
  useDisableBackgroundScroll(isOpen);
  useDismiss(modalRef, isOpen, onClose);

  return (
    <section
      ref={modalRef}
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

      <div className='relative flex flex-col items-center justify-center w-9/10 max-w-[1440px] max-h-full pt-18 mx-auto rounded-2xl'>
        <ButtonIcon
          options={{ ariaLabel: 'Close modal' }}
          className='absolute top-4 right-0'
          onClick={onClose}
        >
          <XMarkIcon className='w-8 h-8 stroke-bgr' />
        </ButtonIcon>

        {children}
      </div>
    </section>
  );
}

export default Modal;
