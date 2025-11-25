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
                    className="text-xs text-primary underline hover:text-primary/80"
                    onClick={() => setSelectedProject(p)}
                  >
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
                  className="rounded-full px-2 py-1 text-sm text-muted hover:bg-border"
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


