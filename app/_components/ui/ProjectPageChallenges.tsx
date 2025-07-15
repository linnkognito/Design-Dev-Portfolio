import { Challenge } from '@/_types/project';
import LazyLoadContainer from '../motion/LazyLoadContainer';
import Heading from '../text/Heading';
import Image from 'next/image';

function ProjectPageChallenges({ challenges }: { challenges: Challenge[] }) {
  return (
    <LazyLoadContainer
      tag='section'
      aria-labelledby='challenges-heading'
      className='flex flex-col gap-12 px-7 lg:px-[192px]'
    >
      <Heading id='challenges-heading' tag='h2' className='text-center'>
        Challenges
      </Heading>

      <ul className='flex flex-col gap-4'>
        {challenges.map((challenge) => (
          <li key={challenge.id} className='flex items-center gap-8 py-4'>
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
