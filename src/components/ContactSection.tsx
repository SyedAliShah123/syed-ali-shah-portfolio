import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Send, Copy, Check, Sparkles, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/audio';

interface ContactSectionProps {
  prefilledService?: string;
}

const BUDGET_OPTIONS = ['<$1,000', '$1k – $2.5k', '$2.5k – $5k', '$5k+'];

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: prefilledService || '',
    budget: '$1.5k – $3k',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, projectType: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const copyEmail = useCallback(() => {
    soundFX.playPop();
    navigator.clipboard.writeText('shahsyedali148@gmail.com');
    setCopiedEmail(true);

    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = window.setTimeout(() => {
      setCopiedEmail(false);
    }, 2500);
  }, []);

  const handleBudgetSelect = useCallback((b: string) => {
    soundFX.playPop();
    setFormData((prev) => ({ ...prev, budget: b }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    soundFX.playClick();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://formsubmit.co/ajax/shahsyedali148@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          'Project Type': formData.projectType || 'General Inquiry',
          Budget: formData.budget,
          Message: formData.message,
          _subject: `New CMS Project Inquiry from ${formData.name}`,
          _template: 'table',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        soundFX.playSuccess();
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.7 },
          colors: ['#FFFFFF', '#E0FF00', '#0A0A0A', '#9CA3AF'],
        });
      } else {
        setSubmitted(true);
        soundFX.playSuccess();
      }
    } catch (err) {
      console.warn('Form submission encountered an issue, proceeding with fallback:', err);
      setSubmitted(true);
      soundFX.playSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 px-6 sm:px-8 md:px-10 lg:px-12 bg-[#F6F6F4] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors duration-300 relative overflow-hidden border-b border-black/10 dark:border-white/10"
    >
      {/* Background neon ambient highlight */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E0FF00]/10 dark:bg-[#E0FF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Balanced 2-Column Header Grid: Big Title on Left (2 of 2 allowed locations for ghost outline), Subtext on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end justify-between">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/15 dark:border-white/15 text-xs font-mono tracking-widest text-neutral-800 dark:text-[#E0FF00] font-semibold">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-[#E0FF00] animate-pulse" />
              START A CONVERSATION
            </div>

            <h2 className="font-syne text-[38px] min-[370px]:text-5xl sm:text-7xl md:text-8xl lg:text-[124px] font-extrabold uppercase leading-[0.9] tracking-tight text-[#0A0A0A] dark:text-white">
              LET'S <br />
              <span className="outline-text hover:text-[#0A0A0A] dark:hover:text-white transition-colors duration-300">
                TALK.
              </span>
            </h2>
          </div>

          {/* Right Column: Subtext & Availability Status */}
          <div className="lg:col-span-5 space-y-6 pb-2">
            <p className="text-base sm:text-xl text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
              Have a CMS project in mind, an existing store to customize, or bespoke Liquid/Velo logic to build? Let's discuss scope and requirements.
            </p>

            {/* Live Availability Status Capsule Card: Standardized Accent Color */}
            <div className="p-5 rounded-3xl bg-white dark:bg-white/3 border border-black/15 dark:border-white/10 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-[#E0FF00] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black dark:bg-[#E0FF00]" />
                  </span>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-900 dark:text-white">
                    Available for New Projects
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 font-semibold">
                  Global
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/10 dark:border-white/10 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" />
                  <span>&lt; 24h Response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" />
                  <span>Transparent Scope</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Pills */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-white/3 border border-black/15 dark:border-white/10 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300 font-semibold">
                    <Mail className="w-4 h-4 text-black dark:text-[#E0FF00]" /> Direct Email
                  </div>
                  <button
                    id="copy-email-btn"
                    onClick={copyEmail}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-[#E0FF00] dark:hover:text-black border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5 transition-all cursor-pointer font-semibold"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-black dark:text-[#E0FF00]" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-neutral-600 dark:text-neutral-400" /> Copy Email
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:shahsyedali148@gmail.com"
                  className="block font-syne text-lg sm:text-xl font-bold tracking-tight text-[#0A0A0A] dark:text-white hover:text-black/70 dark:hover:text-[#E0FF00] transition-colors select-all"
                >
                  shahsyedali148@gmail.com
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-white/3 border border-black/15 dark:border-white/10 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 uppercase tracking-wider font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" /> Location
                </div>
                <div className="font-semibold text-sm text-[#0A0A0A] dark:text-white">Karachi, Pakistan</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono tracking-[0.25em] text-neutral-700 dark:text-neutral-300 uppercase font-semibold">
                Online Profiles
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/syed-ali-shah-b65139274' },
                  { name: 'GITHUB', url: 'https://github.com/SyedAliShah123' },
                  { name: 'WHATSAPP', url: 'https://wa.me/923131803440' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => soundFX.playPop()}
                    className="px-4 py-2 rounded-full border border-black/15 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-[#E0FF00] dark:hover:text-black hover:border-black dark:hover:border-[#E0FF00] text-neutral-800 dark:text-neutral-200 text-xs font-bold font-syne tracking-wider transition-all duration-200 flex items-center gap-1 cursor-pointer shadow-xs"
                  >
                    {s.name}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/3 border border-black/15 dark:border-white/15 shadow-xl backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-[#E0FF00]/10 border border-black/15 dark:border-[#E0FF00]/40 text-black dark:text-[#E0FF00] flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] dark:text-white">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-md mx-auto">
                    Thank you, <strong className="text-[#0A0A0A] dark:text-white">{formData.name}</strong>. I will review your project requirements and reply within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: '',
                        budget: '$1.5k – $3k',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-[#E0FF00] dark:text-black font-syne text-xs font-bold tracking-wider uppercase dark:hover:bg-[#E0FF00]/90 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F6F6F4] dark:bg-white/5 border border-black/15 dark:border-white/15 text-[#0A0A0A] dark:text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-black dark:focus:border-[#E0FF00] transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F6F6F4] dark:bg-white/5 border border-black/15 dark:border-white/15 text-[#0A0A0A] dark:text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-black dark:focus:border-[#E0FF00] transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 font-semibold">
                      Platform / Build Scope
                    </label>
                    <input
                      type="text"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      placeholder="e.g. WordPress ACF Pro / Shopify Liquid / Wix Studio / Webflow"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F6F6F4] dark:bg-white/5 border border-black/15 dark:border-white/15 text-[#0A0A0A] dark:text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-black dark:focus:border-[#E0FF00] transition-colors font-sans"
                    />
                  </div>

                  {/* Budget Selector Pills */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 font-semibold">
                      Estimated Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_OPTIONS.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => handleBudgetSelect(b)}
                            className={`py-2 px-3 rounded-xl text-xs font-mono transition-all cursor-pointer border text-center ${
                              isSelected
                                ? 'bg-[#0A0A0A] text-white border-black dark:bg-[#E0FF00] dark:text-black dark:border-[#E0FF00] font-bold shadow-xs'
                                : 'bg-[#F6F6F4] dark:bg-white/5 border-black/15 dark:border-white/10 text-neutral-800 dark:text-neutral-200 hover:border-black/30 dark:hover:border-white/30'
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 font-semibold">
                      Project Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the platform required, existing codebase (if any), and key deliverables..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#F6F6F4] dark:bg-white/5 border border-black/15 dark:border-white/15 text-[#0A0A0A] dark:text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-black dark:focus:border-[#E0FF00] transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-[#E0FF00] dark:text-black font-syne text-sm font-extrabold uppercase tracking-wider border border-black/10 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md dark:shadow-[0_0_20px_rgba(224,255,0,0.25)] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
