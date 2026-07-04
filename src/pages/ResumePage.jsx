import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowLeft, FaExpand, FaCompress } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { personalInfo } from '../data/resumeData';

const ResumePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeWrapRef = useRef(null);
  const navigate = useNavigate();

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await iframeWrapRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Keep state in sync when user presses Escape
  React.useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ── Top bar ── */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Back button */}
          <motion.button
            whileHover={{ x: -3 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </motion.button>

          {/* Title */}
          <span className="text-sm font-semibold text-white hidden sm:block">
            {personalInfo.name}
            <span className="text-primary">.</span>
            &nbsp;— Curriculum Vitae
          </span>

          {/* Download only */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
          >
            <FaDownload className="w-3.5 h-3.5" />
            Download CV
          </a>
        </div>
      </header>

      {/* ── CV Viewer ── */}
      <main className="pt-16 min-h-screen flex flex-col">
        {/* Background glow */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full filter blur-[130px] pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 container mx-auto px-4 md:px-8 py-6 flex flex-col"
        >
          {/* Browser-chrome card */}
          <div
            ref={iframeWrapRef}
            className="flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm flex flex-col"
          >
            {/* Fake browser chrome top-bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5 shrink-0">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>

              <span className="text-xs text-gray-400 font-mono tracking-wide">
                {personalInfo.name} — Curriculum Vitae
              </span>

              {/* Fullscreen toggle */}
              <button
                onClick={toggleFullscreen}
                className="text-gray-400 hover:text-white transition-colors"
                title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              >
                {isFullscreen
                  ? <FaCompress className="w-3.5 h-3.5" />
                  : <FaExpand className="w-3.5 h-3.5" />
                }
              </button>
            </div>

            {/* Loading spinner */}
            {!isLoaded && (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 min-h-[400px]">
                <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                <p className="text-sm text-gray-400">Loading CV preview…</p>
              </div>
            )}

            {/* iframe wrapper — overlay hides Drive's bottom toolbar pop-out */}
            <div className="relative flex-1 flex flex-col">
              <iframe
                src={personalInfo.resumeEmbedUrl}
                title="CV Preview"
                onLoad={() => setIsLoaded(true)}
                className={`w-full flex-1 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0 h-0'}`}
                style={{ minHeight: 'calc(100vh - 120px)', border: 'none' }}
                allow="autoplay"
              />
              {/* Covers the Drive bottom toolbar (pop-out icon, page controls) */}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{ height: '52px', background: 'var(--color-background, #0a0a0f)' }}
              />
            </div>
          </div>

          <p className="text-center text-xs text-gray-600 mt-3 mb-2">
            PDF preview
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default ResumePage;
