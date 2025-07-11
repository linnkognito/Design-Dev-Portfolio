import DividerHorizontal from '../ui/DividerHorizontal';

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
    h1: 'text-[20px] sm:text-[24px] md:text-[40px] xl:text-[52px] font-medium tracking-[10px] leading-none max-xs:text-center',
    h2: 'text-[24px] md:text-[32px] font-semibold tracking-[20px] leading-none',
    h3: 'text-[18px] md:text-[24px] font-semibold tracking-[10px] leading-none',
  };

  const colorStyles = {
    pri: 'text-pri',
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
