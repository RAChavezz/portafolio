import type { ReactNode } from 'react';
import { useId, useState } from 'react';

export function Tabs({ tabs }: { tabs: { id: string; label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  return (
    <div>
      <div role="tablist" aria-label="Tabs" className="flex flex-wrap gap-2">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            id={`${baseId}-tab-${t.id}`}
            aria-selected={active === i}
            aria-controls={`${baseId}-panel-${t.id}`}
            className={`rounded-radius-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${
              active === i ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-card text-fg hover:bg-card'
            }`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${tabs[active].id}`}
        aria-labelledby={`${baseId}-tab-${tabs[active].id}`}
        className="mt-3"
      >
        {tabs[active].content}
      </div>
    </div>
  );
}


