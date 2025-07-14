import ProjectPageAbout from './ProjectPageAbout';
import ProjectPageFeatures from './ProjectPageFeatures';
import ProjectPageHero from './ProjectPageHero';
import ProjectPageUiUx from './ProjectPageUiUx';

function ProjectPage({ project }) {
  const { title, links, images, technologies, about, uiUx, features } = project;

  return (
    <main
      className='
      flex flex-col items-center w-full max-w-[1440px] mx-auto
      px-4 pt-8 pb-24
      sm:px-8 
      md:px-9 md:pt-12 
      lg:px-20
      xl:px-24 xl:pt-16
    '
    >
      <article className='flex flex-col items-center gap-80 w-full pb-10'>
        {/* <article className='flex flex-col items-center gap-50 w-full'> */}
        <ProjectPageHero
          title={title}
          links={links}
          images={images}
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
