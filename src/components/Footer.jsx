import React from 'react';
const Footer = () => {
  return (
    <footer className="text-center p-6 border-t border-white/10 bg-[#0f0f11]/80 backdrop-blur-md relative z-10 w-full">
      <p className="text-sm text-gray-400">
        Built by <span className="text-[#ff6b00] font-semibold">Rishikesh Pandey</span> &copy; <span id="year" className="text-[#ff6b00] font-semibold">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
