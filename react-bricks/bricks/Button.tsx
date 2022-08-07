import React from 'react';
import { Link, types } from 'react-bricks/frontend';

export interface ButtonProps {
  text: string;
  href: string;
  isTargetBlank: boolean;
  type?: 'solid' | 'outline';
}

const Button: types.Brick<ButtonProps> = ({
  text,
  href,
  isTargetBlank = false,
  type = 'solid',
  ...rest
}) => {
  const target = isTargetBlank
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link
      href={href}
      {...target}
      className={`text-sm md:text-md text-medium rounded-full transition-color duration-300 ease-in-out cursor-pointer min-w-[120px] w-fit px-4 py-1.5 flex justify-center items-center ${
        type === 'solid'
          ? 'bg-primary text-light hover:bg-gradient-to-br hover:from-primary hover:to-secondary'
          : 'bg-transparent text-primary border border-primary hover:bg-secondary-300/50 hover:dark:bg-secondary-800/50'
      }`}
      {...rest}
    >
      {text}
    </Link>
  );
};

Button.schema = {
  name: 'button',
  label: 'Button',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    text: 'Click me',
    href: '',
    isTargetBlank: false,
    type: 'solid',
  }),
  sideEditProps: [
    {
      name: 'text',
      label: 'Button text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'type',
      label: 'Type',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'solid', label: 'Solid' },
          { value: 'outline', label: 'Outline' },
        ],
      },
    },
    {
      name: 'href',
      label: 'Link (external or path)',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isTargetBlank',
      label: 'Open in new window',
      type: types.SideEditPropType.Boolean,
    },
  ],
};

export default Button;
