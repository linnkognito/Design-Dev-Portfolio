import Image from 'next/image';

function ProjectPageHeroSlideshow({ image }) {
  return (
    <div className='md:hidden relative aspect-16/9 rounded-2xl overflow-hidden'>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className='object-cover object-center'
      />
    </div>
  );
}

export default ProjectPageHeroSlideshow;
