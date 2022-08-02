import { types } from 'react-bricks/frontend';
import website from 'react-bricks-ui/website';
import blog from 'react-bricks-ui/blog';
import Hero from './Hero';
import About from './About';
import ListItem from './ListItem';
import Social from './Social';
import Button from './Button';

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  Hero,
  About,
  Social,
  Button,
  ListItem,
];

export default bricks;
