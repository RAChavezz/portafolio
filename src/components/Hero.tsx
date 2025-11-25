import { profile } from '../data/profile';
import HeroCard from './ui/HeroCard';

export default function Hero() {
  return (
    <HeroCard>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold">{profile.name}</h2>
          <p className="mt-2 text-lg text-muted">{profile.title}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-fg">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden>📍</span>
              {profile.location}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-primary" href={`mailto:${profile.email}`}>
              <span aria-hidden>✉️</span>
              {profile.email}
            </a>
          </div>
        </div>
        <div className="lg:ml-auto flex flex-wrap items-start justify-start gap-2 lg:justify-end">
          <a
            href={profile.links.find(l => l.label.toLowerCase().includes('linkedin'))?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-radius-md border border-border bg-card px-4 py-2 text-fg shadow-elevation-1 hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-radius-md bg-primary px-4 py-2 text-primary-contrast shadow-elevation-1 hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Email
          </a>
          <a
            href={`${import.meta.env.BASE_URL}?view=cv`}
            className="rounded-radius-md border border-border bg-card px-4 py-2 text-fg shadow-elevation-1 hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring whitespace-nowrap"
          >
            View CV (Print)
          </a>
          <a
            href={`${import.meta.env.BASE_URL}cv/Ricardo_Alonso_Chavez_Jimenez_EN.docx`}
            download="Ricardo_Alonso_Chavez_Jimenez_EN.docx"
            className="rounded-radius-md border border-border bg-card px-4 py-2 text-fg shadow-elevation-1 hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring whitespace-nowrap"
          >
            Download CV
          </a>
        </div>
      </div>
    </HeroCard>
  );
}


