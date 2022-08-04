import React from 'react';
import { Text, RichText, types } from 'react-bricks/frontend';

//=============================
// Local Types
//=============================

export interface CardProps {
  overline: string;
  title: string;
  subtitle: string;
  content: string;
}

//=============================
// Component to be rendered
//=============================
const Card: types.Brick<CardProps> = ({ ...rest }) => {
  return (
    <div className='relative group' {...rest}>
      <div className='absolute -inset-0.5 rounded-lg bg-gradient-to-br from-primary to-secondary blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-tilt'></div>
      <div className='m-0.5 relative p-8 rounded-lg bg-light dark:bg-dark flex flex-col'>
        <Text
          renderBlock={(props) => (
            <p className='text-xs font-light text-primary'>{props.children}</p>
          )}
          placeholder='Type an overline...'
          propName='overline'
        />
        <Text
          renderBlock={(props) => (
            <p className='text-lg md:text-xl xl:text-2xl font-semibold text-dark dark:text-white mb-1'>
              {props.children}
            </p>
          )}
          placeholder='Type a title...'
          propName='title'
        />
        <Text
          renderBlock={(props) => (
            <p className='text-sm xl:text-md font-light italic text-gray-300 mb-4'>
              {props.children}
            </p>
          )}
          placeholder='Type a subtitle...'
          propName='subtitle'
        />
        <RichText
          renderBlock={(props) => (
            <p className='text-md text-dark dark:text-light leading-6'>
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
      </div>
    </div>
  );
};

export default Card;

//=============================
// Brick Schema
//=============================
Card.schema = {
  name: 'card',
  label: 'Card',
  getDefaultProps: () => ({
    overline: 'Overline',
    title: 'Title',
    subtitle: 'Subtitle',
    content: 'Content',
  }),
};
