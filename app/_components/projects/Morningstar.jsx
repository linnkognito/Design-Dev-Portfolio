'use client';
import Image from 'next/image';
import React from 'react';
import { ReactFitty } from 'react-fitty';
import { Bold } from '../text/TextStyles';

export function MorningstarAboutText() {
  return (
    <>
      <p>
        Morningstar is a custom-built e-commerce web app designed to sharpen my
        skills in both frontend &fullstack development.
      </p>

      <p>
        My goal was to simulate a real-world development environment: designing
        an expressive, responsive UI from scratch, building a REST API &
        integrating dynamic product data.
      </p>

      <p>
        <Bold>
          The app puts special focus on UI/UX, accessibility & performance,
          earning a 100/100 Lighthouse score without compromising style or
          interactivity.
        </Bold>
      </p>
    </>
  );
}
export function MorningstarAbout100() {
  return (
    <div className='group flex flex-col items-center justify-center w-full h-full py-2 px-4 text-center hover-rotate-60'>
      <p className='text-preset-p3 text-heading uppercase tracking-[10px]'>
        Lighthouse
      </p>
      <ReactFitty className='text-heading text-pop text-9xl leading-none hover-image-scale transition-all duration-500 ease-in-out'>
        <p>100/100</p>
      </ReactFitty>
    </div>
  );
}
export function MorningstarAboutDetails() {
  return (
    <Image
      src={'/HER_pattern.jpg'}
      alt='Woman wearing a bold streetwear set with a black and white pattern'
      fill
      className='object-cover object-center lg:object-[20%_20%] hover-image-scale'
    />
  );
}
export function MorningstarDecoration() {
  return (
    <Image
      src='/HER_pattern.jpg'
      alt='Woman wearing a bold streetwear set with a black and white pattern'
      fill
      className='w-full h-full object-cover object-center lg:object-[50%_32%] hover-image-scale'
    />
  );
}
export function MorningstarVisuals() {
  return (
    <div role='img' className='relative aspect-4/3 rounded-2xl overflow-hidden'>
      <Image
        src='/morningstar-2.png'
        alt='Morningstar'
        fill
        className='object-cover object-center'
      />
    </div>
  );
}
