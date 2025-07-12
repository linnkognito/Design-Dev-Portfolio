type ButtonIconProps = {
  children: React.ReactNode;
  options: {
    title?: string;
    ariaLabel?: string;
    colors?: string;
  };
  onClick?: () => void;
  className?: string;
};

function ButtonIcon({
  children,
  options,
  onClick,
  className,
}: ButtonIconProps) {
  return (
    <button
      type='button'
      title={options.title}
      aria-label={options.ariaLabel}
      onClick={onClick}
      className={`group flex items-center justify-center rounded-lg transition-colors duration-300 cursor-pointer
      ${options.colors || 'bg-pop text-bgr hover:bg-pri'}
      ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
