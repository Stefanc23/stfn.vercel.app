import React from 'react';
import { Image, Link, types } from 'react-bricks/frontend';

//=============================
// Local Types
//=============================

export interface SocialProps {
  link: string;
}

//=============================
// Component to be rendered
//=============================
const Social: types.Brick<SocialProps> = ({ link, ...rest }) => {
  return (
    <div {...rest}>
      <Image
        propName='icon'
        alt='icon'
        imageClassName='w-6 w-6 md:w-8 md:w-8 rounded-full shadow-xl text-primary'
        renderWrapper={({ children }) => (
          <Link href={link} target='_blank' rel='noopener noreferrer'>
            {children}
          </Link>
        )}
      />
    </div>
  );
};

//=============================
// Brick Schema
//=============================
Social.schema = {
  name: 'social',
  label: 'Social',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'link',
      label: 'Link',
      type: types.SideEditPropType.Text,
    },
  ],
};

export default Social;
