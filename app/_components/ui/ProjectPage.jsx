import ProjectPageAbout from './ProjectPageAbout';
import ProjectPageHero from './ProjectPageHero';
import ProjectPageUiUx from './ProjectPageUiUx';

function ProjectPage({ project }) {
  const { title, links, image, technologies, about, uiUx } = project;

  return (
    <main
      className='flex flex-col items-center w-full 
    px-4 pt-4 
    sm:px-5 sm:pt-5 sm:pb-12
    md:px-9 md:py-10 
    xl:px-24 xl:py-16
    '
    >
      <article className='flex flex-col items-center gap-50 w-full px-md:px-9 xl:px-24'>
        <ProjectPageHero
          title={title}
          links={links}
          image={image}
          technologies={technologies}
        />

        <ProjectPageAbout about={about} />

        <ProjectPageUiUx uiUx={uiUx} />
      </article>
    </main>
  );
}

export default ProjectPage;
