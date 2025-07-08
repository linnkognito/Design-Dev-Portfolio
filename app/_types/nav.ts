export type Link = {
  href: string;
  label: string;
};

export type PathName = string;

export type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  pathname: PathName;
  onClick?: () => void;
  className?: string;
};

export type MobileNavProps = {
  pathname: PathName;
  links: Link[];
};
