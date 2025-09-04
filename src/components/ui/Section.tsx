import type { ReactNode } from 'react';

export default function Section({ id, title, sub, children }: { id?: string; title: string; sub?: string; children: ReactNode }) {
  return (
    <section id={id} className="py-8 sm:py-10">
      <header className="sticky top-14 z-10 mb-4 bg-bg/80 py-1 backdrop-blur supports-backdrop-blur:bg-bg/60">
        <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
        {sub && <p className="text-sm text-muted">{sub}</p>}
      </header>
      {children}
    </section>
  );
}


