export type Link = {
  href: string;
  label: string;
};

export type PathName = string;

export type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: 'default' | 'project';
  pathname?: PathName;
  onClick?: () => void;
  className?: string;
};

export type MobileNavProps = {
  pathname: PathName;
  links: Link[];
};
