export type ThemePreset = 'default' | 'ocean' | 'emerald';

const THEME_KEY = 'theme:preset';
const DARK_KEY = 'theme:dark';

export function applyTheme(preset: ThemePreset, isDark: boolean) {
  const root = document.documentElement;
  root.classList.remove('theme-default', 'theme-ocean', 'theme-emerald');
  root.classList.add(`theme-${preset}`);
  root.classList.toggle('dark', isDark);
}

export function getStoredPreset(): ThemePreset {
  const raw = localStorage.getItem(THEME_KEY) as ThemePreset | null;
  return raw ?? 'default';
}

export function getStoredDark(): boolean {
  const raw = localStorage.getItem(DARK_KEY);
  if (raw == null) {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return raw === 'true';
}

export function setStoredPreset(preset: ThemePreset) {
  localStorage.setItem(THEME_KEY, preset);
}

export function setStoredDark(isDark: boolean) {
  localStorage.setItem(DARK_KEY, String(isDark));
}

export function initTheme() {
  const preset = getStoredPreset();
  const isDark = getStoredDark();
  applyTheme(preset, isDark);
}


