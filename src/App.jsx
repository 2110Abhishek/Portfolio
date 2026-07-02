import React from 'react';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <main>
        <Hero />
        <AboutSkills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
