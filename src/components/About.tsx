'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';

import Section from '@/components/Section';
import { fadeIn } from '@/utils/motions';
import profileImage from '@/images/profile.jpg';
import Card from '@/components/Card';

const skills = [
  {
    title: 'Programming Languages',
    items: ['Typescript & Javascript', 'PHP', 'Dart', 'Python'],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      'React',
      'Next.js',
      'Laravel',
      'Flutter',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Databases & Other Tools',
    items: [
      'MySQL/MariaDB',
      'MongoDB',
      'Postgres',
      'Git',
      'Firebase',
      'Vercel',
      'Figma',
    ],
  },
];

const About = () => {
  return (
    <Section id="about" title="A Little Bit About Myself" overline="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-12 mt-20">
        <div className="order-last md:order-first max-w-prose md:col-span-2 text-lg">
          <motion.p variants={fadeIn('up', 'spring', 0.25, 1.25)}>
            Hi! I&apos;m Stefano Christian Wiryana, a software developer based
            in Indonesia. In 2023, I graduated from BINUS University with a
            Bachelor&apos;s degree in Computer Science. I am currently open to
            remote full-time opportunities or freelance projects.
          </motion.p>
          <motion.p
            className="mt-5"
            variants={fadeIn('up', 'spring', 0.5, 1.25)}
          >
            As a developer, I strive to solve problems through code. I have
            experience in building web applications using several technologies,
            mainly with Laravel and React. I also have experience in building
            mobile applications using Flutter. Aside from that, I also have a
            keen interest in game development and artificial intelligence.
          </motion.p>
          <motion.p
            className="mt-5"
            variants={fadeIn('up', 'spring', 0.75, 1.25)}
          >
            This website serves as a portfolio of my work and a journal of my
            career as a developer. Feel free to explore. It will be updated from
            time to time as I grow my skills and expertise.
          </motion.p>
        </div>
        <motion.div
          className="relative flex justify-center group"
          variants={fadeIn('up', 'spring', 0.75, 1.25)}
        >
          <div className="absolute w-[250px] h-[250px] md:w-[250px] md:h-[375px] rounded-full md:rounded-lg bg-gradient-to-br from-primary to-secondary blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
          <div className="relative">
            <Image
              className="w-[250px] h-[250px] md:w-[250px] md:h-[375px] rounded-full md:rounded-lg"
              src={profileImage}
              alt="Profile Image"
              width={250}
              height={375}
              quality={100}
              placeholder="blur"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </motion.div>
      </div>
      <div id="skills" className="mt-12">
        <motion.h2
          className="text-lg md:text-2xl 2xl:text-3xl mb-8 font-semibold"
          variants={fadeIn('up', 'spring', 1, 1.25)}
        >
          Some of My Technical Skills
        </motion.h2>
        <div className="mt-3 w-full grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8">
          {skills.map(({ title, items }, i) => (
            <motion.div
              className="flex items-stretch"
              key={`technologies-${title.replaceAll(' ', '-')}`}
              variants={fadeIn('up', 'spring', 1 + 0.25 * i, 1.25)}
            >
              <Card
                subTitle={title}
                cardClassName="!bg-slate-300 dark:!bg-slate-700"
                headerClassName="!text-primary text-center"
                contentClassName="flex flex-col justify-center"
                noHighlight
              >
                {items.map((item) => (
                  <p
                    key={item}
                    className="flex items-center space-x-2 text-primary"
                  >
                    <FiCheck />
                    <span className="text-dark dark:text-light">{item}</span>
                  </p>
                ))}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
