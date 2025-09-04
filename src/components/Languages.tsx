import { profile } from '../data/profile';
import Section from './ui/Section';

export default function Languages() {
  return (
    <Section id="languages" title="Languages">
      <div className="container mx-auto">
        <ul className="flex flex-wrap gap-2">
          {profile.languages.map((l) => (
            <li key={l.language} className="rounded-full border border-border bg-card px-3 py-1 text-sm text-fg">
              {l.language} — {l.level}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}


