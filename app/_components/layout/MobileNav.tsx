'use client';

import { useRef, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@/_types/nav';
import NavLink from './NavLink';
import useDismiss from '@/_hooks/useDismiss';

type MobileNavProps = {
  pathname: string;
  links: Link[];
};

function MobileNav({ pathname, links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useDismiss(dropdownRef, isOpen, setIsOpen);

  return (
    <div ref={dropdownRef} className='md:hidden relative flex items-center'>
      <button
        className='hover:text-pri cursor-pointer hover:scale-110 will-change-transform duration-300 ease-in-out'
        onClick={toggleMenu}
      >
        {isOpen ? (
          <XMarkIcon className='size-8 text-pop hover:text-pri transition-colors' />
        ) : (
          <Bars3Icon className='size-8 hover:text-pop transition-colors' />
        )}
      </button>

      {isOpen && (
        <div
          className='absolute top-12 -left-4 w-50 mt-2 p-div bg-bgr border border-t-txt/50 border-x-txt/50 rounded-b-lg shadow-xl shadow-bgr z-100'
          role='menu'
        >
          <ul className='flex flex-col gap-4'>
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                pathname={pathname}
                onClick={toggleMenu}
                className='hover:pl-2 transition-[padding-left] duration-400 ease-in-out'
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
