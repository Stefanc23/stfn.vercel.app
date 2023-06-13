import React from 'react';
import { motion } from 'framer-motion';

import { staggerContainer, textVariant } from '@/utils/motions';

type SectionProps = {
  id: string;
  className?: string;
  children?: React.ReactNode;
} & (
  | { isHero: true; title?: never; subtitle?: never }
  | { isHero?: false; title: string; subtitle: string }
);

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  isHero,
  title,
  subtitle,
}) => {
  return (
    <motion.section
      id={id}
      className={`max-w-[69rem] mx-auto w-11/12 mb-32 pt-16
      } ${className}`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {!isHero && (
        <motion.div variants={textVariant()}>
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary leading-tight mb-2">
            {title}
          </h1>
          <p className="text-sm md:text-base xl:text-lg text-center font-light text-dark/80 dark:text-white/80 leading-tight">
            {subtitle}
          </p>
        </motion.div>
      )}

      {children}
    </motion.section>
  );
};

export default Section;
