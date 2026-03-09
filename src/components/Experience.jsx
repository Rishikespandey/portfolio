import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Tech Solutions Inc.",
    date: "Jun 2025 - Present",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Developing responsive web applications using React and Node.js. Collaborating with cross-functional teams to deliver scalable features."
  },
  {
    id: 2,
    title: "Master of Computer Applications",
    company: "University of Technology",
    date: "Aug 2024 - Present",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Specializing in advanced software engineering, system design, and database management. Maintaining a high GPA while contributing to tech communities."
  },
  {
    id: 3,
    title: "Open Source Contributor",
    company: "Various Projects",
    date: "Mar 2023 - Present",
    icon: <Award className="w-6 h-6" />,
    description: "Regularly contributing to popular open-source repositories fixing bugs, improving documentation, and adding minor features."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-textPrimary">Experience</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-accentLight mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Empty space for symmetric layout */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-bgPrimary bg-gradient-to-br from-accent to-accentLight text-white z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    {exp.icon}
                  </div>

                  {/* Content Card */}
                  <div className="w-full pl-16 md:pl-0 md:w-[45%]">
                    <div className="p-6 md:p-8 bg-cardBg/80 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-accent/30 transition-colors duration-300 relative group">
                      {/* Arrow */}
                      <div className={`hidden md:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent ${isEven ? 'border-r-8 border-r-white/5 -left-2' : 'border-l-8 border-l-white/5 -right-2'}`} />
                      
                      <span className="text-accent font-semibold tracking-wider text-sm mb-2 block uppercase">{exp.date}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{exp.title}</h3>
                      <p className="text-textMuted font-medium mb-4">{exp.company}</p>
                      <p className="text-textMuted leading-relaxed text-sm md:text-base">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
