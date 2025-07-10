function ProjectCardLinks({ links }) {
  return (
    <div className='flex gap-5 mb-8'>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          title={link.title}
          aria-label={link.alt}
          target='_blank'
          rel='noopener noreferrer'
          className={`group flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-300 ${link.colors}`}
        >
          <button className='text-bgr text-lg group-hover:cursor-pointer'>
            {link.icon}
          </button>
        </a>
      ))}
    </div>
  );
}

export default ProjectCardLinks;
