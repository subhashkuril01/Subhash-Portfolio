import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { education, certifications } from '../data/resumeData';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-black/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <SectionHeader 
              title="Education" 
            />
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl text-primary mt-1">
                      <FaGraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-lg text-primary font-medium mb-1">{edu.college}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {edu.year}
                        </span>
                        {edu.cgpa && (
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            CGPA: {edu.cgpa}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <SectionHeader 
              title="Certifications" 
            />
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors" />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl text-secondary mt-1">
                      <FaCertificate className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="text-primary font-medium">{cert.issuer}</span>
                        <span>|</span>
                        <span>{cert.duration}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
