import { profile } from '../data/profile';
import Section from './ui/Section';
import Timeline from './ui/Timeline';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="container mx-auto">
        <Timeline items={profile.experience} />
      </div>
    </Section>
  );
}


