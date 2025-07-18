import { projects } from '@/_data/projects';
import Link from 'next/link';

function ProjectPageFooter({
  currentIndex,
  lastIndex,
}: {
  currentIndex: number;
  lastIndex: number;
}) {
  return (
    <footer
      className='
      max-sm:fixed bottom-0 left-0 w-full max-sm:h-16 px-8 md:px-18 md:pt-7 bg-bgr max-sm:border-t border-txt/50
      '
    >
      <div className='flex items-center justify-between h-full'>
        {/* Mobile */}
        <Link href='/' className=''>
          <span className='p-4 uppercase border-b border-transparent max-sm:hover:text-pop md:hover:border-pop transition-colors duration-300 ease-in'>
            Back
          </span>
        </Link>

        {currentIndex < lastIndex && (
          <Link
            href={projects[currentIndex + 1].path}
            className='cursor-pointer'
          >
            <span className='p-4 uppercase border-b border-transparent max-sm:hover:text-pop md:hover:border-pop transition-colors duration-300 ease-in'>
              Next
            </span>
          </Link>
        )}
      </div>
    </footer>
  );
}

export default ProjectPageFooter;
