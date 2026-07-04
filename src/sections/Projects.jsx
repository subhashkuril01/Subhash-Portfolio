import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/resumeData';

const Projects = () => {
  return (
    <section id="projects" className="py-16 relative bg-black/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A showcase of my full-stack development work."
        />
        
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card p-2 border-white/10 group-hover:border-primary/30 transition-colors duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 rounded-xl">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors text-white backdrop-blur-md">
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-secondary transition-colors text-white backdrop-blur-md">
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary font-medium tracking-wider text-sm uppercase">{project.duration}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="glass-card p-6 md:p-8 rounded-xl mb-6 relative z-10 shadow-2xl">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-primary/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
