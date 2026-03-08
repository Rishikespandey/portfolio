import React from 'react';
const Skills = () => {
  const skillsList = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', isImg: true },
    { name: 'DSA', icon: 'uil uil-brackets-curly', isImg: false },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', isImg: true },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', isImg: true },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', isImg: true },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', isImg: true },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', isImg: true },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', isImg: true, filterWhite: true },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', isImg: true },
    { name: 'Cloud Computing', icon: 'uil uil-cloud', isImg: false }
  ];

  return (
    <section id="skills" className="py-24 px-[10%] relative z-10 w-full overflow-hidden">
      <div className="mb-16 text-center animate-[fadeInUp_0.8s_ease-out]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">My Skills</h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] mx-auto rounded-full"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-[900px] mx-auto animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="group py-3 px-6 bg-[#0f0f11]/60 backdrop-blur-md border border-white/10 rounded-full font-medium flex items-center gap-3 transition-all duration-300 cursor-default hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(255,107,0,0.25)] text-gray-300 hover:text-white"
          >
            {skill.isImg ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110 ${skill.filterWhite ? 'invert' : ''}`}
              />
            ) : (
              <i className={`${skill.icon} flex items-center justify-center text-xl transition-colors duration-300 group-hover:text-[#ff6b00]`}></i>
            )}
            <span className="tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
