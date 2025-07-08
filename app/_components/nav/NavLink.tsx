import { NavLinkProps } from '@/_types/nav';
import Link from 'next/link';

function NavLink({
  children,
  href,
  pathname,
  onClick,
  className,
}: NavLinkProps) {
  const isActive = pathname === href;

  return (
    <li
      role='menuitem'
      className={`pb-2 tracking-wider uppercase cursor-pointer border-b border-transparent hover:border-pop  
        ${isActive ? 'text-pop hover:text-txt tracking-widest' : 'text-txt'} 
      ${className}`}
    >
      <Link
        href={href}
        role='menuitem'
        aria-current={isActive ? 'page' : undefined}
        className='focus-ring'
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
