import DividerHorizontal from './DividerHorizontal';
import Link from 'next/link';

function ProjectCardButton({ buttonLabel, path }) {
  return (
    <div
      className='
    flex items-center justify-between gap-10
    pl-4 pr-4 lg:pr-10 pb-6'
    >
      <DividerHorizontal />
      <Link href={path}>
        <button className='px-5 py-2 text-bgr bg-pop tracking-widest font-semibold rounded-2xl cursor-pointer hover:bg-pri transition-colors duration-300'>
          {buttonLabel}
        </button>
      </Link>
    </div>
  );
}

export default ProjectCardButton;
