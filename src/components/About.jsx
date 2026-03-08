import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Activity, ArrowRight, Code2 } from 'lucide-react';
import profileImg from '../assets/images/profile.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-textPrimary">About Me</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-accentLight mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image & Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-accent to-accentLight w-full max-w-sm">
              <img 
                src={profileImg} 
                alt="Rishikesh Pandey" 
                className="w-full h-auto rounded-xl aspect-[4/5] object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            
            {/* Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-4 md:-left-10 bg-cardBg/80 backdrop-blur-md border border-white/10 py-3 px-5 rounded-xl flex items-center gap-3 font-semibold text-sm shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            >
              <Monitor className="text-accent w-5 h-5" /> <span className="text-textPrimary">Frontend</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-16 -right-4 md:-right-10 bg-cardBg/80 backdrop-blur-md border border-white/10 py-3 px-5 rounded-xl flex items-center gap-3 font-semibold text-sm shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            >
              <Server className="text-accent w-5 h-5" /> <span className="text-textPrimary">Backend</span>
            </motion.div>
          </motion.div>

          {/* Text & Milestones */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="bg-cardBg/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-accent/20 transition-colors duration-500"></div>
              
              <p className="text-lg text-textMuted leading-relaxed">
                I am an MCA student and an aspiring <strong className="text-textPrimary font-semibold">Software Engineer / FullStack Developer</strong> with strong fundamentals in Java and Data Structures & Algorithms. I am a quick learner and always eager to explore new technologies and improve my skills through real-world projects.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-base text-textPrimary mb-3 flex items-center gap-2 font-bold">
                  <Activity className="text-accent w-5 h-5" /> Health Monitoring
                </h3>
                <p className="text-sm text-textMuted leading-relaxed">
                  IoT system tracking real-time vitals using ESP32 & Node.js.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-base text-textPrimary mb-3 flex items-center gap-2 font-bold">
                  <Code2 className="text-accent w-5 h-5" /> Web Development
                </h3>
                <p className="text-sm text-textMuted leading-relaxed">
                  Built Chat Apps, UI Clones, and Full-Stack scalable solutions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold hover:text-accentLight transition-colors group">
                Let's work together 
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
