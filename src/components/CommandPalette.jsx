import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Briefcase, FileCode2, Mail, Download, Github } from 'lucide-react';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const runCommand = (command) => {
    setOpen(false);
    command();
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-center items-start pt-[20vh] px-4 backdrop-blur-sm bg-black/40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-lg bg-cardBg border border-white/10 rounded-xl overflow-hidden shadow-2xl"
          >
            <Command className="w-full flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center border-b border-white/10 px-3">
                <Search className="w-5 h-5 text-textMuted" />
                <Command.Input 
                  placeholder="Type a command or search..." 
                  className="w-full bg-transparent border-0 outline-none text-textPrimary py-4 px-3 placeholder:text-textMuted" 
                  autoFocus
                />
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide text-sm">
                <Command.Empty className="py-6 text-center text-textMuted text-sm">No results found.</Command.Empty>

                <Command.Group heading="Navigation" className="text-xs font-semibold text-textMuted/50 px-2 py-1 uppercase tracking-wider">
                  <Command.Item 
                    onSelect={() => runCommand(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
                    className="flex items-center gap-3 px-3 py-3 mt-1 rounded-lg hover:bg-white/5 cursor-pointer text-textPrimary aria-selected:bg-accent/20 aria-selected:text-accent"
                  >
                    <Home className="w-4 h-4" /> Home
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => scrollTo('about'))}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 cursor-pointer text-textPrimary aria-selected:bg-accent/20 aria-selected:text-accent"
                  >
                    <User className="w-4 h-4" /> About
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => scrollTo('skills'))}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 cursor-pointer text-textPrimary aria-selected:bg-accent/20 aria-selected:text-accent"
                  >
                    <Briefcase className="w-4 h-4" /> Skills
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => scrollTo('projects'))}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 cursor-pointer text-textPrimary aria-selected:bg-accent/20 aria-selected:text-accent"
                  >
                    <FileCode2 className="w-4 h-4" /> Projects
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => scrollTo('contact'))}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 cursor-pointer text-textPrimary aria-selected:bg-accent/20 aria-selected:text-accent"
                  >
                    <Mail className="w-4 h-4" /> Contact
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="h-px bg-white/10 my-2" />

                <Command.Group heading="Actions" className="text-xs font-semibold text-textMuted/50 px-2 py-1 uppercase tracking-wider">
                  <Command.Item 
                    onSelect={() => runCommand(() => window.open('https://github.com/Rishikespandey', '_blank'))}
                    className="flex items-center gap-3 px-3 py-3 mt-1 rounded-lg hover:bg-white/5 cursor-pointer text-textPrimary aria-selected:bg-accent/20 aria-selected:text-accent"
                  >
                    <Github className="w-4 h-4" /> Open GitHub
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => window.alert('Downloading resume...'))}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 cursor-pointer text-textPrimary aria-selected:bg-accent/20 aria-selected:text-accent"
                  >
                    <Download className="w-4 h-4" /> Download Resume
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
          {/* Overlay click to close */}
          <div className="absolute inset-0 z-[-1]" onClick={() => setOpen(false)}></div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
