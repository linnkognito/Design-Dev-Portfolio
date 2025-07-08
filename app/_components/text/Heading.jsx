import DividerHorizontal from '../dividers/DividerHorizontal';

function Heading({
  children,
  id = '',
  tag: Tag = 'h2',
  color = 'txt',
  stylized = false,
  srOnly = false,
  className = '',
  ...props
}) {
  const baseStyles = {
    h1: 'w-full sm:max-w-4/5 mx-auto text-center tracking-[16px] sm:tracking-[24px] tshadow-glow',
    h2: 'text-center tracking-[0.75em] font-semibold',
    h3: '',
  };

  const fontSize = {
    h1: 'text-xl sm:text-2xl md:text-[40px]',
    h2: 'text-lg sm:text-xl md:text-2xl',
    h3: 'text-base sm:text-lg md:text-xl',
  };

  const colorStyles = {
    pri: 'text-pri',
    acc: 'text-acc',
    pop: 'text-pop',
    txt: 'text-txt',
  };

  return (
    <>
      {stylized && <DividerHorizontal width='w-full' margin='mb-4' />}
      <Tag
        id={id}
        className={`
        text-heading 
        font-semibold 
        uppercase 
        ${baseStyles[Tag]} 
        ${fontSize[Tag]}
        ${colorStyles[color]} 
        ${className} 
        ${srOnly ? 'sr-only' : ''}`}
        {...props}
      >
        {children}
      </Tag>
    </>
  );
}

export default Heading;
