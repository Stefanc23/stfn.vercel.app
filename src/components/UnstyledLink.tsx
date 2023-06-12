import React from 'react';
import Link, { LinkProps } from 'next/link';

export interface UnstyledLinkProps {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
}

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
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...nextLinkProps}
      className={className}
    >
      {children}
    </Link>
  ) : (
    <Link href={href} {...nextLinkProps} className={className}>
      {children}
    </Link>
  );
};

export default UnstyledLink;
