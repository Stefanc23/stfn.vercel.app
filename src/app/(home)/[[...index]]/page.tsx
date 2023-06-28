import About from '@/components/About';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import { fetchAboutData } from '@/utils/fetchAboutData';
import { fetchExperienceData } from '@/utils/fetchExperienceData';

export default async function Home() {
  const aboutData = await fetchAboutData();
  const experienceData = await fetchExperienceData();

  return (
    <>
      <Hero />
      <About data={aboutData} />
      <Experience data={experienceData} />
    </>
  );
}
