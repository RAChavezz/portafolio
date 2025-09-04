import { profile } from '../data/profile';
import Section from './ui/Section';
import Card from './ui/Card';

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="container mx-auto grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profile.certifications.map((c) => (
          <Card key={`${c.name}-${c.issuer}`}>
            <div className="flex items-center justify-between">
              <span className="font-medium">{c.name}</span>
              <span className="text-sm text-muted">{c.issuer}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}


