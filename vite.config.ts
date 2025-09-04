import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // In development, serve from root. In production (build), force GitHub Pages subpath.
  const base = command === 'build' ? '/portafolio/' : '/'

  return {
    plugins: [react()],
    base,
  }
})
