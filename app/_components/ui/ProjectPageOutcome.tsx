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

      <ul className='flex flex-col gap-4 w-full'>
        {outcome.map((li, index) => {
          const bgColor = backgrounds[index % backgrounds.length];

          return (
            <li key={li.id} className='flex items-center gap-8'>
              <div
                className={`flex items-center justify-center w-20 h-20 p-2 ${bgColor} rounded-2xl`}
              >
                <Image
                  src={li.icon}
                  alt={`${li.title} icon`}
                  width={80}
                  height={80}
                />
              </div>
              <p className='text-preset-p5'>{li.description}</p>
            </li>
          );
        })}
      </ul>
    </LazyLoadContainer>
  );
}

export default ProjectPageOutcome;
