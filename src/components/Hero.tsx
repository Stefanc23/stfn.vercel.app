'use client';

import { motion } from 'framer-motion';

import Button from '@/components/Button';
import Section from '@/components/Section';
import { fadeIn } from '@/utils/motions';
import { FaFilePdf } from 'react-icons/fa';

const Hero = ({ tagline, resumeUrl }: any) => {
  return (
    <Section
      id="hero"
      className="min-h-screen flex flex-col justify-center md:justify-start lg:flex-row lg:-translate-y-24 lg:transform"
      isHero
    >
      <article className="flex flex-col justify-center lg:w-2/3">
        <motion.h2
          className="text-2xl md:text-4xl 2xl:text-5xl font-semibold leading-wide"
          variants={fadeIn('up', 'spring', 0, 0.75)}
        >
          Hi!
        </motion.h2>
        <motion.h1
          className="mt-3 text-3xl md:text-5xl 2xl:text-6xl font-bold leading-wide"
          variants={fadeIn('up', 'spring', 0.25, 0.75)}
        >
          My Name is&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
            Stefano
          </span>
        </motion.h1>
        <motion.p
          className="mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6 md:text-lg 2xl:text-xl"
          variants={fadeIn('up', 'spring', 0.5, 0.75)}
        >
          {tagline}
        </motion.p>
        <motion.ul
          className="mt-10 flex space-x-8"
          variants={fadeIn('up', 'spring', 0.75, 0.75)}
        >
          <li>
            <Button
              variant="solid"
              highlight
              onClick={() => {
                window.open('#projects', '_self');
              }}
            >
              See my work
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              onClick={() => {
                window.open(`${resumeUrl}?dl=`, '_blank');
              }}
            >
              <FaFilePdf />
              &nbsp;Download Resume
            </Button>
          </li>
        </motion.ul>
      </article>
    </Section>
  );
};

export default Hero;
