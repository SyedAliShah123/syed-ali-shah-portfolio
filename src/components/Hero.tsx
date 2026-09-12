import React, { useCallback } from 'react';
import { ArrowDownRight, Download } from 'lucide-react';
import { soundFX } from '../utils/audio';
import syedPortrait from '../assets/syed-hero.webp';

const HERO_STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '5', label: 'Platforms Mastered' },
  { value: '15+', label: 'Projects Delivered' },
];

export const Hero: React.FC = () => {
  const scrollToProjects = useCallback(() => {
    soundFX.playClick();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleDownloadResume = useCallback(() => {
    soundFX.playPop();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col justify-center overflow-hidden bg-[#F6F6F4] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors duration-300 border-b border-black/10 dark:border-white/10"
    >
      {/* Subtle ambient neon glow in dark mode */}
      <div className="hidden dark:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-[#E0FF00]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-end">
          {/* Left Column: Eyebrow, Headline (3 lines), Supporting sentence, 2 CTA buttons */}
          <div className="lg:col-span-7 xl:col-span-7 pb-6 sm:pb-8 lg:pb-12 space-y-6 sm:space-y-7 xl:space-y-8">
            <div>
              {/* Eyebrow label */}
              <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-mono text-black/70 dark:text-neutral-300 mb-4 sm:mb-5 flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-black dark:bg-[#E0FF00]" />
                CMS Developer &amp; Specialist
              </div>

              {/* Bold headline formatted strictly across three lines without cutting off on mobile */}
              <h1 className="font-syne text-[24px] min-[360px]:text-[26px] min-[400px]:text-[28px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-extrabold uppercase leading-[0.95] tracking-tight text-[#0A0A0A] dark:text-white">
                <span className="block">MULTI-</span>
                <span className="block">PLATFORM</span>
                <span className="block mt-1 sm:mt-1.5 outline-text hover:text-[#0A0A0A] dark:hover:text-white transition-colors duration-300 whitespace-nowrap">
                  CMS EXPERT.
                </span>
              </h1>
            </div>

            {/* One supporting sentence */}
            <p className="text-base sm:text-lg text-black/75 dark:text-white/75 font-normal leading-relaxed max-w-lg font-sans">
              Specializing in custom web builds, theme development, and performance-focused implementations across WordPress, Shopify, Wix Studio, Webflow, and Squarespace.
            </p>

            {/* Two CTA buttons side by side in one row without horizontal clipping */}
            <div className="flex items-center gap-2 sm:gap-3.5 pt-1 w-full max-w-md">
              <button
                id="hero-primary-cta"
                onClick={scrollToProjects}
                onMouseEnter={() => soundFX.playPop()}
                className="px-3.5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-[#E0FF00] dark:text-black dark:hover:bg-[#E0FF00]/90 font-syne text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Explore Projects</span>
                <ArrowDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={handleDownloadResume}
                onMouseEnter={() => soundFX.playPop()}
                className="px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full border border-black/20 dark:border-white/20 bg-white/60 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 text-[#0A0A0A] dark:text-white font-syne text-[10.5px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  <span className="hidden min-[400px]:inline">Download </span>Resume
                </span>
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Wide transparent cutout portrait, grounded flush with bottom border, no box shadow */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-end relative self-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[580px] xl:max-w-[640px] flex justify-center lg:justify-end">
              <img
                src={syedPortrait}
                alt="Syed Ali Shah — CMS Developer"
                className="w-full h-auto max-h-[420px] sm:max-h-[500px] md:max-h-[560px] lg:max-h-[600px] xl:max-h-[660px] object-contain object-bottom select-none block"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Stat Bar directly below two-column area */}
        <div className="pt-8 sm:pt-10 border-t border-black/10 dark:border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10 dark:divide-white/10">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="py-4 sm:py-2 px-4 flex flex-col items-center justify-center text-center space-y-1"
              >
                <div className="font-syne text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A0A0A] dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
