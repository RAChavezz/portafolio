import { profile } from '../data/profile';
import Section from './ui/Section';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="container mx-auto grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-radius-md bg-primary px-4 py-3 text-center text-primary-contrast shadow-elevation-1 hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Email: {profile.email}
        </a>
        {profile.links
          .filter((l) => l.label.toLowerCase().includes('linkedin'))
          .map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-radius-md border border-border bg-card px-4 py-3 text-center text-fg shadow-elevation-1 hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              LinkedIn
            </a>
          ))}
      </div>
    </Section>
  );
}


