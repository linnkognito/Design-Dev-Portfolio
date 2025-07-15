import techIcons from '@/_data/techIcons';
import { Technology } from '@/_types/project';

function TechIcon({ tech }: { tech: Technology }) {
  const IconComponent = techIcons[tech.icon];

  return (
    <div
      role='img'
      title={tech.title}
      className='w-14 h-14 p-2 border-2 border-pri rounded-lg'
    >
      <IconComponent />
    </div>
  );
}

export default TechIcon;
