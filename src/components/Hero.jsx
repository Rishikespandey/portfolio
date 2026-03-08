import React, { useState, useEffect } from 'react';

const Hero = () => {
  const roles = ["FullStack Developer", "Problem Solver", "DSA Enthusiast"];
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === currentRole) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(500);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed, roles]);

  return (
    <section id="home" className="flex flex-col justify-center min-h-screen items-center text-center pt-[120px] px-[10%] relative">
      <div className="z-10">
        <span className="inline-block py-1.5 px-4 bg-[#ff6b00]/10 border border-[#ff6b00]/20 rounded-full text-[#ff6b00] text-[0.9rem] font-semibold mb-8 tracking-[1px] uppercase animate-[fadeInUp_0.6s_ease-out]">
          Welcome to my universe
        </span>
        <h1 className="text-[clamp(3rem,6vw,5rem)] tracking-tight mb-4 font-bold leading-tight animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
          Hi, I'm <br />
          <span className="bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] bg-clip-text text-transparent">
            Rishikesh Pandey
          </span>
        </h1>
        <h2 className="text-[clamp(1.2rem,3vw,2rem)] text-gray-400 font-normal h-[48px] mb-12 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
          <span className="typing">{currentText}</span>
          <span className="text-[#ff6b00] animate-pulse">|</span>
        </h2>
        <div className="flex gap-6 justify-center animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full font-semibold text-[0.95rem] transition-all duration-300 bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] text-white shadow-[0_4px_15px_rgba(255,107,0,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(255,107,0,0.5)] hover:brightness-110 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="/assets/Rishikesh_Pandey_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full font-semibold text-[0.95rem] transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/10 text-white hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,107,0,0.3)] active:scale-95 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            <span>Download CV</span> <i className="uil uil-arrow-down"></i>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-200 animate-[fadeIn_0.8s_ease-out_1s_both]">
        <a href="#about" className="flex flex-col items-center">
          <div className="w-6 h-9 border-2 border-gray-400 rounded-full relative cursor-pointer active:scale-90 flex justify-center pt-[6px]">
            <div className="w-1 h-1.5 bg-gray-400 rounded-sm animate-[bounce_2s_infinite]"></div>
          </div>
          <p className="text-[0.8rem] uppercase tracking-[1px] mt-2 text-gray-400">Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;
