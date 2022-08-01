import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import OuterClickListener from './OuterClickListener';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const links = [
    { href: 'https://medium.com/@stefanocw', label: 'Blog' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <header className='fixed bottom-0 z-50 w-full bg-transparent py-4 lg:sticky lg:top-0'>
      <div className='mx-auto w-11/12 flex items-center justify-between'>
        <Link href='/'>
          <Image
            className='cursor-pointer'
            src='/logo.webp'
            alt='logo'
            width={48}
            height={48}
          />
        </Link>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            <li className='lg:hidden'>
              <button
                className={`${
                  expanded && 'text-primary'
                } ml-auto inline-flex translate-y-0.5 rounded p-3 outline-none hover:text-primary lg:hidden`}
                onClick={handleClick}
                aria-label={expanded ? 'Hide menu' : 'Show menu'}
              >
                <div className='flex h-6 w-6 items-center justify-center'>
                  {expanded ? (
                    <span className='text-xl'>X</span>
                  ) : (
                    <svg
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  )}
                </div>
              </button>
            </li>
            <ul className='hidden lg:flex lg:space-x-4'>
              {links.map(({ href, label }) => (
                <li
                  key={`${href}${label}`}
                  className='text-primary hover:text-secondary transition-colors'
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </ul>

          {expanded && (
            <ul className='fixed bottom-20 right-[8%] border-r-2 border-primary bg-transparent px-4 py-2 text-right md:right-[6%] lg:hidden'>
              <OuterClickListener action={handleClick}>
                {links.map(({ href, label }) => (
                  <li
                    key={`${href}${label}`}
                    className='mb-3 last:mb-0 text-primary hover:text-secondary transition-colors'
                  >
                    <Link href={href}>{label}</Link>
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
