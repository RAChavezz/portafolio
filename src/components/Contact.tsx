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
          .filter((l) => ['linkedin', 'phone', 'whatsapp'].includes(l.label.toLowerCase()))
          .map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.label.toLowerCase() === 'linkedin' ? "_blank" : undefined}
              rel={l.label.toLowerCase() === 'linkedin' ? "noopener noreferrer" : undefined}
              className="rounded-radius-md border border-border bg-card px-4 py-3 text-center text-fg shadow-elevation-1 hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {l.label}
            </a>
          ))}
      </div>
    </Section>
  );
}


