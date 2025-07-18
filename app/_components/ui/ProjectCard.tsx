import { Project } from '@/_types/project';
import LazyLoadContainer from '../motion/LazyLoadContainer';
import ProjectCardButton from './ProjectCardButton';
import ProjectCardImages from './ProjectCardImages';
import ProjectCardLinks from './ProjectCardLinks';
import ProjectCardText from './ProjectCardText';

function ProjectCard({ project }: { project: Project }) {
  const { title, path, decoration, images, links, description, buttonLabel } =
    project;

  return (
    <LazyLoadContainer
      tag='article'
      className='flex max-lg:flex-col lg:items-center lg:justify-center lg:gap-10 w-full lg:max-w-[1174px] h-fit lg:pl-10'
    >
      <ProjectCardImages image={images[0]} decoration={decoration} />

      <section className='flex flex-col h-fit px-5 my-auto'>
        <ProjectCardLinks variant='card' links={links} />

        <div className='w-full lg:max-w-[594px]'>
          <ProjectCardText
            title={title}
            path={path}
            description={description}
          />
          <ProjectCardButton buttonLabel={buttonLabel} path={path} />
        </div>
      </section>
    </LazyLoadContainer>
  );
}

export default ProjectCard;
