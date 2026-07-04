import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { skills } from '../data/resumeData';

const SkillCard = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-colors"
  >
    <h3 className="text-xl font-semibold mb-6 text-white group-hover:text-primary transition-colors">{title}</h3>
    {items[0]?.icon ? (
      <div className="grid grid-cols-2 gap-4">
        {items.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
            <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    ) : (
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-black/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="My toolbox for building robust and scalable applications."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Programming Languages" items={skills.languages} delay={0.1} />
          <SkillCard title="Frontend Development" items={skills.frontend} delay={0.2} />
          <SkillCard title="Backend Development" items={skills.backend} delay={0.3} />
          <SkillCard title="Databases" items={skills.databases} delay={0.4} />
          <SkillCard title="Tools and Platforms" items={skills.tools} delay={0.5} />
          <SkillCard title="Core Concepts" items={skills.coreConcepts} delay={0.6} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
