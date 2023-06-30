'use client';

import { Key, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

import Section from '@/components/Section';
import PillButton from '@/components/PillButton';
import Card from '@/components/Card';
import UnstyledLink from '@/components/UnstyledLink';
import { urlForImage } from '@/sanity/lib/image';
import { fadeIn, staggerContainer } from '@/utils/motions';

const Projects = ({ data }: any) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredData, setFilteredData] = useState(data);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // get all different categories
  const categories = Array.from(
    new Set(data.map(({ category }: { category: string }) => category))
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (category === 'all') {
        setFilteredData(data);
      } else {
        setFilteredData(
          data.filter((project: any) => project.category === category)
        );
      }
    }, 500);
  };

  return (
    <Section id="projects" title="Showcase of My Work" overline="Projects">
      <div className="px-4 mx-auto w-full mt-20">
        <motion.div
          className="flex justify-center w-full items-center"
          variants={fadeIn('down', 'spring', 0.25)}
        >
          <PillButton
            variant={selectedCategory === 'all' ? 'solid' : 'outline'}
            onClick={() => handleCategoryChange('all')}
            disabled={selectedCategory === 'all'}
          >
            All
          </PillButton>
          {categories.map((category) => (
            <PillButton
              key={category as Key}
              variant={selectedCategory === category ? 'solid' : 'outline'}
              onClick={() => handleCategoryChange(category as string)}
              disabled={selectedCategory === category}
              className="ml-3"
            >
              {category as string}
            </PillButton>
          ))}
        </motion.div>
        <motion.div
          variants={staggerContainer()}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5"
        >
          {filteredData.map(
            (
              { name, description, image, repoLink, demoLink }: any,
              i: number
            ) => (
              <motion.div
                key={name}
                animate={animateCard}
                transition={{
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}
              >
                <Card
                  title={
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                      {name}
                    </span>
                  }
                  cardClassName="!p-5 border border-primary hover:scale-105 transition duration-300 ease-in-out"
                  noHighlight
                >
                  <p className="mt-2 mb-5 h-[69px] hyphens-auto">
                    {description}
                  </p>
                  <Image
                    src={urlForImage(image).url()}
                    alt={name}
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                  <div className="flex justify-center mt-5 w-full justify-between">
                    {repoLink && (
                      <UnstyledLink
                        href={repoLink}
                        className="flex justify-center items-center text-sm text-primary hover:text-secondary hover-underline"
                      >
                        See Code
                        <FaCode className="ml-2 text-lg" />
                      </UnstyledLink>
                    )}
                    {demoLink && (
                      <UnstyledLink
                        href={demoLink}
                        className="flex justify-center items-center text-sm text-primary hover:text-secondary hover-underline"
                      >
                        See Demo
                        <FaExternalLinkAlt className="ml-2 text-lg" />
                      </UnstyledLink>
                    )}
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default Projects;
