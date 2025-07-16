import { Outcome } from '@/_types/project';
import Heading from '../text/Heading';
import Image from 'next/image';
import LazyLoadContainer from '../motion/LazyLoadContainer';

function ProjectPageOutcome({ outcome }: { outcome: Outcome[] }) {
  const backgrounds = ['bg-txt', 'bg-pop', 'bg-pri', 'bg-sec'];

  return (
    <LazyLoadContainer
      tag='section'
      aria-labelledby='outcome-heading'
      className='flex flex-col gap-12'
    >
      <Heading id='outcome-heading' tag='h2' className='text-center'>
        Outcome
      </Heading>

      <ul className='flex flex-col gap-6 px-7 lg:px-[148px]'>
        {outcome.map((li, index) => {
          const bgColor = backgrounds[index % backgrounds.length];

          return (
            <li key={li.id} className='flex items-center gap-8'>
              <div
                className={`relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20  p-6 ${bgColor} rounded-2xl aspect-square`}
              >
                <Image
                  src={li.icon}
                  alt={`${li.title} icon`}
                  fill
                  className='object-center object-contain p-2'
                />
              </div>
              <p className='text-preset-p4'>{li.description}</p>
            </li>
          );
        })}
      </ul>
    </LazyLoadContainer>
  );
}

export default ProjectPageOutcome;
