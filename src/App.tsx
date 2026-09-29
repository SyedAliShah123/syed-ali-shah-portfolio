import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { LenisProvider } from './components/LenisProvider';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Footer } from './components/Footer';
import { QuickContactFab } from './components/QuickContactFab';
import { SectionSkeleton } from './components/SectionSkeleton';

// Code-split below-the-fold sections into on-demand chunks
const CapabilitiesSection = lazy(() =>
  import('./components/CapabilitiesSection').then((m) => ({ default: m.CapabilitiesSection }))
);
const AboutSection = lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const ProjectsSection = lazy(() =>
  import('./components/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);
const ServicesSection = lazy(() =>
  import('./components/ServicesSection').then((m) => ({ default: m.ServicesSection }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection }))
);

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

        {/* Main Content Sections: Hero & Marquee are critical above-the-fold */}
        <main>
          <Hero />
          <Marquee />

          <Suspense fallback={<SectionSkeleton height="min-h-[480px]" title="Loading Capabilities..." />}>
            <CapabilitiesSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="min-h-[600px]" title="Loading About Me..." />}>
            <AboutSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="min-h-[700px]" title="Loading Projects..." />}>
            <ProjectsSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="min-h-[600px]" title="Loading Services..." />}>
            <ServicesSection onSelectServiceForContact={handleSelectService} />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="min-h-[650px]" title="Loading Contact Form..." />}>
            <ContactSection prefilledService={selectedServiceForContact} />
          </Suspense>
        </main>

        {/* Footer & Quick Contact */}
        <Footer />
        <QuickContactFab />
      </div>
    </LenisProvider>
  );
}
