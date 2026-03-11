import React, { Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Global Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Lazy Loaded Components
const Projects = lazy(() => import('../components/Projects'));
const Experience = lazy(() => import('../components/Experience'));
const Background3D = lazy(() => import('../components/Background3D'));

const Home = () => {
  return (
    <HelmetProvider>
      <div className="relative min-h-screen overflow-hidden">
        <Helmet>
          <title>Rishikesh Pandey | FullStack Developer</title>
          <meta name="description" content="Frontend Developer specializing in React, UI engineering and modern web applications." />
          <meta property="og:title" content="Rishikesh Pandey Portfolio" />
          <meta property="og:description" content="Modern React developer portfolio with projects and UI experiments." />
          <meta property="og:image" content="/preview.png" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rishikeshpandey.dev" />
        </Helmet>
        
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-accent">Loading Projects...</div>}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-accent">Loading Experience...</div>}>
            <Experience />
          </Suspense>
          
          <Contact />
        </main>
        
        <Footer />

        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default Home;
