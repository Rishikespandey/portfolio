import React, { useState } from 'react';
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
    <section id="contact" className="py-24 px-[10%] relative z-10">
      <div className="mb-16 text-center animate-[fadeInUp_0.8s_ease-out]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Get In Touch</h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">I'm currently looking for new opportunities. My inbox is always open!</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="bg-[#1a1a1d]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl animate-[fadeInLeft_0.8s_ease-out]">
          <h3 className="text-2xl text-white font-bold mb-8">Contact Information</h3>
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 flex justify-center items-center bg-[#ff6b00]/10 text-[#ff6b00] text-2xl rounded-xl border border-[#ff6b00]/20"><i className="uil uil-envelope-alt"></i></div>
            <div>
              <h4 className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Email</h4>
              <a href="mailto:sonupandey5705@gmail.com" className="text-white text-base hover:text-[#ff6b00] transition-colors">sonupandey5705@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 flex justify-center items-center bg-[#ff6b00]/10 text-[#ff6b00] text-2xl rounded-xl border border-[#ff6b00]/20"><i className="uil uil-phone"></i></div>
            <div>
              <h4 className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Phone</h4>
              <a href="tel:+917972574076" className="text-white text-base hover:text-[#ff6b00] transition-colors">+91 7972574076</a>
            </div>
          </div>
          <div className="flex gap-4 mt-8 pt-8 border-t border-white/10">
            <a href="https://github.com/Rishikespandey" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] flex justify-center items-center bg-white/5 text-white rounded-full hover:bg-[#ff6b00] hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,107,0,0.3)] transition-all duration-300 text-xl">
              <i className="uil uil-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/rishikesh-pandey-9b442b2b3" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] flex justify-center items-center bg-white/5 text-white rounded-full hover:bg-[#ff6b00] hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,107,0,0.3)] transition-all duration-300 text-xl">
              <i className="uil uil-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="bg-[#1a1a1d]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl animate-[fadeInRight_0.8s_ease-out] relative">
          {status !== 'success' && (
            <form id="portfolio-form" onSubmit={handleSubmit} noValidate>
              <div className="relative mb-8">
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder=" " 
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full bg-[#0f0f11]/80 border border-white/10 rounded-xl p-4 text-white text-base outline-none transition-all duration-300 focus:border-[#ff6b00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] focus:bg-[#0f0f11]"
                />
                <label htmlFor="name" className="absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#ff6b00] peer-focus:bg-[#1a1a1d] peer-focus:px-2 peer-valid:-top-3 peer-valid:left-3 peer-valid:text-xs peer-valid:bg-[#1a1a1d] peer-valid:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#1a1a1d] peer-[:not(:placeholder-shown)]:px-2">Your Name</label>
              </div>
              <div className="relative mb-8">
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder=" " 
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full bg-[#0f0f11]/80 border border-white/10 rounded-xl p-4 text-white text-base outline-none transition-all duration-300 focus:border-[#ff6b00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] focus:bg-[#0f0f11]"
                />
                <label htmlFor="email" className="absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#ff6b00] peer-focus:bg-[#1a1a1d] peer-focus:px-2 peer-valid:-top-3 peer-valid:left-3 peer-valid:text-xs peer-valid:bg-[#1a1a1d] peer-valid:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#1a1a1d] peer-[:not(:placeholder-shown)]:px-2">Your Email</label>
              </div>
              <div className="relative mb-8">
                <textarea 
                  id="message" 
                  rows="5" 
                  required 
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full bg-[#0f0f11]/80 border border-white/10 rounded-xl p-4 text-white text-base outline-none transition-all duration-300 focus:border-[#ff6b00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] focus:bg-[#0f0f11] resize-y"
                ></textarea>
                <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#ff6b00] peer-focus:bg-[#1a1a1d] peer-focus:px-2 peer-valid:-top-3 peer-valid:left-3 peer-valid:text-xs peer-valid:bg-[#1a1a1d] peer-valid:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#1a1a1d] peer-[:not(:placeholder-shown)]:px-2">Your Message</label>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] text-white rounded-xl font-bold flex justify-center items-center gap-2 hover:shadow-[0_8px_20px_rgba(255,107,0,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm" 
                disabled={status === 'loading'}
              >
                <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                <i className={status === 'loading' ? "uil uil-spinner uil-spin text-xl" : "uil uil-message text-xl"}></i>
              </button>
            </form>
          )}
          
          <div className={`absolute inset-0 flex flex-col justify-center items-center bg-[#1a1a1d]/95 backdrop-blur-xl rounded-2xl opacity-0 pointer-events-none transition-all duration-500 z-10 ${status === 'success' ? 'opacity-100 pointer-events-auto' : ''}`} id="success-message">
            <i className="uil uil-check-circle text-[5rem] text-[#ff6b00] mb-4"></i>
            <p className="text-2xl text-white font-bold tracking-wide">Message sent successfully!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
