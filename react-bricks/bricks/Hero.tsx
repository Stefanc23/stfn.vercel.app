import React from 'react';
import { Text, Repeater, types } from 'react-bricks/frontend';
import Section from '../../components/Section';

//=============================
// Local Types
//=============================

export interface HeroProps {
  overline: string;
  title: string;
  tagline: string;
}

//=============================
// Component to be rendered
//=============================
const Hero: types.Brick<HeroProps> = () => {
  return (
    <Section
      id='hero'
      className='flex min-h-screen flex-col items-center justify-center text-center lg:-translate-y-16 lg:transform'
      isHero
    >
      <Text
        renderBlock={(props) => (
          <p className='text-xl md:text-2xl xl:text-3xl text-center font-light text-dark dark:text-white leading-tight mb-3'>
            {props.children}
          </p>
        )}
        placeholder='Type an overline...'
        propName='overline'
      />
      <Text
        renderBlock={(props) => (
          <h1 className='text-3xl md:text-4xl xl:text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary leading-tight mb-3'>
            {props.children}
          </h1>
        )}
        placeholder='Type a title...'
        propName='title'
      />
      <Text
        renderBlock={(props) => (
          <p className='text-lg md:text-xl xl:text-2xl text-center font-normal text-dark dark:text-white leading-tight'>
            {props.children}
          </p>
        )}
        placeholder='Type a tagline...'
        propName='tagline'
      />
      <Repeater
        propName='socials'
        renderWrapper={(items) => (
          <div className='flex gap-x-12 justify-center items-center mt-6'>
            {items}
          </div>
        )}
      />
      <Repeater
        propName='buttons'
        renderWrapper={(items) => (
          <div className='flex gap-x-5 justify-center items-center mt-6'>
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
Hero.schema = {
  name: 'hero',
  label: 'Hero',
  getDefaultProps: () => ({
    overline: "Hi! I'm",
    title: 'Stefano Christian Wiryana',
    tagline: 'I like to solve problems with code 🧑‍💻',
  }),
  repeaterItems: [
    {
      name: 'socials',
      itemType: 'social',
      itemLabel: 'Social',
      min: 0,
      max: 5,
    },
    {
      name: 'buttons',
      itemType: 'button',
      itemLabel: 'Button',
      min: 0,
      max: 3,
    },
  ],
};

export default Hero;
