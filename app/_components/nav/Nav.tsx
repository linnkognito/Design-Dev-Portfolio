import { PathName } from '@/_types/nav';
import NavLink from './NavLink';
import MobileNav from './MobileNav';

function Nav({ pathname }: { pathname: PathName }) {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav aria-label='Main navigation' role='navigation'>
      <MobileNav pathname={pathname} links={navLinks} />

      {/* Desktop nav */}
      <ul
        className='hidden md:flex gap-16'
        role='menubar'
        aria-label='Main menu'
      >
        {navLinks.map((li) => (
          <NavLink key={li.label} pathname={pathname} href={li.href}>
            {li.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
