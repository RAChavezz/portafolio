import { useEffect, useState } from 'react';
import type { ThemePreset } from '../lib/theme';
import { applyTheme, getStoredDark, getStoredPreset, setStoredPreset } from '../lib/theme';

const PRESETS: { value: ThemePreset; label: string }[] = [
  { value: 'default', label: 'Default' },
  { value: 'ocean', label: 'Ocean' },
  { value: 'emerald', label: 'Emerald' },
];

export default function ThemeSwitcher() {
  const [preset, setPreset] = useState<ThemePreset>(getStoredPreset());
  const isDark = getStoredDark();

  useEffect(() => {
    applyTheme(preset, isDark);
  }, [preset, isDark]);

  return (
    <label className="inline-flex items-center gap-2 text-sm text-fg">
      <span className="hidden sm:inline">Theme</span>
      <select
        className="rounded-radius-md border border-border bg-card px-2 py-1 shadow-elevation-1 focus:outline-none focus:ring-2 focus:ring-ring"
        value={preset}
        onChange={(e) => {
          const value = e.target.value as ThemePreset;
          setPreset(value);
          setStoredPreset(value);
        }}
      >
        {PRESETS.map((p) => (
          <option key={p.value} value={p.value}>{p.label}</option>
        ))}
      </select>
    </label>
  );
}


