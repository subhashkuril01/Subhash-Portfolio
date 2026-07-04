import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Highlights from './sections/Highlights';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ResumePage from './pages/ResumePage';

// Main portfolio page
const PortfolioHome = () => (
  <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Highlights />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
