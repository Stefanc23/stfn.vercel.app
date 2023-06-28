import { groq } from 'next-sanity';

import { clientFetch } from '@/sanity/lib/client';

export const query = groq`*[_type == 'experience']{_id, role, company, startDate, endDate, location, employmentType, description}`;

export const fetchExperienceData = async () => {
  const data = await clientFetch(query);
  return data;
};
