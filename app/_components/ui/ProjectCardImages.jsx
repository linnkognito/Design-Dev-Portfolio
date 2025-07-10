import Image from 'next/image';

function ProjectCardImages({ image, decoration }) {
  return (
    <section className='flex lg:flex-col gap-4 md:gap-6 w-full max-w-full lg:min-w-[350px] lg:max-w-[476px] h-fit aspect-16/9 max-lg:mb-9'>
      <div
        className='
      order-1 lg:order-2 relative
      w-full h-full
      rounded-2xl overflow-hidden
      cursor-zoom-in
      '
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className='object-cover object-center'
        />
      </div>

      <div
        className={`relative 
            order-2 lg:order-1
            w-1/6 lg:w-full h-full
            rounded-2xl lg:rounded-tl-[999px] 
            overflow-hidden
            `}
      >
        {decoration}
      </div>
    </section>
  );
}

export default ProjectCardImages;
