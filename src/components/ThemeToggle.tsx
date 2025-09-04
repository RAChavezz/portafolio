import { useEffect, useState } from 'react';
import { applyTheme, getStoredDark, getStoredPreset, setStoredDark } from '../lib/theme';

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(getStoredDark());

  useEffect(() => {
    applyTheme(getStoredPreset(), dark);
  }, [dark]);

  return (
    <button
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex items-center gap-2 rounded-radius-md border border-border bg-card px-3 py-2 text-sm text-fg shadow-elevation-1 hover:shadow-elevation-2 focus:outline-none focus:ring-2 focus:ring-ring"
      onClick={() => {
        setDark((d) => {
          const next = !d;
          setStoredDark(next);
          return next;
        });
      }}
    >
      <span className="inline-block h-4 w-4">{dark ? '🌙' : '☀️'}</span>
      <span className="hidden sm:inline">{dark ? 'Dark' : 'Light'}</span>
    </button>
  );
}



