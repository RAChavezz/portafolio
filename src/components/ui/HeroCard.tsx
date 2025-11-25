import type { ReactNode } from 'react';

// Specialized card layout for the hero header so we can freely control its width and padding
export default function HeroCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section
      className={`mx-auto mt-6 w-full max-w-6xl rounded-radius-lg border border-border bg-card px-4 py-5 shadow-elevation-2 transition-shadow hover:shadow-elevation-3 sm:px-6 sm:py-6 ${className}`}
    >
      {children}
    </section>
  );
}


