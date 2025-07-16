import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function ButtonPrevNextChevron({ variant }: { variant: 'prev' | 'next' }) {
  const styles = {
    prev: 'left-0',
    next: 'right-0 pl-3 mb-[3px]',
  };
  return (
    <button
      type='button'
      aria-label={`${variant} button`}
      className={`
        hidden absolute
        xl:grid place-items-center
        w-fit h-full
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
