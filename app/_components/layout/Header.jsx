import { BsLinkedin, BsGithub } from 'react-icons/bs';
import NavWrapper from '@/_components/layout/NavWrapper';
import Link from 'next/link';

function Header({ ...props }) {
  return (
    <header
      className='flex items-center justify-between w-full max-w-header mx-auto px-10 py-6 sm:pt-12 sm:pb-6 border-b border-txt/30'
      {...props}
    >
      <NavWrapper />

      <div className='flex gap-4'>
        <Link href='https://www.linkedin.com/in/linn-es-johansen/'>
          <BsLinkedin className='text-pri text-xl hover:text-pop cursor-pointer' />
        </Link>
        <Link href='https://github.com/linnkognito'>
          <BsGithub className='text-pri text-xl hover:text-pop cursor-pointer' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
