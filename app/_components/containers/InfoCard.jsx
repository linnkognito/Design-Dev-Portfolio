import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ButtonCTA from '@/_components/buttons/ButtonCTA';
import Heading from '@/_components/text/Heading';

function InfoCard({
  children,
  title = '',
  width = 'w-full xl:max-w-1/3',
  button = null,
}) {
  return (
    <div
      className={`flex flex-col flex-1 max-sm:max-w-[350px] gap-2 min-h-fit xl:min-h-[400px] p-div bg-bgr/80 rounded-[1.8rem] border border-pri/40 shadow-lg shadow-sdw/40 ${width}`}
    >
      <Heading
        tag='h3'
        color='pop'
        className='flex-center flex-1 max-h-[60px] text-center'
      >
        {title}
      </Heading>

      <DividerHorizontal />

      <div className='flex-1 flex flex-col gap-2 py-2 px-4'>{children}</div>

      <DividerHorizontal />

      {button && (
        <ButtonCTA variant='right' className='mt-auto text-pop'>
          {button}
        </ButtonCTA>
      )}
    </div>
  );
}

export default InfoCard;
