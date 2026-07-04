import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';
import Button from '../components/Button';
import HeroIllustration from '../components/HeroIllustration';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6"
            >
              Available for new opportunities
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
              {personalInfo.title}
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {personalInfo.summary.split('.')[0]}. {personalInfo.summary.split('.')[1]}.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button href="/resume">
                View Resume
              </Button>
              <Button variant="secondary" href="#contact">
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
