import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
  const isGitHubActions = Boolean(process.env.GITHUB_ACTIONS)
  const isUserPages = repositoryName?.toLowerCase()?.endsWith('.github.io')

  return {
    plugins: [react()],
    // Use subpath when building in GitHub Actions (e.g., https://user.github.io/repo/)
    base: isGitHubActions
      ? isUserPages
        ? '/'
        : repositoryName
          ? `/${repositoryName}/`
          : '/'
      : '/',
  }
})
