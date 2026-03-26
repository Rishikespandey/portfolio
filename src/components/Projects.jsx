import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PROJECTS } from '../data/projects.js';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 bg-bgPrimary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-textPrimary">Featured Projects</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-accentLight mx-auto rounded-full"></div>
          <p className="mt-6 text-textMuted max-w-2xl mx-auto">
            Some of my recent work. Click on a project to see more details.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-10"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:border-accent/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500"
            >
              <div 
                className="relative h-64 sm:h-80 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute inset-0 bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-sm">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    <Eye className="w-5 h-5" /> View Details
                  </span>
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Subtle hover glow behind the card content */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="p-8 relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl text-white font-bold group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.repo !== "#" && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors" title="Source Code">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors" title="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-textMuted text-sm mb-6 line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accentLight border border-accent/20 text-xs font-semibold rounded-full shadow-[0_0_10px_rgba(139,92,246,0.1)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
