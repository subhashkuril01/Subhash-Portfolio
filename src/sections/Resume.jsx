import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaExpand, FaExternalLinkAlt } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';
import SectionHeader from '../components/SectionHeader';

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="resume" className="py-16 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          title="My Resume"
          subtitle="View or download my full CV below"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10"
        >
          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            >
              <FaDownload className="w-4 h-4" />
              Download CV
            </a>
            <a
              href={`https://drive.google.com/file/d/1YimHuX37soedPCJonItAXwCmMinah1od/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Open in Drive
            </a>
          </div>

          {/* Iframe viewer card */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-gray-400 font-mono tracking-wide">
                {personalInfo.name} — Curriculum Vitae
              </span>
              <a
                href={`https://drive.google.com/file/d/1YimHuX37soedPCJonItAXwCmMinah1od/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="Open fullscreen"
              >
                <FaExpand className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Loading shimmer */}
            {!isLoaded && (
              <div className="absolute inset-0 top-12 flex flex-col items-center justify-center gap-4 bg-background/60 z-10">
                <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                <p className="text-sm text-gray-400">Loading CV preview…</p>
              </div>
            )}

            <iframe
              src={personalInfo.resumeEmbedUrl}
              title="Subhash Kuril — CV Preview"
              onLoad={() => setIsLoaded(true)}
              className="w-full"
              style={{ height: '80vh', minHeight: '600px', border: 'none' }}
              allow="autoplay"
            />
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            Powered by Google Drive · PDF preview
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
