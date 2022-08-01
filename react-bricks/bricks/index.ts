import { types } from 'react-bricks/frontend';
import website from 'react-bricks-ui/website';
import blog from 'react-bricks-ui/blog';
import Hero from './Hero';
import Social from './Social';
import Button from './Button';

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  Hero,
  Social,
  Button,
];

export default bricks;
