import type { Experience } from '../../data/profile';

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative border-s border-border">
      {items.map((exp, idx) => (
        <li key={`${exp.company}-${exp.role}-${idx}`} className="mb-8 ms-6">
          <span className="absolute -start-3 mt-1.5 h-3 w-3 rounded-full bg-primary"></span>
          <div className="rounded-radius-lg border border-border bg-card p-5 shadow-elevation-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold">{exp.role}</p>
                <p className="text-muted">{exp.company} · {exp.location}</p>
              </div>
              <p className="text-xs text-muted">{exp.startDate} — {exp.endDate}</p>
            </div>
            <ul className="mt-3 list-disc ps-6 text-sm text-fg space-y-1">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}


