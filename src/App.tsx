import React, { useState, useEffect, useCallback } from 'react';
import { LenisProvider } from './components/LenisProvider';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickContactFab } from './components/QuickContactFab';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('syed_portfolio_theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default to sleek dark mode
  });

  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('syed_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('syed_portfolio_theme', 'light');
    }
  }, [darkMode]);

  const handleSelectService = useCallback((serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
  }, []);

  return (
    <LenisProvider>
      <div className="min-h-screen bg-[#F6F6F4] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors duration-300 relative selection:bg-[#0A0A0A] selection:text-white dark:selection:bg-[#E0FF00] dark:selection:text-black">
        <CustomCursor />

        {/* Global Navigation */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <Marquee />
          <CapabilitiesSection />
          <AboutSection />
          <ProjectsSection />
          <ServicesSection onSelectServiceForContact={handleSelectService} />
          {/* Add real client testimonials once available */}
          <ContactSection prefilledService={selectedServiceForContact} />
        </main>

        {/* Footer & Quick Contact */}
        <Footer />
        <QuickContactFab />
      </div>
    </LenisProvider>
  );
}
