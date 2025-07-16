import { Challenge } from '@/_types/project';
import LazyLoadContainer from '../motion/LazyLoadContainer';
import Heading from '../text/Heading';
import Image from 'next/image';
import ColorPalette from './ColorPalette';

function ProjectPageChallenges({ challenges }: { challenges: Challenge[] }) {
  const colorPalette = [
    { id: 'challenge-color-1', color: 'bg-pri' },
    { id: 'challenge-color-2', color: 'bg-sec' },
    { id: 'challenge-color-3', color: 'bg-pop' },
    { id: 'challenge-color-4', color: 'bg-txt' },
  ];

  return (
    <LazyLoadContainer
      tag='section'
      aria-labelledby='challenges-heading'
      className='flex flex-col gap-12 px-7 lg:px-[192px]'
    >
      <Heading id='challenges-heading' tag='h2' className='text-center mb-4'>
        Challenges
      </Heading>

      <ul className='flex flex-col gap-4 pb-10'>
        {challenges.map((challenge) => (
          <li key={challenge.id} className='flex items-center gap-8'>
            <Image
              src={challenge.icon}
              alt={`${challenge.title} icon`}
              width={48}
              height={48}
            />
            <p className='text-preset-p4'>{challenge.description}</p>
          </li>
        ))}
      </ul>
    </LazyLoadContainer>
  );
}

export default ProjectPageChallenges;
