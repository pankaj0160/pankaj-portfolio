import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Certifications />
          <Timeline />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;