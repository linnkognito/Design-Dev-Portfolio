import { Technology } from '@/_types/project';
import Heading from '../text/Heading';
import ProjectCardLinks from './ProjectCardLinks';
import ProjectPageHeroGallery from './ProjectPageHeroGallery';
import ProjectPageHeroSlideshow from './ProjectPageHeroSlideshow';
import ProjectPageTech from './ProjectPageTech';
import LazyLoadContainer from '../motion/LazyLoadContainer';

type ProjectPageHeroProps = {
  title: string;
  links: {
    href: string;
    title: string;
    alt: string;
    icon: React.ReactNode;
    colors: string;
  }[];
  images: {
    src: string;
    alt: string;
  }[];
  technologies: Technology[];
};

function ProjectPageHero({
  title,
  links,
  images,
  technologies,
}: ProjectPageHeroProps) {
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

      {/* Mobile --> Slideshow */}
      {/* <ProjectPageHeroSlideshow images={images} /> */}
      {/* Desktop --> Gallery */}
      <ProjectPageHeroGallery images={images} />

      <ProjectPageTech technologies={technologies} />
    </LazyLoadContainer>
  );
}

export default ProjectPageHero;
