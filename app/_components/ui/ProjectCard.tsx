import DividerHorizontal from './DividerHorizontal';
import ProjectCardButton from './ProjectCardButton';
import ProjectCardImages from './ProjectCardImages';
import ProjectCardLinks from './ProjectCardLinks';
import ProjectCardText from './ProjectCardText';

type Link = {
  href: string;
  alt: string;
  title: string;
  icon: React.ReactNode;
  colors: string;
};

type ProjectCardProps = {
  projectOptions: {
    id: string;
    title: string;
    path: string;
    decoration: React.ReactNode;
    image: {
      src: string;
      alt: string;
    };
    links: Link[];
    description: string;
    buttonLabel: string;
    technologies: {
      title: string;
      icon: string;
    }[];
    images: {
      src: string;
      alt: string;
    }[];
  };
};

function ProjectCard({ projectOptions }: ProjectCardProps) {
  const { title, path, decoration, image, links, description, buttonLabel } =
    projectOptions;

  return (
    <section
      className='
    flex max-lg:flex-col lg:gap-10
    w-full lg:max-w-[1174px]
    h-fit
    lg:pl-10
    '
    >
      <ProjectCardImages image={image} decoration={decoration} />

      <section className='flex flex-col h-fit px-5 my-auto'>
        <ProjectCardLinks variant='card' links={links} />
        <ProjectCardText title={title} path={path} description={description} />
        <ProjectCardButton buttonLabel={buttonLabel} path={path} />
      </section>
    </section>
  );
}

export default ProjectCard;
