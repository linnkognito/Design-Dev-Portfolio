import { BsLinkedin, BsGithub } from 'react-icons/bs';
import NavWrapper from '@/_components/layout/NavWrapper';
import Link from 'next/link';

function Header({ ...props }) {
  return (
    <header
      className='flex items-center justify-end w-full max-w-header mx-auto pl-4 pr-6 md:px-10 py-6 sm:pt-12 sm:pb-6'
      {...props}
    >
      <div className='flex gap-4'>
        <Link href='https://www.linkedin.com/in/linn-es-johansen/'>
          <BsLinkedin className='w-6 h-6 text-pop text-xl hover:text-txt cursor-pointer' />
        </Link>
        <Link href='https://github.com/linnkognito'>
          <BsGithub className='w-6 h-6 text-pri text-xl hover:text-txt cursor-pointer' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
