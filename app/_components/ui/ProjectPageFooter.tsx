import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function ProjectPageFooter({ currentIndex }: { currentIndex: number }) {
  return (
    <footer
      className='
      max-sm:fixed bottom-0 left-0 w-full max-sm:h-16 px-8 md:px-18 md:pt-7 bg-bgr max-sm:border-t border-txt/50
      '
    >
      <div className='flex items-center justify-between h-full'>
        {/* Mobile */}
        <Link href='/projects' className=''>
          {/* <ChevronLeftIcon className='w-6 h-full stroke-txt sm:hidden my-auto' /> */}
          <span className='p-4 uppercase border-b border-transparent max-sm:hover:text-pop md:hover:border-pop transition-colors duration-300 ease-in'>
            Back
          </span>
        </Link>

        <Link href='/projects' className=''>
          {/* <ChevronRightIcon className='w-6 h-full stroke-txt sm:hidden my-auto' /> */}
          <span className='p-4 uppercase border-b border-transparent max-sm:hover:text-pop md:hover:border-pop transition-colors duration-300 ease-in'>
            Next
          </span>
        </Link>
      </div>
    </footer>
  );
}

export default ProjectPageFooter;
