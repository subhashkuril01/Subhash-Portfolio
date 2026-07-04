import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { experience } from '../data/resumeData';

const Experience = () => {
  return (
    <section id="experience" className="py-16 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Work Experience" 
          subtitle="My professional journey and internships."
        />
        
        <div className="relative border-l border-white/10 ml-4 md:ml-6 pb-4">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 pl-8 md:pl-12 relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[8.5px] top-1.5 ring-4 ring-background group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
              
              <div className="glass-card p-6 md:p-8 rounded-2xl group-hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-primary font-medium">{exp.company}</h4>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
