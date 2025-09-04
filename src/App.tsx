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

export default function App() {
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
