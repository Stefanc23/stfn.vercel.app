import React from 'react';
import { Image, Text, RichText, types, Link } from 'react-bricks/frontend';
import { FiCheck } from 'react-icons/fi';

//=============================
// Local Types
//=============================

export interface FeaturedProjectProps {
  title: string;
  content: string;
  imageSide: 'left' | 'right';
  highlights: string;
  demoLink: string;
  codeLink: string;
}

//=============================
// Component to be rendered
//=============================
const FeaturedProject: types.Brick<FeaturedProjectProps> = ({
  imageSide,
  highlights,
  demoLink,
  codeLink,
  ...rest
}) => {
  return (
    <div
      className={`flex flex-col flex-no-wrap flex-col-reverse w-full md:space-x-8 ${
        imageSide === 'right'
          ? 'md:flex-row'
          : 'md:flex-row-reverse md:space-x-reverse'
      }`}
      {...rest}
    >
      <article className='w-full md:flex-1 flex flex-col'>
        <Text
          renderBlock={(props) => (
            <h2 className='text-lg md:text-xl xl:text-2xl font-semibold text-primary mb-4'>
              {props.children}
            </h2>
          )}
          placeholder='Type a title...'
          propName='title'
        />
        <RichText
          renderBlock={(props) => (
            <p className='text-base text-dark dark:text-light leading-6'>
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
        {highlights && (
          <div className='max-w-[320px] mt-4 grid grid-cols-2 gap-x-1 gap-y-3'>
            {highlights
              .replaceAll(',', '\n')
              .replaceAll(';', '\n')
              .split('\n')
              .map((highlight) => (
                <div
                  key={highlight.trim()}
                  className='flex justify-start items-center text-sm'
                >
                  <div className='flex justify-center items-center w-5 h-5 rounded-full text-sm text-light bg-primary mr-2'>
                    <FiCheck />
                  </div>
                  <p className='dark:text-light text-dark'>
                    {highlight.trim()}
                  </p>
                </div>
              ))}
          </div>
        )}
        {(demoLink || codeLink) && (
          <div className='w-fit mt-6 flex space-x-4'>
            {demoLink && (
              <Link
                href={demoLink}
                target='_blank'
                className='text-sm md:text-base text-medium rounded-full transition-color duration-300 ease-in-out cursor-pointer min-w-[120px] w-fit px-4 py-1.5 flex justify-center items-center bg-primary text-light hover:bg-gradient-to-br hover:from-primary hover:to-secondary'
              >
                See Demo
              </Link>
            )}
            {codeLink && (
              <Link
                href={codeLink}
                target='_blank'
                className='text-sm md:text-base text-medium rounded-full transition-color duration-300 ease-in-out cursor-pointer min-w-[120px] w-fit px-4 py-1.5 flex justify-center items-center bg-transparent text-primary border border-primary hover:bg-secondary-300/50 hover:dark:bg-secondary-800/50'
              >
                See Code
              </Link>
            )}
          </div>
        )}
      </article>
      <div className='w-full mt-0 mb-10 md:w-2/5 md:mt-0 md:mb-0 relative group'>
        <div className='absolute -inset-0.5 bg-gradient-to-br from-primary to-secondary blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-tilt'></div>
        <Image propName='image' alt='Image' imageClassName='relative' />
      </div>
    </div>
  );
};

export default FeaturedProject;

//=============================
// Brick Schema
//=============================
FeaturedProject.schema = {
  name: 'featured-project',
  label: 'Featured Project',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    title: 'Title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.',
    imageSide: 'left',
  }),
  sideEditProps: [
    {
      name: 'imageSide',
      label: 'Image side',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'left', label: 'Left' },
          { value: 'right', label: 'Right' },
        ],
      },
    },
    {
      name: 'highlights',
      label: 'Highlights',
      type: types.SideEditPropType.Textarea,
    },
    {
      name: 'demoLink',
      label: 'Demo Link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'codeLink',
      label: 'Code Link',
      type: types.SideEditPropType.Text,
    },
  ],
};
