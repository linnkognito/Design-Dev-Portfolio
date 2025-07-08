import Heading from '../text/Heading';

function ProjectSection() {
  return (
    <section
      aria-labelledby='index-heading'
      className='relative flex flex-col items-center gap-10 w-full h-full sm:p-section py-20 border border-pri'
    >
      {/* Project card */}
      <div className='flex gap-6 w-fit mx-auto border p-div'>
        {/* Image */}
        <div className='aspect-4/5 w-[25vw] bg-pri/70 rounded-lg'>Image</div>

        <div className='flex flex-col gap-6'>
          <Heading>Project name</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
