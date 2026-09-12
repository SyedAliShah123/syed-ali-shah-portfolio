import React, { useState, useEffect } from 'react';
import { MessageSquare, Mail, Phone, X, ArrowUpRight, Download } from 'lucide-react';
import { soundFX } from '../utils/audio';

export const QuickContactFab: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      const shouldShow = window.scrollY > 400;
      setShowFab((prev) => (prev !== shouldShow ? shouldShow : prev));
    };

    checkScroll();

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        checkScroll();
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showFab) return null;

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
      {open && (
        <div className="p-4 rounded-2xl bg-white dark:bg-[#151517] text-[#0A0A0A] dark:text-white border border-black/15 dark:border-white/20 shadow-2xl space-y-2.5 animate-in slide-in-from-bottom-4 duration-200 w-64 backdrop-blur-xl">
          <div className="text-[11px] font-mono text-neutral-700 dark:text-neutral-300 uppercase tracking-wider font-semibold">
            Fast Inquiries
          </div>

          <a
            href="mailto:shahsyedali148@gmail.com"
            onClick={() => soundFX.playClick()}
            className="flex items-center justify-between p-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-bold text-[#0A0A0A] dark:text-white transition-colors"
          >
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" /> Direct Email
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://wa.me/923131803440"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="flex items-center justify-between p-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-bold text-[#0A0A0A] dark:text-white transition-colors border border-black/10 dark:border-white/10"
          >
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" /> WhatsApp Chat
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="/assets/CMS Developer Syed Ali Shah CV.pdf"
            download="CMS Developer Syed Ali Shah CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="flex items-center justify-between p-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-bold text-[#0A0A0A] dark:text-white transition-colors border border-black/10 dark:border-white/10"
          >
            <span className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" /> Download CV
            </span>
            <Download className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => {
              soundFX.playClick();
              setOpen(false);
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full text-center py-1.5 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-[#E0FF00] transition-colors cursor-pointer font-semibold"
          >
            Open Full Contact Form →
          </button>
        </div>
      )}

      <button
        id="quick-contact-fab"
        onClick={() => {
          soundFX.playPop();
          setOpen(!open);
        }}
        aria-label="Quick contact menu"
        className="w-12 h-12 rounded-full bg-[#0A0A0A] text-white dark:bg-[#E0FF00] dark:text-black flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer font-bold border border-black/10 dark:border-white/20"
      >
        {open ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </button>
    </div>
  );
};
