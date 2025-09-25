import Section from '@/components/Section';
import FeaturedCases from '@/components/work/FeaturedCases';

import WorkHero from '@/components/work/WorkHero';

export const metadata = { title: 'Work — Case Studies & Projects' };

export default function WorkPage() {
  return (
    <>
      <WorkHero />

      <Section title="Featured Projects" dense>
        <FeaturedCases />
      </Section>
    </>
  );
}
