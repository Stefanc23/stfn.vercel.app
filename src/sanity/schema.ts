import { type SchemaTypeDefinition } from 'sanity';

import about from '@/sanity/schemas/about';
import experience from '@/sanity/schemas/experience';
import project from '@/sanity/schemas/project';
import skill from '@/sanity/schemas/skill';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, skill, experience, project],
};
