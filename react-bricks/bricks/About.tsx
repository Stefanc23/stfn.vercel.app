import React from 'react';
import { Image, Text, RichText, Repeater, types } from 'react-bricks/frontend';
import Section from '../../components/Section';

//=============================
// Local Types
//=============================

export interface AboutProps {
  title: string;
  subtitle: string;
}

//=============================
// Component to be rendered
//=============================
const About: types.Brick<AboutProps> = ({ title, subtitle }) => {
  return (
    <Section id='about' title={title} subtitle={subtitle}>
      <div className='max-w-[720px] mt-32 mx-auto md:ml-[25%] grid grid-cols-1 md:grid-cols-3 md:gap-x-12'>
        <Image
          propName='profileImage'
          alt='profile-image'
          imageClassName='w-48 md:w-full mx-auto rounded-full shadow-xl'
        />
        <article className='col-span-2 mt-12 md:mt-0'>
          <RichText
            renderBlock={(props) => (
              <h2 className='text-base md:text-lg xl:text-xl font-medium text-dark dark:text-light'>
                {props.children}
              </h2>
            )}
            placeholder='Type an intro...'
            propName='intro'
            allowedFeatures={[types.RichTextFeatures.Highlight]}
            renderHighlight={(props) => (
              <span className='text-primary'>{props.children}</span>
            )}
          />
          <RichText
            renderBlock={(props) => (
              <p className='text-base text-dark dark:text-light mt-4 leading-5'>
                {props.children}
              </p>
            )}
            placeholder='Type anything...'
            propName='content'
            allowedFeatures={[types.RichTextFeatures.Highlight]}
            renderHighlight={(props) => (
              <span className='text-primary'>{props.children}</span>
            )}
          />
          <Repeater
            propName='highlights'
            renderWrapper={(items) => (
              <div className='max-w-[320px] mt-6 grid grid-cols-2 gap-x-3 gap-y-4'>
                {items}
              </div>
            )}
          />
          <Repeater
            propName='buttons'
            renderWrapper={(items) => <div className='w-fit mt-6'>{items}</div>}
          />
        </article>
      </div>
    </Section>
  );
};

//=============================
// Brick Schema
//=============================
About.schema = {
  name: 'about',
  label: 'About',
  getDefaultProps: () => ({
    title: 'About',
    subtitle: 'Know More About Me',
    intro: 'Hi',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat provident possimus magni distinctio qui deserunt assumenda deleniti dolore a excepturi?',
  }),
  repeaterItems: [
    {
      name: 'highlights',
      itemType: 'list-item',
      itemLabel: 'Highlight',
      min: 0,
      max: 6,
    },
    {
      name: 'buttons',
      itemType: 'button',
      itemLabel: 'Button',
      min: 0,
      max: 1,
    },
  ],
};

export default About;
