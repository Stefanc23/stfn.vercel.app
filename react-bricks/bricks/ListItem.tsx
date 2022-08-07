import React from 'react';
import { Text, types } from 'react-bricks/frontend';
import { FiCheck } from 'react-icons/fi';

//=============================
// Local Types
//=============================

export interface ListItemProps {
  text: string;
}

//=============================
// Component to be rendered
//=============================
const ListItem: types.Brick<ListItemProps> = ({ ...rest }) => {
  return (
    <div className='flex justify-start items-center text-sm' {...rest}>
      <div className='flex justify-center items-center w-5 h-5 rounded-full text-sm text-light bg-primary mr-2'>
        <FiCheck />
      </div>
      <Text
        propName='text'
        renderBlock={(props) => (
          <p className='dark:text-light text-dark'>{props.children}</p>
        )}
        placeholder='Type...'
      />
    </div>
  );
};

export default ListItem;

//=============================
// Brick Schema
//=============================
ListItem.schema = {
  name: 'list-item',
  label: 'List Item',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    text: 'Item',
  }),
};
