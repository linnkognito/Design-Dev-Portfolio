function SlideshowBar({
  quantity,
  activeSlide,
}: {
  quantity: number;
  activeSlide: number;
}) {
  return (
    <div className='flex justify-center gap-4 lg:gap-7 w-full px-12 md:px-16'>
      {Array.from({ length: quantity }).map((_, index) => (
        <div
          key={`slide-${index}`}
          role='tab'
          aria-selected={index === activeSlide}
          aria-label={`Slide ${index + 1} of ${quantity}`}
          className='grow max-w-[148px] h-fit w-fit py-4 -my-4 cursor-pointer'
        >
          <div
            className={`
            h-1 rounded-full
            ${index === activeSlide ? 'bg-pop' : 'bg-[#727272]'}
            `}
          />
        </div>
      ))}
    </div>
  );
}

export default SlideshowBar;
