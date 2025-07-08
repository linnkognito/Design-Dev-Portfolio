import ContactInfo from '@/_components/connect/ContactInfo';

function Page() {
  return (
    <article
      aria-labelledby='contact-PageHeading'
      className='flex-center flex-col w-full min-w-fit p-section bg-bgr/50 backdrop-blur-sm border border-pri/30'
    >
      <ContactInfo />
    </article>
  );
}

export default Page;
