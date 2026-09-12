import React, { useState, useCallback } from 'react';
import { ChevronDown, Check, Clock, Sparkles } from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

interface ServicesSectionProps {
  onSelectServiceForContact?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForContact,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<number>(1);

  const toggleService = useCallback((id: number) => {
    soundFX.playClick();
    setActiveServiceId((prev) => (prev === id ? 0 : id));
  }, []);

  const handleHireClick = useCallback((serviceTitle: string) => {
    soundFX.playPop();
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, [onSelectServiceForContact]);

  return (
    <section
      id="services"
      className="py-20 sm:py-28 px-6 sm:px-8 md:px-10 lg:px-12 border-b border-black/10 dark:border-white/10 bg-[#F6F6F4] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block: Quieter, solid heading without ghost-outline duplicate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-mono tracking-[0.25em] text-neutral-700 dark:text-neutral-300 uppercase font-semibold mb-2">
              Services &amp; Development Scope
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#0A0A0A] dark:text-white leading-[0.95]">
              SERVICES &amp; SOLUTIONS.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed">
              Building dependable, responsive, and ultra-fast websites engineered specifically for content editors, scalability, and long-term maintainability.
            </p>
          </div>
        </div>

        {/* Services Numbered Capsule Stack */}
        <div className="space-y-4">
          {servicesData.map((svc) => {
            const isActive = activeServiceId === svc.id;

            return (
              <div
                key={svc.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'bg-white dark:bg-neutral-900/90 text-[#0A0A0A] dark:text-white border-black dark:border-[#E0FF00]/80 shadow-md dark:shadow-[0_0_30px_rgba(224,255,0,0.08)]'
                    : 'bg-white/60 dark:bg-white/3 text-[#0A0A0A] dark:text-white border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30'
                }`}
              >
                {/* Clickable Header Bar */}
                <div
                  onClick={() => toggleService(svc.id)}
                  onMouseEnter={() => soundFX.playPop()}
                  className="p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                        isActive
                          ? 'border-black bg-black text-white dark:border-[#E0FF00] dark:bg-[#E0FF00] dark:text-black font-extrabold'
                          : 'border-black/15 bg-black/5 text-neutral-800 dark:border-white/20 dark:bg-white/5 dark:text-neutral-200'
                      }`}
                    >
                      0{svc.id}
                    </div>

                    <div className="min-w-0">
                      <h3
                        className={`font-syne text-lg sm:text-2xl font-bold tracking-tight truncate ${
                          isActive
                            ? 'text-black dark:text-[#E0FF00]'
                            : 'text-[#0A0A0A] dark:text-white'
                        }`}
                      >
                        {svc.title}
                      </h3>
                      <div
                        className={`text-xs sm:text-sm truncate mt-0.5 ${
                          isActive
                            ? 'text-neutral-800 dark:text-neutral-200'
                            : 'text-neutral-600 dark:text-neutral-400'
                        }`}
                      >
                        {svc.description}
                      </div>
                    </div>
                  </div>

                  {/* Circular indicator button */}
                  <div
                    className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'border-black bg-black text-white dark:border-[#E0FF00] dark:bg-[#E0FF00] dark:text-black'
                        : 'border-black/20 text-neutral-700 dark:border-white/20 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Details Panel */}
                {isActive && (
                  <div className="px-5 sm:px-7 pb-7 pt-2 border-t border-black/10 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in slide-in-from-top-2 duration-300">
                    <div className="lg:col-span-6 space-y-4">
                      <p className="text-sm sm:text-base leading-relaxed text-neutral-800 dark:text-neutral-200 font-normal">
                        {svc.details}
                      </p>

                      <div className="space-y-2">
                        <div className="font-mono text-xs tracking-wider uppercase text-neutral-700 dark:text-neutral-300 font-semibold">
                          Included Deliverables:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {svc.deliverables.map((del, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-xs text-neutral-800 dark:text-neutral-200"
                            >
                              <Check className="w-3.5 h-3.5 text-black dark:text-[#E0FF00] shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-neutral-100/70 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 font-mono text-xs text-neutral-700 dark:text-neutral-300">
                          <Clock className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" />
                          Average Turnaround:{' '}
                          <span className="font-bold text-[#0A0A0A] dark:text-white">
                            {svc.turnaround}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {svc.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10 font-semibold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => handleHireClick(svc.title)}
                        className="w-full py-3 px-4 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-[#E0FF00] dark:text-black dark:hover:bg-[#E0FF00]/90 font-syne text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.99]"
                      >
                        <Sparkles className="w-3.5 h-3.5 shrink-0 text-white dark:text-black" />
                        <span className="whitespace-nowrap">
                          Inquire for {svc.title} →
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
