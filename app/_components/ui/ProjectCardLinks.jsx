function ProjectCardLinks({ variant, links }) {
  const wrapperStyles = {
    card: 'mb-8 gap-5',
    page: 'max-xs-plus:order-1 h-full items-center justify-center gap-4 md:gap-5 max-xs-plus:mb-3',
  };
  const iconStyles = {
    card: 'w-8 h-8',
    page: 'w-6 h-6 md:w-8 md:h-8',
  };

  return (
    <button
      type='button'
      title='Open link'
      aria-label='Open link'
      className={`
        flex 
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
          ${iconStyles[variant]}
          ${link.colors}`}
        >
          <span className='text-bgr text-lg group-hover:cursor-pointer'>
            {link.icon}
          </span>
        </a>
      ))}
    </button>
  );
}

export default ProjectCardLinks;
