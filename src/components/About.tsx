import { profile } from '../data/profile';
import Section from './ui/Section';

export default function About() {
  return (
    <Section id="about" title="Professional Summary">
      <div className="container mx-auto">
        <ul className="max-w-prose list-disc space-y-2 ps-6 text-fg">
          {profile.summary.split('. ').filter(Boolean).map((s) => (
            <li key={s}>{s.trim()}.</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}


