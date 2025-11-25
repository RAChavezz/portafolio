import type { ReactNode } from 'react';

// Specialized card layout for the hero header so we can freely control its width and padding
export default function HeroCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section
      className={`mx-auto mt-4 w-full max-w-6xl rounded-radius-lg border border-border bg-card px-4 py-4 shadow-elevation-1 sm:px-6 sm:py-5 ${className}`}
    >
      {children}
    </section>
  );
}


