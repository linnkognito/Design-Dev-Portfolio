import { projects } from '@/_data/projects';
import ProjectPageAbout from './ProjectPageAbout';
import ProjectPageFeatures from './ProjectPageFeatures';
import ProjectPageHero from './ProjectPageHero';
import ProjectPageUiUx from './ProjectPageUiUx';
import ProjectPageChallenges from './ProjectPageChallenges';
import ProjectPageOutcome from './ProjectPageOutcome';
import ProjectPageReflection from './ProjectPageReflection';
import ProjectPageFooter from './ProjectPageFooter';

function ProjectPage({ project }) {
  const { about, uiUx, features, challenges, outcome, reflection } = project;

  return (
    <main
      className='relative
      flex flex-col items-center w-full max-w-[1440px] mx-auto
      px-4 pt-8 pb-24
      sm:px-8
      md:px-9 md:pt-12
      lg:px-20
      xl:px-24 xl:pt-16
    '
    >
      <article className='flex flex-col items-center gap-50 lg:gap-70 w-full pb-24 md:pb-32'>
        <ProjectPageHero project={project} />
        <ProjectPageAbout about={about} />

        {uiUx && <ProjectPageUiUx uiUx={uiUx} />}
        {features && <ProjectPageFeatures features={features} />}
        {challenges && <ProjectPageChallenges challenges={challenges} />}
        {outcome && <ProjectPageOutcome outcome={outcome} />}
        {reflection && <ProjectPageReflection reflection={reflection} />}
      </article>

      <ProjectPageFooter
        currentIndex={projects.indexOf(project)}
        lastIndex={projects.length - 1}
      />
    </main>
  );
}

export default ProjectPage;
