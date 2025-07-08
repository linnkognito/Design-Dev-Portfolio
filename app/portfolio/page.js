import moodTracking from './_data/mood-tracking-data';
import a11y from './_data/a11y-data';
import portfolioTemplate from './_data/portfolio-template-data';
import morningstar from './_data/morningstar-data';
import natours from './_data/natours-data';

import PageWrapper from '@/_components/containers/PageWrapper';
import PageHeading from '@/_components/text/PageHeading';
import ProjectCard from '@/_components/projects/ProjectCard';

function Page() {
  const projects = [
    moodTracking,
    morningstar,
    portfolioTemplate,
    a11y,
    natours,
  ];

  return (
    <PageWrapper aria-labelledby='portfolio-heading'>
      <PageHeading id='portfolio-heading'>Projects</PageHeading>

      <div className='p-section'>
        <div
          className='flex-center gap-10 flex-col w-full h-full'
          role='list'
          aria-label='Project cards'
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className='flex-center flex-col gap-10 w-full'
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export default Page;
