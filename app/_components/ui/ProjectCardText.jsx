import Heading from '../text/Heading';
import Link from 'next/link';

function ProjectCardText({ title, path, description }) {
  return (
    <>
      <Link href={`${path}`}>
        <Heading tag='h2' className='mb-6'>
          {title}
        </Heading>
      </Link>

      <p className='max-lg:text-justify md:text-lg pr-4 mb-8'>{description}</p>
    </>
  );
}

export default ProjectCardText;
