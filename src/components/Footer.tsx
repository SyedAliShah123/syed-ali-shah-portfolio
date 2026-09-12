import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFX } from '../utils/audio';
import logoBlack from '../assets/logo-black.svg';
import logoYellow from '../assets/logo-yellow.svg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-10 pb-24 md:py-10 px-6 sm:px-8 md:px-10 lg:px-12 bg-[#F0F0ED] dark:bg-[#0A0A0A] text-neutral-700 dark:text-neutral-300 border-t border-black/10 dark:border-white/10 text-xs font-mono transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo and CMS Developer */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Syed Ali Shah - Top"
            className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src={logoBlack}
              alt="Syed Ali Shah Logo"
              className="h-4 sm:h-5 w-auto object-contain block dark:hidden"
            />
            <img
              src={logoYellow}
              alt="Syed Ali Shah Logo"
              className="h-4 sm:h-5 w-auto object-contain hidden dark:block"
            />
          </button>
          <span className="text-black/30 dark:text-white/30">•</span>
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">CMS DEVELOPER</span>
        </div>

        {/* Center: 2026 Copyright centered */}
        <p className="text-neutral-600 dark:text-neutral-400 text-center font-medium">
          © 2026 SYED ALI SHAH — ALL RIGHTS RESERVED
        </p>

        {/* Right / Centered on Mobile: Back to Top Button unhidden by FAB */}
        <div className="flex items-center justify-center md:justify-end">
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFX.playPop()}
            aria-label="Back to top"
            className="group px-3.5 py-1.5 md:p-0 md:w-8 md:h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center gap-2 text-neutral-800 dark:text-neutral-200 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-[#E0FF00] dark:hover:border-[#E0FF00] transition-colors cursor-pointer active:scale-95"
          >
            <span className="text-[11px] uppercase font-mono font-bold tracking-wider md:hidden">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
