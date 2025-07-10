function ProjectCardLinks({ variant, links }) {
  const wrapperStyles = {
    card: 'mb-8',
    page: 'h-full items-center justify-center',
  };
  const iconStyles = {
    card: 'w-8 h-8',
    page: 'w-6 h-6 md:w-8 md:h-8',
  };

  return (
    <div
      className={`
        flex gap-5 
        ${wrapperStyles[variant]}`}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          title={link.title}
          aria-label={link.alt}
          target='_blank'
          rel='noopener noreferrer'
          className={`group flex items-center justify-center rounded-lg transition-colors 
          duration-300
          gap-5
          ${iconStyles[variant]}
          ${link.colors}`}
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
