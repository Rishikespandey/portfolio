import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';

const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(navItems);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-bgPrimary/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="#home" className="text-2xl font-extrabold tracking-tight relative group">
            <span className="text-textPrimary">Rishikesh</span>
            <span className="text-accent">.</span>
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={`relative py-2 px-1 capitalize transition-colors duration-300 ${
                      activeSection === item ? 'text-accent' : 'text-textMuted hover:text-textPrimary'
                    }`}
                  >
                    {item}
                    {activeSection === item && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="w-px h-6 bg-white/10"></div>

            <div className="flex items-center gap-4">
              <ThemeToggle isDark={true} toggleTheme={() => {}} />
              <a
                href="/assets/Rishikesh_Pandey_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                <span>Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-textPrimary hover:text-accent transition-colors">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-accent/20 w-full">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-accentLight"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-bgPrimary/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center pt-20 pb-10 px-6 gap-8"
          >
            <ul className="flex flex-col items-center gap-6 w-full text-lg font-medium">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full text-center"
                >
                  <a
                    href={`#${item}`}
                    onClick={closeMenu}
                    className={`block w-full py-3 capitalize transition-colors duration-300 ${
                      activeSection === item ? 'text-accent text-xl font-bold' : 'text-textMuted'
                    }`}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-6 w-full mt-auto"
            >
              <ThemeToggle isDark={true} toggleTheme={() => {}} />
              <a
                href="/assets/Rishikesh_Pandey_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-accent text-white font-semibold shadow-[0_4px_20px_rgba(139,92,246,0.3)] active:scale-95 transition-all"
              >
                Download Resume <Download className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
