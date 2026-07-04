import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDocker, FaAngular, FaGitAlt, 
  FaTerminal, FaDatabase, FaServer, FaCodeBranch 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiExpress, SiMongodb, SiMysql, SiJson 
} from 'react-icons/si';

const floatingAnimation = {
  y: ["-10px", "10px"],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.5, 0.8, 0.5],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const CodeSnippet = () => {
  return (
    <div className="w-full glass-card p-4 rounded-xl border border-white/10 bg-black/60 shadow-2xl relative overflow-hidden z-10">
      {/* Mac window controls */}
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      
      {/* Code content */}
      <div className="font-mono text-xs md:text-sm text-gray-300 space-y-2">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">new</span> <span className="text-green-400">FullStackDeveloper</span>();
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="pl-4"
        >
          developer.<span className="text-blue-400">initialize</span>(&#123;
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="pl-8 text-gray-400"
        >
          skills: [<span className="text-orange-300">'React'</span>, <span className="text-orange-300">'Node.js'</span>, <span className="text-orange-300">'MongoDB'</span>],
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="pl-8 text-gray-400"
        >
          passion: <span className="text-orange-300">'Building scalable web apps'</span>,
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 }}
          className="pl-4"
        >
          &#125;);
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 3, repeat: Infinity, duration: 1 }}
          className="w-2 h-4 bg-primary inline-block mt-2"
        />
      </div>
    </div>
  );
};

const FloatingIcon = ({ Icon, color, delay, size = "text-3xl", styleClass, animationDuration = 3 }) => {
  return (
    <motion.div
      className={`absolute ${styleClass} glass-card p-3 rounded-xl border border-white/10 z-20 shadow-xl`}
      animate={{
        y: ["-8px", "8px"],
        rotate: [-2, 2]
      }}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }}
    >
      <Icon className={`${size}`} style={{ color }} />
    </motion.div>
  );
};

const NetworkNode = ({ label, styleClass, delay }) => {
  return (
    <motion.div
      className={`absolute ${styleClass} flex items-center gap-2 glass-card px-3 py-1.5 rounded-full border border-primary/20 text-xs font-medium text-gray-300 z-10 bg-black/40`}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 4, repeat: Infinity, delay: delay }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(124,58,237,0.8)]" />
      {label}
    </motion.div>
  );
};

const HeroIllustration = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20; // max 20px movement
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-lg mx-auto flex items-center justify-center">
      
      {/* Background glow & grid */}
      <motion.div 
        animate={pulseAnimation}
        className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-full blur-[80px] -z-10"
      />
      
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] -z-10 mix-blend-screen mask-image-radial" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 80%)' }} />

      {/* Main Container - Mouse Parallax */}
      <motion.div 
        className="relative w-full h-full flex items-center justify-center"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        
        {/* Central Terminal Window */}
        <div className="w-3/4 max-w-sm mx-auto relative z-10">
          <CodeSnippet />
          
          {/* Decorative glowing lines (network connections) */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10 opacity-30 pointer-events-none" viewBox="0 0 200 200">
            <motion.path 
              d="M100 100 L40 50 M100 100 L160 50 M100 100 L40 150 M100 100 L160 150 M100 100 L100 20" 
              stroke="url(#gradient)" 
              strokeWidth="1" 
              fill="none"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, 20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Icons */}
        <FloatingIcon Icon={FaReact} color="#61DAFB" delay={0} styleClass="-top-4 -left-4 md:-top-8 md:-left-8" animationDuration={3.5} />
        <FloatingIcon Icon={FaNodeJs} color="#339933" delay={0.5} styleClass="top-1/4 -right-6 md:-right-12" animationDuration={4} />
        <FloatingIcon Icon={SiTypescript} color="#3178C6" delay={1} styleClass="-bottom-6 left-1/4" animationDuration={3.2} />
        <FloatingIcon Icon={SiMongodb} color="#47A248" delay={1.5} styleClass="bottom-1/4 -right-4 md:-right-8" animationDuration={3.8} />
        <FloatingIcon Icon={FaDocker} color="#2496ED" delay={2} styleClass="top-0 right-1/4" animationDuration={4.5} />
        <FloatingIcon Icon={FaGitAlt} color="#F05032" delay={0.8} styleClass="-bottom-4 -left-6 md:-left-12" size="text-2xl" animationDuration={3.6} />

        {/* Floating Node Badges */}
        <NetworkNode label="Frontend API" styleClass="top-[10%] left-[10%]" delay={0} />
        <NetworkNode label="Database Core" styleClass="bottom-[15%] right-[5%]" delay={1} />
        <NetworkNode label="Cloud Server" styleClass="top-[15%] right-[10%]" delay={2} />
        
        {/* Micro-element floating cards */}
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 glass-card p-2 rounded-lg border border-white/5 opacity-70 z-0"
          animate={{ y: ["-5px", "5px"] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        >
          <SiJson className="text-xl text-yellow-500" />
        </motion.div>
        
        <motion.div 
          className="absolute right-[10%] bottom-[10%] glass-card p-2 rounded-lg border border-white/5 opacity-70 z-0"
          animate={{ y: ["5px", "-5px"] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <FaCodeBranch className="text-xl text-purple-400" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default HeroIllustration;
