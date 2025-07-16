// 'use client';

// import { useState } from 'react';
// import { Feature } from '@/_types/project';
// import Image from 'next/image';
// import Heading from '../text/Heading';
// import SlideshowBar from './SlideshowBar';
// import ButtonPrevNextChevron from '../buttons/ButtonPrevNextChevron';
// import useEmblaCarousel from 'embla-carousel-react';
// import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

// function ProjectPageFeatures({ features }: { features: Feature[] }) {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     WheelGesturesPlugin(),
//   ]);
//   const [activeSlide, setActiveSlide] = useState(0);
//   // const cur = features[activeSlide];
//   const numFeatures = features.length;

//   return (
//     <section
//       ref={emblaRef}
//       className='relative flex flex-col items-center justify-center lg:gap-20 w-full md:px-10 lg:px-0

//       overflow-hidden m-auto max-w-[100%]
//       '
//     >
//       {/* <div
//       className='
//           flex flex-col items-center justify-center
//           lg:grid lg:grid-cols-[2fr_3fr] lg:place-items-center
//           xl:grid-cols-[auto_3fr_2fr_auto]
//           lg:gap-14 w-full
//           '
//     > */}

//       {/* embla__container */}
//       <div className='grid grid-cols-1 grid-rows-1 gap-14 pan-y pinch-zoom will-change-transform'>
//         {/* Embla slides */}
//         {features.map((feature) => (
//           // <section
//           //   key={feature.title}
//           //   className='w-full min-w-0 border
//           //   grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10
//           // '
//           // >
//           <section
//             role='group'
//             key={feature.title}
//             className='grid grid-cols-[2fr_3fr] border w-full
//           '
//           >
//             {/* <div className='grow flex items-center justify-center w-8/10 lg:w-full max-lg:mx-auto mb-12 md:mb-14 lg:mb-0 rounded-2xl overflow-hidden border-2 border-pri/50'> */}
//             <div className='grow-0 shrink-0 flex items-center justify-center w-8/10 lg:w-full max-lg:mx-auto mb-12 md:mb-14 lg:mb-0 rounded-2xl overflow-hidden border-2 border-pri/50'>
//               <Image
//                 src={feature.image.src}
//                 alt={feature.image.alt}
//                 layout='responsive'
//                 width={469}
//                 height={469}
//               />
//             </div>

//             {/* Text */}
//             <div className='flex flex-col items-center justify-center gap-8 w-full lg:w-[5/10] lg:min-w-[523px] h-fit max-lg:mb-16 lg:pt-4 lg:pr-8'>
//               <Heading
//                 tag='h3'
//                 color='pri'
//                 className='w-full max-lg:text-center'
//               >
//                 {feature.title}
//               </Heading>

//               <div className='h-fit max-lg:px-5'>
//                 {typeof feature.description === 'string' ? (
//                   <p className='text-preset-p3 max-lg:px-5'>
//                     {feature.description}
//                   </p>
//                 ) : (
//                   feature.description
//                 )}
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>

//       <ButtonPrevNextChevron variant='prev' />
//       <ButtonPrevNextChevron variant='next' />
//       {/* </div> */}
//       <SlideshowBar
//         quantity={numFeatures}
//         activeSlide={activeSlide}
//         setActiveSlide={setActiveSlide}
//       />
//     </section>
//   );
// }

// export default ProjectPageFeatures;
'use client';

import { Feature } from '@/_types/project';
import EmblaCarousel from './EmblaCarousel';

function ProjectPageFeatures({ features }: { features: Feature[] }) {
  return <EmblaCarousel slides={features} options={{ loop: true }} />;
}

export default ProjectPageFeatures;
