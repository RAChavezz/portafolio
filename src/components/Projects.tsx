import { profile, type Project } from '../data/profile';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { useMemo, useState } from 'react';

export default function Projects() {
  const allTech = useMemo(() => {
    const s = new Set<string>();
    profile.projects.forEach((p) => p.technologies.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);
  const [filters, setFilters] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filtered = useMemo(() => {
    if (filters.length === 0) return profile.projects;
    return profile.projects.filter((p) => filters.every((f) => p.technologies.includes(f)));
  }, [filters]);

  function toggle(tag: string) {
    setFilters((f) => (f.includes(tag) ? f.filter((x) => x !== tag) : [...f, tag]));
  }

  return (
    <Section id="projects" title="Key Projects">
      <div className="container mx-auto">
        <div className="mb-4 flex flex-wrap gap-2">
          {allTech.map((t) => (
            <Badge key={t} active={filters.includes(t)} onClick={() => toggle(t)}>
              {t}
            </Badge>
          ))}
          {filters.length > 0 && (
            <button className="text-sm text-primary underline" onClick={() => setFilters([])}>Clear</button>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Card
              key={p.name}
              title={p.name}
              actions={
                p.details && (
                  <button
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-xs font-medium text-primary shadow-sm transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    onClick={() => setSelectedProject(p)}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    View details
                  </button>
                )
              }
            >
              <p className="text-sm text-fg">{p.impact}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-bg px-2 py-1 text-xs text-muted">{t}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 max-h-[90vh] w-full max-w-3xl overflow-y-auto">
            <Card
              title={selectedProject.name}
              actions={
                <button
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-bg text-xs text-muted shadow-sm transition-colors hover:bg-border/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close details"
                >
                  ✕
                </button>
              }
            >
              <p className="text-sm text-fg">{selectedProject.impact}</p>
              {selectedProject.details && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-fg">
                  {selectedProject.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-bg px-2 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}
    </Section>
  );
}


