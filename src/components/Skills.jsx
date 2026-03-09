import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/skills';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-textPrimary">My Skills</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-accentLight mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(139,92,246,0.5)",
                borderColor: "rgba(139,92,246,0.5)",
                backgroundColor: "rgba(139,92,246,0.1)"
              }}
              className="py-3 px-6 bg-cardBg/60 backdrop-blur-md border border-white/5 rounded-full font-medium flex items-center gap-3 transition-colors duration-300 cursor-default text-textMuted hover:text-textPrimary"
            >
              {skill.isImg ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-6 h-6 object-contain ${skill.filterWhite ? 'invert' : ''}`}
                />
              ) : (
                <i className={`${skill.icon} flex items-center justify-center text-xl text-accent`}></i>
              )}
              <span className="tracking-wide text-sm md:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
