import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import Heading from './Heading';

function PageHeading({ children, id = '', border = true, ...props }) {
  return (
    <>
      <Heading
        id={id}
        tag='h1'
        color='txt'
        className={`w-full sm:max-w-4/5 mx-auto text-center`}
        {...props}
      >
        {children}
      </Heading>
      {border && (
        <DividerHorizontal width='w-9/10' margin='mt-[40px] mx-auto' />
      )}
    </>
  );
}

export default PageHeading;
