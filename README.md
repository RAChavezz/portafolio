## Ricardo Alonso Chávez Jiménez · Portfolio (React 19 + Vite + Tailwind CSS)

Professional, responsive portfolio built with React 19, Vite, Tailwind CSS, and TypeScript. All profile content is centralized in `src/data/profile.ts`.

### Requirements met
- Sections: Header/Hero, About, Skills, Experience, Projects, Education, Certifications, Languages, Contact
- Data-driven from `src/data/profile.ts`
- Responsive, mobile-first design with Tailwind
- React 19 + Vite + TypeScript

### Getting started
1. Install dependencies:
```bash
npm install
```
2. Run locally:
```bash
npm run dev
```
3. Build for production:
```bash
npm run build
```
4. Preview the production build:
```bash
npm run preview
```

### Editing content
Update all personal data in:
```
src/data/profile.ts
```
The site updates automatically in dev; rebuild for production deployments.

### Deploying
- GitHub Pages: use `vite` static output. Simplest path is via GitHub Actions or `gh-pages`.
  - Set `base` in `vite.config.ts` if deploying to a subpath (e.g., `/portfolio/`).
- Netlify: drag-and-drop `dist/` or connect repo. Build command: `npm run build`, Publish directory: `dist/`.
- Vercel: import the repo, Framework preset: Vite. Build command: `npm run build`, Output directory: `dist/`.

### Tech stack
- React 19, TypeScript, Vite 7
- Tailwind CSS 3

### License
MIT
