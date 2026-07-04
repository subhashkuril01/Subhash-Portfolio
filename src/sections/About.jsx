import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../data/resumeData';

const About = () => {
  return (
    <section id="about" className="py-16 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="About Me" 
          subtitle="A brief introduction to who I am and what I do."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed"
          >
            <p className="mb-6">
              I am a dedicated <strong>{personalInfo.title}</strong> with hands-on experience in enterprise web application development. My journey includes a comprehensive Full Stack Development Internship where I honed my skills in modern web technologies.
            </p>
            <p className="mb-6">
              I am proficient in building scalable applications across the stack using JavaScript, Angular, React.js, Node.js, and Express.js. On the database side, I have worked extensively with MySQL and MongoDB, delivering robust REST API solutions.
            </p>
            <p>
              My expertise also covers building secure authentication systems, creating dynamic monitoring dashboards, and working within Agile/SDLC workflows. I focus heavily on Object-Oriented Programming principles and maintain high code quality through rigorous debugging and version control practices.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
            <h3 className="text-xl font-bold mb-6 text-white">Core Competencies</h3>
            <ul className="space-y-4">
              {[
                "Full Stack Web Development",
                "RESTful API Design & Integration",
                "Database Management (SQL & NoSQL)",
                "Authentication & Security (JWT, RBAC)",
                "Agile Methodologies & SDLC",
                "Responsive UI/UX Implementation",
                "Performance Optimization & Testing"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
