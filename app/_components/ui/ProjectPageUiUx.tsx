import { UiUx } from '@/_types/project';
import Image from 'next/image';
import ColorPalette from './ColorPalette';
import Heading from '../text/Heading';

function ProjectPageUiUx({ uiUx }: { uiUx: UiUx }) {
  const { title, text, visuals, colorPalette } = uiUx;

  return (
    <section className='w-full'>
      {/* Color Palette */}
      <ColorPalette colors={colorPalette} />

      <div className='flex max-xl:flex-col'>
        {/* Insp Image */}
        <div
          role='img'
          className='relative aspect-5/4 rounded-2xl overflow-hidden mb-14 md:mb-20 xl:mb-0'
        >
          <Image
            src={visuals.src}
            alt={visuals.alt}
            fill
            className='object-cover object-center'
          />
        </div>

        <div className='w-full px-7 md:px-24'>
          {/* Heading */}
          <Heading
            tag='h2'
            className='mb-9 md:mb-16 xl:mb-12 max-md:text-center'
          >
            {title}
          </Heading>

          {/* Text */}
          <p className='text-preset-p2'>{text}</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectPageUiUx;

//  md: pr - 24;
