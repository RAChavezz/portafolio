import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' },
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeId, setActiveId] = useState<string>('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-label="Sidebar"
      className={`fixed inset-y-0 left-0 z-30 w-64 transform border-r border-border bg-bg p-4 shadow-elevation-1 transition-transform duration-200 ease-out lg:static lg:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <nav className="flex flex-col gap-1" role="navigation">
        {SECTIONS.map((s) => {
          const active = activeId === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={onClose}
              className={`rounded-radius-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring ${
                active ? 'bg-primary/10 text-primary' : 'text-fg hover:bg-card'
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}



