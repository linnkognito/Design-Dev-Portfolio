import { Technology } from '@/_types/project';
import Heading from '../text/Heading';
import ProjectCardLinks from './ProjectCardLinks';
import ProjectPageHeroGallery from './ProjectPageHeroGallery';
import ProjectPageHeroSlideshow from './ProjectPageHeroSlideshow';
import ProjectPageTech from './ProjectPageTech';

type ProjectPageHeroProps = {
  title: string;
  links: {
    href: string;
    title: string;
    alt: string;
    icon: React.ReactNode;
    colors: string;
  }[];
  image: {
    src: string;
    alt: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
  technologies: Technology[];
};

function ProjectPageHero({
  title,
  links,
  image,
  images,
  technologies,
}: ProjectPageHeroProps) {
  return (
    <section>
      {/* Header --> H1, xs:Line, Icons */}
      <header className='flex items-center justify-between h-fit pb-10'>
        <Heading tag='h1' className='pl-2 pr-4 pt-4 pb-3'>
          {title}
        </Heading>
        <div className='self-stretch w-[1px] bg-txt/50' />
        <ProjectCardLinks variant='page' links={links} />
      </header>

      {/* Mobile --> Slideshow */}
      <ProjectPageHeroSlideshow image={image} />
      {/* Desktop --> Gallery */}
      <ProjectPageHeroGallery images={images} />

      {/* Tech Stack --> Icons */}
      <ProjectPageTech technologies={technologies} />
    </section>
  );
}

export default ProjectPageHero;
