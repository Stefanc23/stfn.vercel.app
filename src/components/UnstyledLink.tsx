import Link, { LinkProps } from 'next/link';
import React from 'react';

export interface UnstyledLinkProps {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
  'aria-label'?: React.ComponentProps<'a'>['aria-label'];
}

const UnstyledLink: React.FC<UnstyledLinkProps> = ({
  href,
  children,
  openNewTab,
  className,
  nextLinkProps,
  'aria-label': ariaLabel = '',
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
    <Link
      href={href}
      {...nextLinkProps}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

export default UnstyledLink;
