import React from 'react';
import healthImg from '../assets/images/health.png';
import chatImg from '../assets/images/chat.png';
import emojiImg from '../assets/images/emoji.png';

const Projects = () => {
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (cardRef) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
    card.style.transition = 'transform 0.5s ease';
  };

  const handleMouseEnter = (cardRef) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transition = 'none';
  };

  const projectList = [
    {
      title: "🏥 Health Monitoring System",
      desc: "IoT-based application collecting real-time patient health data using hardware sensors and displaying it on a web dashboard.",
      tags: ["IoT", "Node.js", "MongoDB", "ESP32"],
      img: healthImg,
      live: "#",
      repo: "https://github.com/Rishikespandey",
    },
    {
      title: "💬 Real-Time Chat App",
      desc: "A real-time chat application built using WebSocket technology (Socket.io) for instant and multi-user communication.",
      tags: ["JavaScript", "Socket.io", "Express.js"],
      img: chatImg,
      live: "#",
      repo: "https://github.com/Rishikespandey",
    },
    {
      title: "😊 Emoji Picker Component",
      desc: "A reusable, lightweight emoji picker UI component featuring global search, categorized filtering, and text cursor insertion.",
      tags: ["Vanilla JS", "CSS3", "HTML5"],
      img: emojiImg,
      live: "#",
      repo: "https://github.com/Rishikespandey",
    }
  ];

  return (
    <section id="projects" className="py-24 px-[10%] relative z-10">
      <div className="mb-16 text-center animate-[fadeInUp_0.8s_ease-out]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Featured Projects</h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        {projectList.map((project, index) => {
          const cardRef = React.useRef(null);
          return (
            <div 
              key={index}
              className="group relative bg-[#1a1a1d]/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 shadow-xl animate-[fadeInUp_0.8s_ease-out_both] transform-style-3d will-change-transform" 
              style={{ animationDelay: `${index * 0.1}s` }}
              ref={cardRef}
              onMouseMove={(e) => handleMouseMove(e, cardRef)}
              onMouseLeave={() => handleMouseLeave(cardRef)}
              onMouseEnter={() => handleMouseEnter(cardRef)}
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center backdrop-blur-[2px]">
                  <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={project.live} className="w-12 h-12 rounded-full bg-white/10 text-white flex justify-center items-center text-xl hover:bg-[#ff6b00] hover:scale-110 transition-all duration-300" title="Live Demo">
                      <i className="uil uil-external-link-alt"></i>
                    </a>
                    <a href={project.repo} className="w-12 h-12 rounded-full bg-white/10 text-white flex justify-center items-center text-xl hover:bg-[#ff6b00] hover:scale-110 transition-all duration-300" title="Source Code">
                      <i className="uil uil-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-bold mb-3 group-hover:text-[#ff6b00] transition-colors duration-300">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-[#ff6b00] text-xs font-semibold rounded-full border border-[#ff6b00]/20">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
