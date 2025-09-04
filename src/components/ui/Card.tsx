import type { ReactNode } from 'react';

export default function Card({ title, actions, footer, children, className = '' }: { title?: ReactNode; actions?: ReactNode; footer?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-radius-lg border border-border bg-card shadow-elevation-1 transition-shadow hover:shadow-elevation-2 ${className}`}>
      {(title || actions) && (
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <h4 className="font-semibold">{title}</h4>
          {actions}
        </div>
      )}
      <div className="px-4 py-4">{children}</div>
      {footer && <div className="border-t border-border px-4 py-3 text-sm text-muted">{footer}</div>}
    </section>
  );
}


