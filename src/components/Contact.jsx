import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setStatus('loading');
      // Simulate form submission
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-textPrimary">Get In Touch</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-accentLight mx-auto rounded-full mb-6"></div>
          <p className="text-textMuted max-w-2xl mx-auto text-lg hover:text-textPrimary transition-colors duration-300">
            I'm currently looking for new opportunities. My inbox is always open!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cardBg/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl h-fit relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors duration-500"></div>

            <h3 className="text-2xl text-white font-bold mb-10 tracking-wide">Contact Information</h3>
            
            <div className="flex items-center gap-6 mb-8 group/item">
              <div className="w-14 h-14 flex justify-center items-center bg-accent/10 text-accent rounded-2xl border border-accent/20 group-hover/item:scale-110 group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(139,92,246,0.1)]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-textMuted text-xs mb-1 uppercase tracking-widest font-semibold flex items-center gap-2">
                  Email
                </h4>
                <a href="mailto:sonupandey5705@gmail.com" className="text-white text-base md:text-lg hover:text-accentLight transition-colors font-medium">sonupandey5705@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8 group/item">
              <div className="w-14 h-14 flex justify-center items-center bg-accent/10 text-accent rounded-2xl border border-accent/20 group-hover/item:scale-110 group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(139,92,246,0.1)]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-textMuted text-xs mb-1 uppercase tracking-widest font-semibold">Phone</h4>
                <a href="tel:+917972574076" className="text-white text-base md:text-lg hover:text-accentLight transition-colors font-medium">+91 7972574076</a>
              </div>
            </div>

            <div className="flex gap-4 mt-12 pt-8 border-t border-white/10">
              <a href="https://github.com/Rishikespandey" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex justify-center items-center bg-white/5 text-textMuted rounded-full hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(139,92,246,0.4)] transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rishikesh-pandey-9b442b2b3" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex justify-center items-center bg-white/5 text-textMuted rounded-full hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(139,92,246,0.4)] transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cardBg/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  id="portfolio-form" 
                  onSubmit={handleSubmit} 
                  noValidate
                  className="space-y-6"
                >
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      placeholder=" " 
                      value={formData.name}
                      onChange={handleChange}
                      className="peer w-full bg-bgPrimary/50 border border-white/10 rounded-2xl p-4 pt-6 pb-2 text-white text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] focus:bg-bgPrimary"
                    />
                    <label htmlFor="name" className="absolute left-4 top-4 text-textMuted text-xs uppercase tracking-widest font-semibold transition-all duration-300 pointer-events-none peer-focus:-translate-y-2 peer-focus:text-[10px] peer-focus:text-accent peer-valid:-translate-y-2 peer-valid:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[10px]">Name</label>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder=" " 
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full bg-bgPrimary/50 border border-white/10 rounded-2xl p-4 pt-6 pb-2 text-white text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] focus:bg-bgPrimary"
                    />
                    <label htmlFor="email" className="absolute left-4 top-4 text-textMuted text-xs uppercase tracking-widest font-semibold transition-all duration-300 pointer-events-none peer-focus:-translate-y-2 peer-focus:text-[10px] peer-focus:text-accent peer-valid:-translate-y-2 peer-valid:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[10px]">Email Address</label>
                  </div>
                  
                  <div className="relative group">
                    <textarea 
                      id="message" 
                      rows="5" 
                      required 
                      placeholder=" "
                      value={formData.message}
                      onChange={handleChange}
                      className="peer w-full bg-bgPrimary/50 border border-white/10 rounded-2xl p-4 pt-8 text-white text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] focus:bg-bgPrimary resize-y min-h-[150px]"
                    ></textarea>
                    <label htmlFor="message" className="absolute left-4 top-4 text-textMuted text-xs uppercase tracking-widest font-semibold transition-all duration-300 pointer-events-none peer-focus:-translate-y-1 peer-focus:text-[10px] peer-focus:text-accent peer-valid:-translate-y-1 peer-valid:text-[10px] peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:text-[10px]">Message</label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-4 mt-2 bg-gradient-to-r from-accent to-accentLight text-white rounded-2xl font-bold flex justify-center items-center gap-3 hover:shadow-[0_8px_25px_rgba(139,92,246,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-sm hover:-translate-y-1 active:scale-[0.98]" 
                    disabled={status === 'loading'}
                  >
                    <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col justify-center items-center bg-cardBg/95 backdrop-blur-xl rounded-2xl z-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-24 h-24 text-accent mb-6" />
                  </motion.div>
                  <h3 className="text-3xl text-white font-bold tracking-tight mb-2">Message Sent!</h3>
                  <p className="text-textMuted">I'll get back to you as soon as possible.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
