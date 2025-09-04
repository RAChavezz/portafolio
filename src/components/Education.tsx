import { profile } from '../data/profile';
import Section from './ui/Section';
import Card from './ui/Card';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="container mx-auto grid gap-3 sm:grid-cols-2">
        {profile.education.map((e) => (
          <Card key={`${e.degree}-${e.institution}`}>
            <p className="font-medium">{e.degree}</p>
            <p className="text-sm text-muted">{e.institution}{e.year ? ` · ${e.year}` : ''}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}


