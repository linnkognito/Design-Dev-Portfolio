import { Reflection } from '@/_types/project';
import LazyLoadContainer from '../motion/LazyLoadContainer';
import Heading from '../text/Heading';

function ProjectPageReflection({ reflection }: { reflection: Reflection }) {
  const { image, description } = reflection;

  return (
    <LazyLoadContainer
      tag='section'
      className='flex max-lg:flex-col 
          lg:gap-16 xl:gap-20 lg:items-center lg:justify-center lg:pl-16 lg:pr-6'
    >
      {/* Visuals */}
      {/* <div className='relative order-1 lg:order-2 w-full lg:w-1/4 aspect-square mb-14 md:mb-20 lg:mb-0 lg:pt-6 lg:pb-8 border-2 border-txt rounded-2xl overflow-hidden'>
        <Image
          src={image}
          alt='Reflection image'
          fill
          className='object-center object-cover'
        />
      </div> */}

      {/* Text */}
      <div className='order-2 lg:order-1 w-full lg:w-3/4 px-7 md:px-24 lg:pt-12 lg:pb-16 lg:px-0'>
        <Heading
          tag='h2'
          color='pop'
          className='mb-9 md:mb-16 lg:mb-12 text-center'
        >
          Reflection
        </Heading>

        <div className='flex flex-col gap-4'>
          {description.map((p, index) => (
            <p key={`reflection-${index}`} className='text-preset-p1'>
              {p}
            </p>
          ))}
        </div>
      </div>
    </LazyLoadContainer>
  );
}

export default ProjectPageReflection;
