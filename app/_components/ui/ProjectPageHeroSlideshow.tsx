'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Images } from '@/_types/project';

function ProjectPageHeroSlideshow({ images }: { images: Images }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className='md:hidden relative aspect-4/3 w-full rounded-2xl overflow-hidden'>
      <Image
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        fill
        priority
        className='object-cover object-center'
      />
    </div>
  );
}

export default ProjectPageHeroSlideshow;
