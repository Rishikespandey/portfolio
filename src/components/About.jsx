import React from 'react';
import profileImg from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 px-[10%] relative z-10">
      <div className="mb-16 text-center animate-[fadeInUp_0.8s_ease-out]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">About Me</h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
        <div className="relative flex justify-center animate-[fadeInLeft_0.8s_ease-out]">
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] w-full max-w-[400px]">
            <img src={profileImg} alt="Rishikesh Pandey" className="w-full h-auto rounded-[calc(1rem-2px)] aspect-[4/5] object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="absolute top-[10%] -left-[5%] md:-left-[10%] bg-white/5 backdrop-blur-md border border-white/10 py-3 px-5 rounded-xl flex items-center gap-3 font-semibold text-sm shadow-xl animate-[float_6s_ease-in-out_infinite]">
            <i className="uil uil-react text-[#ff6b00] text-xl"></i> <span className="text-white">Frontend</span>
          </div>
          <div className="absolute bottom-[15%] -right-[5%] md:-right-[10%] bg-white/5 backdrop-blur-md border border-white/10 py-3 px-5 rounded-xl flex items-center gap-3 font-semibold text-sm shadow-xl animate-[float_6s_ease-in-out_infinite_2s]">
            <i className="uil uil-server text-[#ff6b00] text-xl"></i> <span className="text-white">Backend</span>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl animate-[fadeInRight_0.8s_ease-out]">
          <p className="text-lg mb-8 text-gray-300 leading-relaxed">
            I am an MCA student and an aspiring{' '}
            <strong className="text-white">Software Engineer / FullStack Developer</strong> with strong
            fundamentals in Java and Data Structures & Algorithms. I am a quick
            learner and always eager to explore new technologies and improve my
            skills through real-world projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <h3 className="text-base text-white mb-2 flex items-center gap-2 font-bold">
                <i className="uil uil-heart-medical text-[#ff6b00] text-lg"></i> Health Monitoring
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">IoT system tracking real-time vitals using ESP32 & Node.js.</p>
            </div>
            <div>
              <h3 className="text-base text-white mb-2 flex items-center gap-2 font-bold">
                <i className="uil uil-arrow text-[#ff6b00] text-lg"></i> Web Development
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">Built Chat Apps, UI Clones, and Full-Stack scalable solutions.</p>
            </div>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#ff6b00] font-bold hover:text-[#ff8c00] transition-colors group">
            Let's work together <i className="uil uil-arrow-right transition-transform duration-300 group-hover:translate-x-2 text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
