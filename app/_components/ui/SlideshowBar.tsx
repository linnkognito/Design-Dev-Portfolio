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
    <div className='flex justify-center gap-4 lg:gap-7 w-full px-12 md:px-16'>
      {Array.from({ length: quantity }).map((_, index) => (
        <div
          key={`slide-${index}`}
          role='tab'
          aria-selected={index === activeSlide}
          aria-label={`Slide ${index + 1} of ${quantity}`}
          className='group grow max-w-[148px] h-fit w-fit py-4 -my-4 cursor-pointer'
          onClick={() => setActiveSlide(index)}
        >
          <div
            className={`
            h-1 rounded-full 
            ${
              index === activeSlide
                ? 'bg-pop'
                : 'bg-[#727272] group-hover:bg-pri transition-colors duration-500 ease-in-out'
            }
            `}
          />
        </div>
      ))}
    </div>
  );
}

export default SlideshowBar;
