import type { ReactNode } from 'react';

export default function Badge({ children, active = false, onClick, className = '' }: { children: ReactNode; active?: boolean; onClick?: () => void; className?: string }) {
  const base = 'inline-flex items-center rounded-full border px-2.5 py-1 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring';
  const style = active
    ? 'border-primary bg-primary/10 text-primary'
    : 'border-border bg-bg text-fg hover:bg-card';
  return (
    <button type="button" onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  );
}


