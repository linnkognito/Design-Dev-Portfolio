import { Challenge } from '@/_types/project';
import LazyLoadContainer from '../motion/LazyLoadContainer';
import Heading from '../text/Heading';
import Image from 'next/image';

function ProjectPageChallenges({ challenges }: { challenges: Challenge[] }) {
  const colorPalette = [
    { id: 'challenge-color-1', color: 'bg-pri' },
    { id: 'challenge-color-2', color: 'bg-sec' },
    { id: 'challenge-color-3', color: 'bg-pop' },
    { id: 'challenge-color-4', color: 'bg-txt' },
  ];

  return (
    <section
      aria-labelledby='challenges-heading'
      className='flex flex-col gap-20 w-full max-w-[700px]'
    >
      <Heading id='challenges-heading' tag='h2' className='text-center'>
        Challenges
      </Heading>

      <ul className='flex flex-col gap-14 px-6 sm:px-10 lg:px-0 md:py-4'>
        {challenges.map((challenge) => (
          <LazyLoadContainer
            tag='li'
            key={challenge.id}
            className='flex max-md:flex-col items-center gap-8'
          >
            <Image
              src={challenge.icon}
              alt={`${challenge.title} icon`}
              width={48}
              height={48}
              className='max-md:w-10 max-md:h-10'
            />
            <p className='text-preset-p4 max-md:text-center'>
              {challenge.description}
            </p>
          </LazyLoadContainer>
        ))}
      </ul>
    </section>
  );
}

export default ProjectPageChallenges;
