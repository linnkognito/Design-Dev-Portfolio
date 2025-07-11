import { UiUx } from '@/_types/project';
import ColorPalette from './ColorPalette';
import Heading from '../text/Heading';
import LazyLoadContainer from '../motion/LazyLoadContainer';

function ProjectPageUiUx({ uiUx }: { uiUx: UiUx }) {
  const { title, text, visuals, colorPalette } = uiUx;

  return (
    <LazyLoadContainer tag='section' className='w-full'>
      {/* Color Palette */}
      <ColorPalette colors={colorPalette} />

      {/* Content Wrapper */}
      <div
        className='flex max-lg:flex-col 
          lg:gap-16 xl:gap-20 lg:items-center lg:justify-center lg:pl-16 lg:pr-6'
      >
        {/* Visuals */}
        <div className='lg:order-2 w-full mb-14 md:mb-20 lg:mb-0 lg:pt-6 lg:pb-8'>
          {visuals}
        </div>

        {/* Text */}
        <div className='w-full px-7 md:px-24 lg:pt-12 lg:pb-16 lg:px-0'>
          <Heading
            tag='h2'
            className='mb-9 md:mb-16 lg:mb-12 max-md:text-center'
          >
            {title}
          </Heading>
          <p className='text-preset-p2'>{text}</p>
        </div>
      </div>
    </LazyLoadContainer>
  );
}

export default ProjectPageUiUx;
