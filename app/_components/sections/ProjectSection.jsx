function ProjectSection({ children }) {
  return (
    <section
      aria-labelledby='index-heading'
      className='flex flex-col items-center justify-center w-full h-screen max-h-[1000px]'
    >
      {children}
    </section>
  );
}

export default ProjectSection;
