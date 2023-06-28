import { groq } from 'next-sanity';

import { clientFetch } from '@/sanity/lib/client';

export const query = groq`*[_type == 'about'][0]{_id, displayName, bio, profileImage, skills}`;

export const fetchAboutData = async () => {
  const data = await clientFetch(query);
  return data;
};
