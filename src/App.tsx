import { useEffect, useState } from 'react';
import AppShell from './layouts/AppShell';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Contact from './components/Contact';
import CvPage from './components/CvPage';

type AppView = 'portfolio' | 'cv';

function getViewFromLocation(): AppView {
  const params = new URLSearchParams(window.location.search);
  return params.get('view') === 'cv' ? 'cv' : 'portfolio';
}

export default function App() {
  const [view, setView] = useState<AppView>(getViewFromLocation);

  useEffect(() => {
    function handlePopState() {
      setView(getViewFromLocation());
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (view === 'cv') {
    return <CvPage />;
  }

  return (
    <AppShell>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Languages />
      <Contact />
    </AppShell>
  );
}
