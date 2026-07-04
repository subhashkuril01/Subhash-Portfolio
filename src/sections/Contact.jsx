import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../data/resumeData';

const Contact = () => {
  const opportunityText = personalInfo.openForOpportunities ? 'Yes' : 'No';

  return (
    <section id="contact" className="py-16 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          title="Reach Out to me!"
          subtitle="Discuss a project or just want to say hi? My inbox is open for all."
        />

        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-[40px] border border-white/10 bg-white/5 p-10 shadow-2xl"
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div className="space-y-8">
                <p className="text-2xl font-semibold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-fuchsia-500">
                  {personalInfo.title
                    ? `"${personalInfo.title}"`
                    : 'Contact details and availability.'}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-gray-300">
                      <FaMapMarkerAlt className="text-primary" />
                      <span className="font-medium">{personalInfo.location || 'Remote'}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="font-medium">Open for opportunities:</span>
                      <span className="text-white">{opportunityText}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-gray-500 uppercase tracking-[0.24em]">Contact</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-lg font-medium text-white hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 uppercase tracking-[0.24em] text-xs mb-4">
                    Connect with me
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {personalInfo.github && (
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/10 hover:bg-primary/25 transition"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {personalInfo.linkedin && (
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/10 hover:bg-primary/25 transition"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/10 hover:bg-primary/25 transition"
                    >
                      <FaEnvelope className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-3xl bg-background/70 p-8 border border-white/10">
                  <p className="text-white text-lg font-semibold mb-4">Let's build something impactful.</p>
                  <p className="text-gray-400 leading-relaxed">
                    I specialize in crafting polished web experiences for startups and teams that need modern, responsive applications. If you have a project in mind, I can help with planning, execution, and polished delivery.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    'Responsive web apps',
                    'Full-stack JavaScript'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-background/70 p-5">
                      <div className="mt-1 text-primary">
                        <FaCheck className="w-4 h-4" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
