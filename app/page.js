import ProjectSection from './_components/sections/ProjectSection';
import HeroSection from './_components/sections/HeroSection';

function Home() {
  return (
    <main
      id='main-content'
      className='flex flex-col gap-10 w-full min-w-fit min-h-screen mx-auto px-6 pb-10'
    >
      <HeroSection />
      <ProjectSection />
    </main>
  );
}

export default Home;
