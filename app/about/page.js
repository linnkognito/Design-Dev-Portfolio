import PageWrapper from '../_components/containers/PageWrapper';
import AboutSectionIntro from '../_components/about/AboutSectionIntro';

function Page() {
  return (
    <PageWrapper aria-labelledby='about-heading'>
      <article className='flex flex-col gap-10 w-full px-6'>
        <AboutSectionIntro />
      </article>
    </PageWrapper>
  );
}

export default Page;
