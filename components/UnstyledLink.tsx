import React from 'react';
import Link, { LinkProps } from 'next/link';

type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
};

const UnstyledLink: React.FC<UnstyledLinkProps> = ({
  href,
  children,
  openNewTab,
  className,
  nextLinkProps,
}) => {
  const shouldOpenInNewTab =
    openNewTab || !(href.startsWith('/') || href.startsWith('#'));

  return shouldOpenInNewTab ? (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={className}
    >
      {children}
    </a>
  ) : (
    <Link href={href} {...nextLinkProps}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default UnstyledLink;
