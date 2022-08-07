import React from 'react';
import { Repeater, types } from 'react-bricks/frontend';
import Section from '../../components/Section';

//=============================
// Local Types
//=============================

export interface ProjectsProps {
  title: string;
  subtitle: string;
}

//=============================
// Component to be rendered
//=============================
const Projects: types.Brick<ProjectsProps> = ({ title, subtitle }) => {
  return (
    <Section id='projects' title={title} subtitle={subtitle}>
      <Repeater
        propName='featured-projects'
        renderWrapper={(items) => (
          <div className='mt-28 flex flex-col space-y-24 max-w-[480px] md:max-w-3xl mx-auto'>
            {items}
          </div>
        )}
      />
    </Section>
  );
};

//=============================
// Brick Schema
//=============================
Projects.schema = {
  name: 'projects',
  label: 'Projects',
  getDefaultProps: () => ({
    title: 'Projects',
    subtitle: 'See My Featured Work',
  }),
  repeaterItems: [
    {
      name: 'featured-projects',
      itemType: 'featured-project',
      itemLabel: 'Featured Project',
      min: 0,
      max: 6,
    },
  ],
};

export default Projects;
