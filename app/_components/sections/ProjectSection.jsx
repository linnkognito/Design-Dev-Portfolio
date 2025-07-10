function ProjectSection({ children }) {
  return (
    <section
      aria-labelledby='index-heading'
      className='flex flex-col items-center justify-center w-full h-full min-h-screen'
    >
      {children}
    </section>
  );
}

export default ProjectSection;
