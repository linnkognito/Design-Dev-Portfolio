import techIcons from '@/_data/techIcons';
import { Technology } from '@/_types/project';

function TechIcon({ tech }: { tech: Technology }) {
  const IconComponent = techIcons[tech.icon];

  return (
    <div
      role='img'
      title={tech.title}
      className='w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 p-2 border-2 border-pri rounded-lg cursor-help'
    >
      <IconComponent />
    </div>
  );
}

export default TechIcon;
