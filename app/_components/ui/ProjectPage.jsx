import ProjectPageAbout from './ProjectPageAbout';
import ProjectPageFeatures from './ProjectPageFeatures';
import ProjectPageHero from './ProjectPageHero';
import ProjectPageUiUx from './ProjectPageUiUx';

function ProjectPage({ project }) {
  const { title, links, image, technologies, about, uiUx, features } = project;

  return (
    <main
      className='
      flex flex-col items-center w-full 
      px-4 pt-8 pb-24
      sm:px-5 
      md:px-9 md:pt-12 
      xl:px-24 xl:pt-16
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
        <ProjectPageFeatures features={features} />
      </article>
    </main>
  );
}

export default ProjectPage;
