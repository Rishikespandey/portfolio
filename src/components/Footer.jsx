import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/10 bg-bgPrimary/80 backdrop-blur-md z-10 w-full overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-6 mb-8"
        >
          <a href="https://github.com/Rishikespandey" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-textMuted hover:bg-accent/20 hover:text-accent hover:border-accent/30 transition-all duration-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/rishikesh-pandey-9b442b2b3" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-textMuted hover:bg-accent/20 hover:text-accent hover:border-accent/30 transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:sonupandey5705@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10 text-textMuted hover:bg-accent/20 hover:text-accent hover:border-accent/30 transition-all duration-300">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-textMuted text-center"
        >
          Designed & Built by <span className="text-accent font-semibold tracking-wide">Rishikesh Pandey</span> &copy; {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
