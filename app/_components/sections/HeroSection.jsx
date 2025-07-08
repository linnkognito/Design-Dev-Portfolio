import AnimatedBorderButton from '../buttons/AnimatedBorderButton';
import H1 from '../text/H1';
import Header from '../ui/Header';

function HeroSection() {
  return (
    <article className='h-screen'>
      <Header />

      <section
        aria-labelledby='index-heading'
        className='relative flex flex-col items-center gap-10 w-full h-full sm:p-section'
      >
        <div className='flex flex-col gap-6 w-fit mx-auto pt-[15vh] pb-10'>
          <H1 />
          <p className='max-sm:text-center pl-1 text-xl sm:text-2xl font-medium tracking-wider'>
            Making performant look pretty.
          </p>
        </div>

        <AnimatedBorderButton />
      </section>
    </article>
  );
}

export default HeroSection;
