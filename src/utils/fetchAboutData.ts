import { groq } from 'next-sanity';

import { clientFetch } from '@/sanity/lib/client';

export const query = groq`*[_type == 'about'][0]{_id, displayName, tagline, bio, profileImage, "resumeUrl": resumeFile.asset->url, skills}`;

export const fetchAboutData = async () => await clientFetch(query);
