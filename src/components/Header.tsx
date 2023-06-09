'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import OuterClickListener from './OuterClickListener';
import UnstyledLink from './UnstyledLink';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const links = [
    { href: 'https://medium.com/@stefanocw', label: 'Blog' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
  ];

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <header className="fixed bottom-0 z-50 w-full bg-transparent py-5 md:sticky md:top-0">
      <div className="max-w-[56.25rem] mx-auto w-11/12 flex items-center justify-between">
        <Link href="/">
          <Image
            className="cursor-pointer rounded-full"
            src="/logo.svg"
            alt="logo"
            width={48}
            height={48}
            quality={100}
            placeholder="blur"
            blurDataURL="/favicon.ico"
            priority
          />
        </Link>
        <nav>
          <ul className="flex items-center justify-between space-x-4">
            <li className="md:hidden">
              <button
                className={`${
                  expanded && 'text-primary'
                } ml-auto inline-flex  rounded p-3 outline-none hover:text-primary md:hidden`}
                onClick={handleClick}
                aria-label={expanded ? 'Hide menu' : 'Show menu'}
              >
                <div className="flex items-center text-2xl text-primary">
                  {expanded ? <MdOutlineClose /> : <MdMenu />}
                </div>
              </button>
            </li>
            <ul className="hidden md:flex md:space-x-4">
              {links.map(({ href, label }) => (
                <li
                  key={`${href}${label}`}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <UnstyledLink href={href}>{label}</UnstyledLink>
                </li>
              ))}
            </ul>
            <li className="ml-3">
              <ThemeSwitcher />
            </li>
          </ul>

          {expanded && (
            <ul className="fixed bottom-20 right-[8%] border-r-2 border-primary bg-transparent px-4 py-2 text-right md:right-[6%] md:hidden">
              <OuterClickListener action={handleClick}>
                {links.map(({ href, label }) => (
                  <li
                    key={`${href}${label}`}
                    className="mb-3 last:mb-0 text-primary hover:text-secondary transition-colors"
                  >
                    <UnstyledLink href={href}>{label}</UnstyledLink>
                  </li>
                ))}
              </OuterClickListener>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
