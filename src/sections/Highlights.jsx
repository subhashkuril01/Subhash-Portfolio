import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { highlights } from '../data/resumeData';

const Highlights = () => {
  return (
    <section id="highlights" className="py-16 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Highlights" 
          subtitle="Key milestones and facts from my professional journey."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl flex items-start gap-4 group hover:-translate-y-1 transition-transform"
            >
              <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                <FaTrophy className="w-6 h-6" />
              </div>
              <p className="text-gray-300 leading-relaxed text-lg pt-1">
                {highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
