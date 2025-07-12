'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

function ProjectCardImages({ image, decoration }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='flex lg:flex-col gap-4 md:gap-6 w-full max-w-full lg:min-w-[350px] lg:max-w-[400px] h-fit max-lg:mb-9'>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          srHeading='Project image'
        >
          <figure className='relative aspect-4/3 w-full h-auto rounded-2xl overflow-hidden'>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className='object-cover object-center'
            />
          </figure>
        </Modal>
      ) : (
        <figure className='order-1 lg:order-2 aspect-4/3 w-full h-full rounded-2xl overflow-hidden'>
          <div
            role='button'
            tabIndex={0}
            aria-label='Open project image in modal'
            title='Open project image in modal'
            className='relative w-full h-full cursor-zoom-in'
            onClick={() => setIsOpen(true)}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className='object-cover object-center'
            />
          </div>
        </figure>
      )}

      {decoration.hideFromScreenReaders ? (
        <div aria-hidden='true'>{decoration.visual}</div>
      ) : (
        <div
          role='img'
          aria-label={decoration.ariaLabel}
          className={`relative lg:aspect-16/9 
              order-2 lg:order-1
              w-1/6 lg:w-full h-auto
              rounded-2xl lg:rounded-tl-[999px] 
              overflow-hidden
              `}
        >
          {decoration.visual}
        </div>
      )}
    </section>
  );
}

export default ProjectCardImages;
