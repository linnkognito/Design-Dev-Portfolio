import { Project } from '@/_types/project';
import Heading from '../text/Heading';
import ProjectCardLinks from './ProjectCardLinks';
import ProjectPageHeroGallery from './ProjectPageHeroGallery';
import ProjectPageTech from './ProjectPageTech';
import LazyLoadContainer from '../motion/LazyLoadContainer';

function ProjectPageHero({ project }: { project: Project }) {
  const { title, links, images, technologies } = project;

  return (
    <LazyLoadContainer tag='section' className='w-full'>
      <header className='flex max-xs-plus:flex-col items-center xs-plus:justify-between w-full h-fit pb-10 lg:pb-12 xl:pb-16'>
        <Heading
          tag='h1'
          className='max-xs-plus:order-2 w-fit xs-plus:max-w-8/10 pl-2 pt-4 pb-3'
        >
          {title}
        </Heading>

        <ProjectCardLinks variant='page' links={links} />
      </header>

      <ProjectPageHeroGallery images={images} />

      <ProjectPageTech technologies={technologies} />
    </LazyLoadContainer>
  );
}

export default ProjectPageHero;
