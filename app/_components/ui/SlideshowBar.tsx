function SlideshowBar({
  quantity,
  activeSlide,
  setActiveSlide,
}: {
  quantity: number;
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}) {
  return (
    <div className='flex items-center justify-center gap-4 lg:gap-7 w-full lg:mt-20 px-12 md:px-16'>
      {Array.from({ length: quantity }).map((_, index) => (
        <button
          type='button'
          key={`slide-${index}`}
          role='tab'
          aria-selected={index === activeSlide}
          aria-label={`Slide ${index + 1} of ${quantity}`}
          className='group w-full max-w-[148px] h-fit py-4 cursor-pointer'
          onClick={() => setActiveSlide(index)}
        >
          <div
            className={`
            h-1 rounded-full 
            ${
              index === activeSlide
                ? 'bg-pop'
                : 'bg-[#727272] group-hover:bg-pri transition-colors duration-200 ease-in-out'
            }
            `}
          />
        </button>
      ))}
    </div>
  );
}

export default SlideshowBar;
