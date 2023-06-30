import About from '@/components/About';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { fetchAboutData } from '@/utils/fetchAboutData';
import { fetchExperienceData } from '@/utils/fetchExperienceData';
import { fetchProjectData } from '@/utils/fetchProjectData';

export default async function Home() {
  const aboutData = await fetchAboutData();
  const experienceData = await fetchExperienceData();
  const projectData = await fetchProjectData();

  return (
    <>
      <Hero />
      <About data={aboutData} />
      <Experience data={experienceData} />
      <Projects data={projectData} />
    </>
  );
}
