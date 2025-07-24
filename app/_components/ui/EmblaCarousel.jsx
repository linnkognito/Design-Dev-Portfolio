import React from 'react';
import { useDotButton } from './EmblaCarouselDotButton';
import { usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Heading from '../text/Heading';
import ButtonPrevNextChevron from '../buttons/ButtonPrevNextChevron';
import DividerHorizontal from './DividerHorizontal';
import SlideshowBar from './SlideshowBar';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className='embla relative'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((feature, index) => (
            <div
              className='embla__slide cursor-grab active:cursor-grabbing'
              key={index}
              onClick={() => emblaApi.scrollTo(index)}
            >
              <section
                role='group'
                key={feature.title}
                className='flex flex-col lg:flex-row w-full lg:gap-10'
              >
                {/* Image */}
                <div className='w-2/5 h-fit max-lg:mx-auto mb-14 md:mb-20 lg:mb-0 rounded-2xl overflow-hidden border-2 border-pri/50'>
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    layout='responsive'
                    width={469}
                    height={469}
                    className='object-cover object-center'
                  />
                </div>

                {/* Text */}
                <div className='flex flex-col items-center justify-center gap-8 w-full lg:w-3/5 max-lg:mb-16 md:px-10 lg:pt-4 lg:pr-8'>
                  <Heading
                    tag='h3'
                    color='priLight'
                    className='w-full max-lg:text-center'
                  >
                    {feature.title}
                  </Heading>

                  <DividerHorizontal
                    color='pri'
                    width='w-2/10'
                    margin='m-0'
                    className='lg:hidden mt-1'
                  />

                  <div className='h-fit max-lg:px-5'>
                    {typeof feature.description === 'string' ? (
                      <p className='text-preset-p3'>{feature.description}</p>
                    ) : (
                      feature.description
                    )}
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className='flex items-center'>
        <div className='embla__buttons'>
          <ButtonPrevNextChevron
            variant='prev'
            onClick={onPrevButtonClick}
            disabled={nextBtnDisabled}
          />
          <ButtonPrevNextChevron
            variant='next'
            onClick={onNextButtonClick}
            disabled={prevBtnDisabled}
          />
        </div>

        <SlideshowBar
          quantity={slides.length}
          activeSlide={selectedIndex}
          setActiveSlide={onDotButtonClick}
        />
      </div>
    </section>
  );
};

export default EmblaCarousel;
