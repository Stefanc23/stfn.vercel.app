import React from 'react';

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
    <section
      id={id}
      className={`max-w-[68.75rem] mx-auto w-11/12 mb-32 ${
        !isHero && 'pt-16'
      } ${className}`}
    >
      {!isHero && (
        <>
          <h1 className='text-2xl md:text-3xl xl:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary leading-tight mb-2'>
            {title}
          </h1>
          <p className='text-sm md:text-md xl:text-lg text-center font-light text-dark/80 dark:text-white/80 leading-tight'>
            {subtitle}
          </p>
        </>
      )}

      {children}
    </section>
  );
};

export default Section;
