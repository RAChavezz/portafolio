import ThemeToggle from './ThemeToggle';
import ThemeSwitcher from './ThemeSwitcher';
import { profile } from '../data/profile';

export default function Navbar({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur supports-backdrop-blur:bg-bg/60">
      <div className="container mx-auto flex items-center justify-between gap-3 py-3">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden rounded-radius-md border border-border bg-card p-2 text-fg shadow-elevation-1 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Open menu"
            onClick={onMenu}
          >
            ☰
          </button>
          <a href="#top" className="font-semibold text-fg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring">
            {profile.name}
          </a>
        </div>
        <nav className="flex items-center gap-2">
          <ThemeSwitcher />
          <ThemeToggle />
          <a
            href={profile.links.find((l) => l.label.toLowerCase().includes('linkedin'))?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-radius-md border border-border bg-card px-3 py-2 text-sm text-fg shadow-elevation-1 hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-radius-md bg-primary px-3 py-2 text-sm text-primary-contrast shadow-elevation-1 hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}



