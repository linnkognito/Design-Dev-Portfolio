import AnimatedBorderButton from '../buttons/AnimatedBorderButton';
import H1 from '../text/H1';
import Header from '../layout/Header';

function HeroSection() {
  return (
    <article className='h-fit sm:h-screen'>
      <Header />

      <section
        aria-labelledby='index-heading'
        className='relative flex flex-col items-center gap-10 w-full h-full max-sm:py-[15vh] sm:p-section'
      >
        <div className='flex flex-col gap-6 w-fit mx-auto sm:pt-[15vh] pb-10 max-sm:text-center'>
          <H1 />
          <p className='pl-1 text-xl sm:text-2xl font-medium tracking-wider'>
            Making performant look pretty.
          </p>
        </div>

        <AnimatedBorderButton />
      </section>
    </article>
  );
}

export default HeroSection;
