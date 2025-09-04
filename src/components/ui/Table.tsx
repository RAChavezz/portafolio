import type { ReactNode } from 'react';

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-radius-md border border-border bg-card shadow-elevation-1">
      <table className="min-w-full text-left text-sm">{children}</table>
    </div>
  );
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className="bg-bg/50 text-muted">{children}</thead>;
}

export function TR({ children }: { children: ReactNode }) {
  return <tr className="border-t border-border hover:bg-card/60">{children}</tr>;
}

export function TH({ children }: { children: ReactNode }) {
  return <th className="px-4 py-2 font-medium text-fg">{children}</th>;
}

export function TD({ children }: { children: ReactNode }) {
  return <td className="px-4 py-2 text-fg">{children}</td>;
}


