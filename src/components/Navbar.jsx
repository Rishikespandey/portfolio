import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active Section logic
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 px-[10%] bg-[#0f0f11]/70 backdrop-blur-xl border-b border-white/10'
          : 'py-6 px-[10%]'
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold tracking-tight">
          Rishikesh<span className="text-orangeDark">.</span>
        </a>
        <ul
          className={`flex list-none gap-8 max-md:fixed max-md:top-[70px] max-md:flex-col max-md:bg-[#0f0f11]/90 max-md:w-full max-md:text-center max-md:transition-all max-md:duration-300 max-md:py-5 max-md:backdrop-blur-xl ${
            menuOpen ? 'max-md:right-0' : 'max-md:-right-full'
          }`}
        >
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item} className="max-md:my-2">
              <a
                href={`#${item}`}
                className={`relative py-1 text-[0.95rem] font-medium transition-colors duration-200 capitalize group ${
                  activeSection === item ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] rounded-sm bg-gradient-to-br from-orangeDark to-orangeLight transition-all duration-300 ${
                    activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            </li>
          ))}
          <li className="max-md:my-2">
            <a
              href="/assets/Rishikesh_Pandey_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full font-semibold text-[0.85rem] transition-all duration-300 bg-orangeDark/10 text-orangeDark border border-orangeDark/30 hover:bg-gradient-to-br hover:from-orangeDark hover:to-orangeLight hover:text-white hover:border-transparent active:scale-95 shadow-[0_4px_10px_rgba(255,107,0,0.3)]"
              onClick={closeMenu}
            >
              CV <i className="uil uil-arrow-down"></i>
            </a>
          </li>
        </ul>
        <div className="hidden max-md:block text-2xl cursor-pointer text-white" onClick={toggleMenu}>
          <i className={menuOpen ? 'uil uil-times' : 'uil uil-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
