import type { ReactNode } from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-bg text-fg">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded-radius-md focus:bg-card focus:px-3 focus:py-2 focus:text-fg focus:shadow-elevation-2">
        Skip to content
      </a>
      <Navbar onMenu={() => setOpen(true)} />
      <div className="mx-auto flex w-full max-w-7xl gap-4 px-4 py-4 lg:px-6">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <main id="main" className="flex-1">
          {children}
        </main>
      </div>
      <footer className="border-t border-border py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Ricardo Alonso Chávez Jiménez
      </footer>
    </div>
  );
}


