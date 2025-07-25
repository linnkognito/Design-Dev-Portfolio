import { Reflection } from '@/_types/project';
import LazyLoadContainer from '../motion/LazyLoadContainer';
import Heading from '../text/Heading';

function ProjectPageReflection({ reflection }: { reflection: Reflection }) {
  const { description } = reflection;

  return (
    <LazyLoadContainer
      tag='section'
      className='flex max-lg:flex-col 
          lg:gap-16 xl:gap-20 lg:items-center lg:justify-center lg:pl-16 lg:pr-6'
    >
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
