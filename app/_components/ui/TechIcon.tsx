import techIcons from '@/_data/techIcons';
import { Technology } from '@/_types/project';

function TechIcon({ tech }: { tech: Technology }) {
  const IconComponent = techIcons[tech.icon];

  return (
    <div className='w-12 h-12 p-2 bg-pri/20 rounded-lg'>
      <IconComponent className='' />
    </div>
  );
}

export default TechIcon;
