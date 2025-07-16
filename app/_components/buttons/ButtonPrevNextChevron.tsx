import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function ButtonPrevNextChevron({ variant }: { variant: 'prev' | 'next' }) {
  const styles = {
    prev: 'left-0 top-1/2 -translate-y-1/2 px-3',
    next: 'right-0 top-1/2 -translate-y-1/2 px-3 pb-2',
  };
  return (
    <button
      type='button'
      aria-label={`${variant} button`}
      className={`
        absolute hidden lg:hidden
        sm:grid place-items-center
        w-fit h-8/10
        cursor-pointer
        hover:text-pop hover:scale-120 
        transition-all duration-300
        ${styles[variant]}
    `}
    >
      {variant === 'prev' ? (
        <ChevronLeftIcon className='w-9 h-9' />
      ) : (
        <ChevronRightIcon className='w-9 h-9' />
      )}
    </button>
  );
}

export default ButtonPrevNextChevron;
