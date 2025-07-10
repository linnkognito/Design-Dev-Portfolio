import { About } from '@/_types/project';
import Image from 'next/image';

function ProjectPageAbout({ about }: { about: About }) {
  return (
    <section className='flex flex-col gap-14 w-full'>
      {/* Images */}
      <div className='grid grid-cols-[5fr_1fr] xl:grid-cols-1 gap-4'>
        <div className='relative aspect-5/4 w-full h-full rounded-2xl overflow-hidden'>
          <Image
            src={about.images[0].src}
            alt={about.images[0].alt}
            fill
            className='object-cover object-center'
          />
        </div>
        <div className='relative rounded-2xl overflow-hidden'>
          <Image
            src={about.images[1].src}
            alt={about.images[1].alt}
            fill
            className='object-cover object-center'
          />
        </div>
      </div>

      <p className='text-preset-p1 max-md:pl-7 max-md:pr-6 md:px-16 xl:px-0'>
        {about.text}
      </p>
    </section>
  );
}

export default ProjectPageAbout;
