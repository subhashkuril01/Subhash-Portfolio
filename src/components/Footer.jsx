import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 border-t border-white/5 pt-16 pb-8 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link 
              to="hero" 
              smooth={true} 
              duration={500}
              className="text-2xl font-bold text-white cursor-pointer select-none inline-block mb-2"
            >
              {personalInfo.name.split(' ')[0]}
              <span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Building scalable web applications.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <Link 
            to="hero" 
            smooth={true} 
            duration={500}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer"
          >
            Back to top <FaChevronUp className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
