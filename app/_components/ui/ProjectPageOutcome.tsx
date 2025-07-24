import { Outcome } from '@/_types/project';
import Heading from '../text/Heading';
import IconCube from './IconCube';

function ProjectPageOutcome({ outcome }: { outcome: Outcome[] }) {
  const backgrounds = ['bg-txt', 'bg-pop', 'bg-pri', 'bg-sec'] as const;

  return (
    <section
      aria-labelledby='outcome-heading'
      className='flex flex-col gap-20 w-full max-w-[700px]'
    >
      <Heading id='outcome-heading' tag='h2' className='text-center'>
        Outcome
      </Heading>

      <ul className='flex flex-col gap-14 px-6 sm:px-10 lg:px-0'>
        {outcome.map((li, index) => {
          const bgColor = backgrounds[index % backgrounds.length];

          return (
            <li key={li.id} className='flex max-sm:flex-col items-center gap-8'>
              <IconCube
                icon={li.icon}
                alt={`${li.title} icon`}
                bgColor={bgColor}
                className='w-16 h-16 md:w-20 md:h-20'
              />

              <p className='text-preset-p4 max-sm:text-center'>
                {li.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProjectPageOutcome;
