import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTyping } from '../hooks/useTyping';

const Hero = () => {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "UI Enthusiast",
    "Open Source Learner"
  ];
  
  const currentText = useTyping(roles, 100, 2000);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-12 pt-20 overflow-hidden">
      
      {/* Main Content */}
      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 py-1.5 px-4 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-8 tracking-wider uppercase backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Welcome to my universe
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-extrabold leading-tight mb-6 text-textPrimary"
        >
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-accent to-accentLight bg-clip-text text-transparent">
            Rishikesh Pandey
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="h-12 md:h-16 flex items-center justify-center mb-10"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-textMuted font-medium tracking-wide">
            <span className="mr-1">{currentText}</span>
            <span className="text-accent animate-pulse">|</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 py-4 px-8 rounded-full font-semibold text-white bg-accent hover:bg-accentLight transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(167,139,250,0.5)] hover:-translate-y-1 w-full sm:w-auto"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="/assets/Rishikesh_Pandey_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 py-4 px-8 rounded-full font-semibold text-textPrimary bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm w-full sm:w-auto"
          >
            Download Resume
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-6 mt-16"
        >
          <a href="https://github.com/Rishikespandey" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors hover:scale-110 transform duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/rishikesh-pandey-9b442b2b3" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors hover:scale-110 transform duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:sonupandey5705@gmail.com" className="text-textMuted hover:text-accent transition-colors hover:scale-110 transform duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-textMuted hover:text-accent transition-colors"
      >
        <a href="#about" className="flex flex-col items-center animate-bounce">
          <span className="text-xs uppercase tracking-[0.2em] font-medium mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
