import { projects } from '@/_data/projects';
import NavLink from './NavLink';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

function HeaderProjectPage({ currentIndex }: { currentIndex: number }) {
  const nextProject = projects[currentIndex + 1];
  const numProjects = projects.length;
  const last = currentIndex === numProjects - 1;

  return (
    <header
      className='w-full max-w-header
      mx-auto mb-6 md:mb-12 xl:mb-16
      px-4 md:py-2
      border-none border-txt/30
      '
    >
      <nav className='w-full'>
        <ul className='flex justify-between'>
          <NavLink
            variant='project'
            href='/'
            className='group mb-2 text-sm text-txt/80'
          >
            Back
          </NavLink>

          {!last && (
            <NavLink
              variant='project'
              href={nextProject.path}
              className='group mb-2 text-sm text-txt/80'
            >
              Next
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderProjectPage;
