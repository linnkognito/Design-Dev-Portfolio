function ButtonCTA({
  children,
  variant = 'left',
  color = 'base',
  ariaLabel = '',
  disabled = false,
  className = '',
  ...props
}) {
  const styles = {
    left: 'rounded-bl-full rounded-tr-full',
    right: 'rounded-tl-full rounded-br-full',
    pill: 'rounded-full',
  };

  const colors = {
    none: 'border-transparent',
    pri: 'border-pri hover:border-pri hover:bg-pri/20',
    pop: 'border-pop hover:border-pop hover:bg-pri/20',
    popHover: 'border-indigo-300 hover:border-pop hover:bg-pri/20',
  };

  return (
    <button
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        px-8 
        border-2 
        tracking-widest 
        font-medium hover:font-semibold  
        text-center 
        uppercase 
        anim-prep 
        transition-colors 
        cursor-pointer
        focus-ring
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${styles[variant]}
        ${colors[color]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonCTA;
