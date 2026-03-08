import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

function App() {
  return (
    <>
      <Background3D />
      <div className="glow-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {/* Back to Top */}
      <a href="#home" className="scroll-up" id="scroll-up">
        <i className="uil uil-arrow-up"></i>
      </a>
    </>
  );
}

export default App;
