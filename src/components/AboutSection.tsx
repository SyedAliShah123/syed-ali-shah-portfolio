import React, { useCallback } from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Code2 } from 'lucide-react';
import { soundFX } from '../utils/audio';
import syedPortrait from '../assets/syed-ali-shah.webp';

const PRINCIPLES = [
  {
    icon: Code2,
    title: 'Clean Code & Structure',
    description: 'Zero reliance on heavy page-builder bloat. Written with native PHP, Liquid, Velo JS, and modern CSS.',
  },
  {
    icon: Zap,
    title: 'Performance & CWV',
    description: 'Engineered for sub-second LCP and high Google PageSpeed scores across all responsive breakpoints.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Collaboration',
    description: 'Honest timelines, clear communication, and verifiable deliverables with no hidden complexity.',
  },
];

export const AboutSection: React.FC = () => {
  const scrollToContact = useCallback(() => {
    soundFX.playClick();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-6 sm:px-8 md:px-10 lg:px-12 border-b border-black/10 dark:border-white/10 relative bg-[#F6F6F4] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block: Quiet, solid heading without ghost-outline duplicate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-mono tracking-[0.25em] text-neutral-700 dark:text-neutral-300 uppercase font-semibold mb-2">
              Background &amp; Approach
            </div>
            <div className="flex items-center gap-4">
              <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#0A0A0A] dark:text-white">
                ABOUT ME.
              </h2>
              <button
                onClick={scrollToContact}
                onMouseEnter={() => soundFX.playPop()}
                aria-label="Contact Syed Ali Shah"
                className="w-11 h-11 rounded-full border border-black/20 dark:border-white/20 bg-white/60 dark:bg-white/5 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:border-[#E0FF00] dark:hover:text-[#E0FF00] hover:scale-105 transition-all cursor-pointer"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-xl text-neutral-800 dark:text-neutral-200 font-normal leading-relaxed font-sans">
              I am a <strong className="font-semibold text-black dark:text-white">Junior CMS Developer</strong> based in <strong className="font-semibold text-black dark:text-white">Karachi, Pakistan</strong>, currently engineering high-performance web systems at <strong className="font-semibold text-black dark:text-white">Peachy Digitals</strong>. I specialize in bespoke builds across <strong className="font-semibold text-black dark:text-[#E0FF00]">WordPress (ACF Pro, Elementor, Breakdance, Divi 5)</strong>, <strong className="font-semibold text-black dark:text-[#E0FF00]">Shopify Liquid 2.0</strong>, <strong className="font-semibold text-black dark:text-[#E0FF00]">Wix Studio (Velo)</strong>, and <strong className="font-semibold text-black dark:text-[#E0FF00]">Webflow</strong>.
            </p>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
              My development philosophy focuses on clean semantic structure, zero page-builder bloat, modular template hooks, and sub-second Core Web Vitals to convert both human visitors and AI-driven queries into real business results.
            </p>
          </div>
        </div>

        {/* 2-Column Profile & Principles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-black/15 dark:border-white/10 shadow-xl flex items-end justify-center">
                <img
                  src={syedPortrait}
                  alt="Syed Ali Shah — Junior CMS Developer at Peachy Digitals"
                  width={819}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Bottom gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Inset Title on image */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-10 space-y-0.5">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-300 dark:text-[#E0FF00] font-semibold">
                    Junior CMS Developer @ Peachy Digitals
                  </div>
                  <div className="font-syne text-xl font-bold tracking-tight text-white">
                    Syed Ali Shah
                  </div>
                  <div className="text-xs font-mono text-neutral-300">
                    WordPress • Shopify • Wix Studio • Webflow
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Principles Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-700 dark:text-neutral-300 font-semibold mb-2">
              Core Development Principles
            </div>

            <div className="space-y-3">
              {PRINCIPLES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white dark:bg-white/3 border border-black/10 dark:border-white/10 shadow-xs space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 flex items-center justify-center text-black dark:text-[#E0FF00]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-syne text-base sm:text-lg font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal pl-11">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Strategic Internal Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <span className="text-neutral-500">Explore next:</span>
              <a
                href="#projects"
                className="font-bold text-[#0A0A0A] dark:text-[#E0FF00] hover:underline inline-flex items-center gap-1"
              >
                View Selected Works →
              </a>
              <span className="text-neutral-400">•</span>
              <a
                href="#contact"
                className="font-bold text-[#0A0A0A] dark:text-[#E0FF00] hover:underline inline-flex items-center gap-1"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
