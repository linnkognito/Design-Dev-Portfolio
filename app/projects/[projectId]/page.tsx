import { projects } from '@/_data/projects';
import ProjectPage from '@/_components/ui/ProjectPage';

type Props = {
  params: {
    projectId: string;
  };
};

async function Page({ params }: Props) {
  const { projectId } = params;
  const project = projects.find((project) => project.id === projectId);

  return <ProjectPage project={project} />;
}

export default Page;
