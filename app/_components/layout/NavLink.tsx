import { NavLinkProps } from '@/_types/nav';
import Link from 'next/link';

function NavLink({
  children,
  href,
  pathname,
  variant = 'default',
  onClick,
  className,
}: NavLinkProps) {
  const isActive = pathname === href;

  const styles = {
    default: 'border-b border-transparent hover:border-pop',
    project: 'hover:text-pop',
  };

  return (
    <li
      role='menuitem'
      className={`
        pb-2 tracking-wider uppercase cursor-pointer
        transition-colors duration-300
        ${isActive ? 'text-pop hover:text-txt tracking-widest' : 'text-txt'} 
        ${styles[variant]}
        ${className}
      `}
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
