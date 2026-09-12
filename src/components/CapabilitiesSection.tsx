import React, { useCallback } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { platformCapabilities, statsData } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

const STAT = statsData[0];

export const CapabilitiesSection: React.FC = () => {
  const scrollToContact = useCallback(() => {
    soundFX.playClick();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="capabilities"
      className="py-16 sm:py-24 px-6 sm:px-8 md:px-10 lg:px-12 border-b border-black/10 dark:border-white/10 bg-[#F6F6F4] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header: Quieter, solid heading without ghost-outline duplicate */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-[11px] font-mono tracking-[0.25em] text-neutral-700 dark:text-neutral-300 uppercase font-semibold">
              Technical Stacks &amp; Status
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#0A0A0A] dark:text-white">
              CORE CAPABILITIES.
            </h2>
          </div>

          {/* Availability Badge relocated out of hero */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4.5 sm:px-5 py-2.5 rounded-full bg-white dark:bg-white/5 border border-black/15 dark:border-white/15 shadow-xs flex items-center gap-2.5 shrink-0 whitespace-nowrap">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-[#E0FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black dark:bg-[#E0FF00]" />
              </span>
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0A0A0A] dark:text-white whitespace-nowrap">
                Available for New Projects
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Single True Stat on Left + Platform Capabilities Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: The Single Honest Stat Block (Identical type scale to About section) */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-white dark:bg-white/3 border border-black/15 dark:border-white/10 shadow-sm dark:shadow-xl space-y-6">
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div className="font-syne text-5xl sm:text-6xl font-extrabold text-[#0A0A0A] dark:text-white tracking-tight">
                  {STAT.value}
                  <span className="text-black dark:text-[#E0FF00]">{STAT.suffix}</span>
                </div>
                <Sparkles className="w-5 h-5 text-neutral-700 dark:text-[#E0FF00]" />
              </div>
              <div className="font-syne text-sm sm:text-base font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider">
                {STAT.label}
              </div>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-mono">
                {STAT.description}
              </p>
            </div>

            <div className="pt-4 border-t border-black/10 dark:border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-800 dark:text-neutral-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-[#E0FF00] shrink-0" />
                <span>Honest, verifiable code implementations</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-800 dark:text-neutral-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-[#E0FF00] shrink-0" />
                <span>No proprietary builder lock-in</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-800 dark:text-neutral-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-[#E0FF00] shrink-0" />
                <span>Core Web Vitals &amp; performance tuning</span>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              onMouseEnter={() => soundFX.playPop()}
              className="w-full py-3 px-4 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-[#E0FF00] dark:text-black dark:hover:bg-[#E0FF00]/90 font-syne text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Discuss Platform Setup</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Platform Capabilities Interactive Stack */}
          <div className="lg:col-span-8 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-700 dark:text-neutral-300 font-semibold mb-2">
              Supported Platforms &amp; CMS Specializations
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {platformCapabilities.map((platform) => (
                <div
                  key={platform.name}
                  onMouseEnter={() => soundFX.playPop()}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-white/3 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-[#E0FF00] transition-all duration-200 flex items-center justify-between cursor-pointer shadow-xs group"
                  onClick={scrollToContact}
                >
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap">
                      <span className="font-syne text-sm sm:text-base xl:text-lg font-bold text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-[#E0FF00] transition-colors whitespace-nowrap">
                        {platform.name}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-neutral-800 dark:text-[#E0FF00] border border-black/10 dark:border-white/10 font-semibold whitespace-nowrap shrink-0">
                        {platform.level}
                      </span>
                    </div>
                    <div className="text-xs text-neutral-700 dark:text-neutral-300 font-mono line-clamp-1">
                      {platform.sub}
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center text-black/70 dark:text-white/70 group-hover:text-white group-hover:bg-black dark:group-hover:text-black dark:group-hover:bg-[#E0FF00] dark:group-hover:border-[#E0FF00] transition-all shrink-0 ml-2">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
