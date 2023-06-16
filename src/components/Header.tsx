'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import { motion } from 'framer-motion';

import OuterClickListener from '@/components/OuterClickListener';
import UnstyledLink from '@/components/UnstyledLink';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { fadeIn } from '@/utils/motions';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [headerBg, setHeaderBg] = useState('bg-transparent');
  const links = [
    { href: 'https://medium.com/@stefanocw', label: 'Blog' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
  ];

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 23
        ? setHeaderBg('bg-light dark:bg-dark')
        : setHeaderBg('bg-transparent');
    });
  }, []);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <header
      className={`fixed bottom-0 z-50 w-full py-5 md:py-8 md:sticky md:top-0 ${headerBg}`}
    >
      <div className="max-w-[69rem] mx-auto w-11/12 flex items-center justify-between">
        <div className="flex">
          <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              duration: 1.25,
            }}
          >
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
          </motion.div>

          <motion.ul
            className="ml-20 flex items-center space-x-4 text-2xl text-primary"
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              duration: 1.25,
              delay: 0.25,
            }}
          >
            <li className="text-base hidden md:block">Reach out to me:</li>
            <li
              className="hover:text-secondary transition-colors"
              title="stefanowiryana@gmail.com"
            >
              <UnstyledLink href="mailto:stefanowiryana@gmail.com">
                <ImMail4 />
              </UnstyledLink>
            </li>
            <li
              className="hover:text-secondary transition-colors"
              title="github.com/stefanc23"
            >
              <UnstyledLink href="https://github.com/stefanc23">
                <FaGithub />
              </UnstyledLink>
            </li>
            <li
              className="hover:text-secondary transition-colors"
              title="linkedin.com/in/stefanowiryana"
            >
              <UnstyledLink href="https://linkedin.com/in/stefanowiryana">
                <FaLinkedin />
              </UnstyledLink>
            </li>
          </motion.ul>
        </div>

        <motion.nav
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 1.25,
          }}
        >
          <ul className="flex items-center justify-between space-x-4 md:flex-row flex-row-reverse">
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
            <ul className="fixed bottom-20 right-[8%] border-r-2 border-primary opacity-80 px-4 py-2 text-right md:right-[6%] md:hidden">
              <OuterClickListener action={handleClick}>
                {links.map(({ href, label }, index) => (
                  <motion.li
                    key={`${href}${label}`}
                    className="mb-3 last:mb-0 text-primary hover:text-secondary transition-colors"
                    variants={fadeIn('up', 'spring', index * 0.1, 0.25)}
                    initial="hidden"
                    whileInView="show"
                  >
                    <UnstyledLink href={href}>{label}</UnstyledLink>
                  </motion.li>
                ))}
              </OuterClickListener>
            </ul>
          )}
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
