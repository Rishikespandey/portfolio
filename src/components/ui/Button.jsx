import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const Button = ({ children, onClick, href, className = '', variant = 'primary', icon: Icon, target, rel, ...props }) => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Magnetic Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center, scaled down for subtle magnetic pull
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Ripple Effect Logic
  const handleRipple = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    
    // Calculate click position relative to button
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    const newRipple = {
      x: xPos,
      y: yPos,
      id: Date.now()
    };

    setRipples((prev) => [...prev, newRipple]);

    if (onClick) {
      onClick(e);
    }
  };

  // Clean up ripples to avoid memory leaks
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  // Base styles: removed default transitions on transform to prevent conflict with Framer Motion springs
  const baseClasses = "group relative inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full font-semibold overflow-hidden outline-none focus:ring-2 focus:ring-accent/50 z-10";
  
  const variants = {
    primary: "text-white bg-accent/90 backdrop-blur-md hover:bg-accent hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] border border-accent/50",
    secondary: "text-textPrimary bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    glow: "text-white bg-gradient-to-r from-accent to-blue-600 border border-transparent hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] hover:from-accentLight hover:to-blue-500"
  };

  const content = (
    <>
      <span className="relative z-20 flex items-center gap-2 pointer-events-none">
        {children}
        {Icon && (
          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Icon className="w-5 h-5 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
          </motion.div>
        )}
      </span>

      {/* Sweeping Light Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />

      {/* Ripples Container */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-full pointer-events-none">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ 
                top: ripple.y, 
                left: ripple.x, 
                width: 0, 
                height: 0, 
                opacity: 0.5,
                x: "-50%",
                y: "-50%"
              }}
              animate={{ 
                width: 500, 
                height: 500, 
                opacity: 0 
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute bg-white/30 rounded-full"
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );

  const MotionLink = motion.a;

  if (href) {
    return (
      <MotionLink
        ref={buttonRef}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleRipple}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        style={{ x: springX, y: springY, textDecoration: 'none' }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleRipple}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
