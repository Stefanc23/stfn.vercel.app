import { types } from 'react-bricks/frontend';
import website from 'react-bricks-ui/website';
import blog from 'react-bricks-ui/blog';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import ListItem from './ListItem';
import Social from './Social';
import Button from './Button';
import Card from './Card';
import FeaturedProject from './FeaturedProject';

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  Hero,
  About,
  Experience,
  Projects,
  Social,
  Button,
  ListItem,
  Card,
  FeaturedProject,
];

export default bricks;
