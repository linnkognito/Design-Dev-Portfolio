import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Heading from '../text/Heading';
import ButtonPrevNextChevron from '../buttons/ButtonPrevNextChevron';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

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
            <div className='embla__slide border-amber-600 px-10' key={index}>
              <section
                role='group'
                key={feature.title}
                className='flex flex-col lg:flex-row w-full gap-14'
              >
                {/* Image */}
                <div className='w-2/5 max-h-fit max-lg:mx-auto mb-12 md:mb-14 lg:mb-0 rounded-2xl overflow-hidden border-2 border-pri/50'>
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
                <div className='flex flex-col items-center justify-center gap-8 w-full lg:w-3/5 max-lg:mb-16 lg:pt-4 lg:pr-8'>
                  <Heading
                    tag='h3'
                    color='pri'
                    className='w-full max-lg:text-center'
                  >
                    {feature.title}
                  </Heading>

                  <div className='h-fit max-lg:px-5'>
                    {typeof feature.description === 'string' ? (
                      <p className='text-preset-p3 max-lg:px-5'>
                        {feature.description}
                      </p>
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

      <div className='embla__controls'>
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

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
