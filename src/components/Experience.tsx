'use client';

import { motion } from 'framer-motion';

import Section from '@/components/Section';
import ExperienceCard from '@/components/ExperienceCard';
import { fadeIn } from '@/utils/motions';

const Experience = () => {
  return (
    <Section id="experience" title="My Career Journey" overline="Experience">
      <div className="container max-w-5xl px-4 mx-auto">
        <ol className="flex flex-col gap-y-12 w-full max-w-[720px] mx-auto mt-20">
          <motion.li variants={fadeIn('up', 'spring', 0.5, 1.25)}>
            <ExperienceCard
              from="Mar 2022"
              until="Feb 2023"
              title="Programmer"
              type="Internship"
              company="Polytron"
              location="Kudus, Indonesia"
              detail="I worked as a Programmer intern at Polytron for a year. My job was to develop and integrate multiple web applications into an existing information system. The applications include a project management application, reporting applications that fetch data from SAP, applications for managing software licenses, applications that manipulates SAP data, and more."
            />
          </motion.li>
          <motion.li variants={fadeIn('up', 'spring', 1, 1.25)}>
            <ExperienceCard
              from="Oct 2021"
              until="Dec 2021"
              title="Mobile & Software Engineer"
              type="Internship"
              company="NHS England"
              location="Remote"
              detail="I developed a care home app as a Mobile & Software Engineer intern in a four-month global internship program organized by PT. Inovasi Telematika Nusantara in partnership with The Royal European Internship Council and NHS England."
            />
          </motion.li>
        </ol>
      </div>
    </Section>
  );
};

export default Experience;
