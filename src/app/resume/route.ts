import { redirect } from 'next/navigation';

import { fetchAboutData } from '@/utils/fetchAboutData';

export async function GET(request: Request) {
  const { resumeUrl } = await fetchAboutData();
  redirect(resumeUrl);
}
