import { type SchemaTypeDefinition } from 'sanity';

import about from '@/sanity/schemas/about';
import skill from '@/sanity/schemas/skill';
import experience from '@/sanity/schemas/experience';
import project from '@/sanity/schemas/project';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, skill, experience, project],
};
