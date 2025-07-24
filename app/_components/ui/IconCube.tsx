import Image from 'next/image';
import LazyLoadContainer from '../motion/LazyLoadContainer';

type IconCubeProps = {
  icon: string;
  alt?: string;
  bgColor: 'bg-txt' | 'bg-pop' | 'bg-pri' | 'bg-sec' | 'bg-bgr';
  className?: string;
};

function IconCube({ icon, alt, bgColor, className }: IconCubeProps) {
  return (
    <LazyLoadContainer
      tag='div'
      aria-hidden='true'
      className={`relative flex items-center justify-center p-6 ${bgColor} rounded-2xl aspect-square ${className}`}
    >
      <Image
        src={icon}
        alt={alt || `${icon} icon`}
        fill
        className='object-center object-contain p-2'
      />
    </LazyLoadContainer>
  );
}

export default IconCube;
