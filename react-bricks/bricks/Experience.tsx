import React from 'react';
import { Repeater, types } from 'react-bricks/frontend';
import Section from '../../components/Section';

//=============================
// Local Types
//=============================

export interface ExperienceProps {
  title: string;
  subtitle: string;
}

//=============================
// Component to be rendered
//=============================
const Experience: types.Brick<ExperienceProps> = ({ title, subtitle }) => {
  return (
    <Section id='experience' title={title} subtitle={subtitle}>
      <Repeater
        propName='experiences'
        renderWrapper={(items) => (
          <div className='flex flex-col gap-y-12 w-full max-w-[720px] mt-16 mx-auto'>
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
Experience.schema = {
  name: 'experience',
  label: 'Experience',
  getDefaultProps: () => ({
    title: 'Experience',
    subtitle: 'Learn About My Professional Journey',
  }),
  repeaterItems: [
    {
      name: 'experiences',
      itemType: 'card',
      itemLabel: 'Experiences',
      min: 0,
      max: 6,
    },
  ],
};

export default Experience;
