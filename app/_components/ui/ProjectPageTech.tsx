import type { Technology } from '@/_types/project';
import TechIcon from './TechIcon';

function ProjectPageTech({ technologies }: { technologies: Technology[] }) {
  return (
    <div className='flex max-xs:justify-between gap-7 xs:gap-8 w-fit pt-14 max-xl:mx-auto'>
      {technologies?.map((tech: Technology) => (
        <TechIcon key={tech.title} tech={tech} />
      ))}
    </div>
  );
}

export default ProjectPageTech;
