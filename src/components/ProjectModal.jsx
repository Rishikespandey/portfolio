import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed  top-20  inset-0 z-[100] flex justify-center items-center px-8 py-12">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 p-20 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative   w-full max-w-4xl max-h-[90vh] bg-cardBg rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col pointer-events-auto z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-black/50">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cardBg to-transparent pointer-events-none" />
          </div>

          <div className="p-8 md:p-12 -mt-16 relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                <h4 className="text-xl font-bold text-white border-b border-white/10 pb-4">Overview</h4>
                <p className="text-textMuted leading-relaxed text-lg">
                  {project.desc}
                </p>
                
                {project.features && (
                  <>
                    <h4 className="text-xl font-bold text-white border-b border-white/10 pb-4 mt-8">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 text-textMuted">
                          <span className="text-accent mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="space-y-6 bg-white/5 rounded-2xl p-6 border border-white/5 h-fit">
                <h4 className="text-lg font-bold text-white uppercase tracking-wider text-sm">Links</h4>
                
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-accent text-white rounded-xl hover:bg-accentLight transition-colors font-semibold group"
                >
                  Live Demo
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors font-semibold group"
                >
                  Source Code
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
