function SlideshowBar({
  quantity,
  activeSlide,
}: {
  quantity: number;
  activeSlide: number;
}) {
  return (
    <div className='flex gap-4 px-12'>
      {Array.from({ length: quantity }).map((_, index) => (
        <div
          key={`slide-${index}`}
          className={`grow h-1 rounded-full ${
            index === activeSlide ? 'bg-pri' : 'bg-[#727272]'
          }`}
        />
      ))}
    </div>
  );
}

export default SlideshowBar;
