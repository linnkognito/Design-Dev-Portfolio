import ProjectPageHero from './ProjectPageHero';

function ProjectPage({ project }) {
  const { title, links, image, technologies, description } = project;

  return (
    <main
      className='flex flex-col gap-50 w-full 
    max-md:px-5 max-md:pt-5 max-md:pb-12
    md:py-10 xl:py-16'
    >
      <article className='flex flex-col w-full md:px-9 xl:px-24'>
        <ProjectPageHero
          title={title}
          links={links}
          image={image}
          technologies={technologies}
        />
      </article>
    </main>
  );
}

export default ProjectPage;
