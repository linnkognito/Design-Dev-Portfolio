import { projects } from './_data/projects';
import HeroSection from './_components/sections/HeroSection';
import ProjectSection from './_components/sections/ProjectSection';
import ProjectCard from './_components/ui/ProjectCard';

function Home() {
  return (
    <main
      id='main-content'
      className='flex flex-col gap-10 w-full min-h-screen mx-auto px-6 pb-10'
    >
      <HeroSection />

      <section id='project-section' className='flex flex-col gap-10'>
        {projects.map((project) => (
          <ProjectSection key={project.id}>
            <ProjectCard project={project} />
          </ProjectSection>
        ))}
      </section>
    </main>
  );
}

export default Home;
