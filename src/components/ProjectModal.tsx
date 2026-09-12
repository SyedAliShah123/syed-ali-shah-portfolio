import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Check, Tag, Layers, Laptop } from 'lucide-react';
import { Project } from '../types';
import { soundFX } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundFX.playClick();
        onCloseRef.current();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      data-lenis-prevent
      onClick={() => {
        soundFX.playClick();
        onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer lenis-prevent overflow-y-auto"
    >
      <div
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto overscroll-contain bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white rounded-3xl border border-black/15 dark:border-white/20 shadow-2xl p-6 sm:p-8 space-y-6 cursor-default lenis-prevent"
        style={{ scrollbarWidth: 'thin' }}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          aria-label="Close modal"
          className="sticky top-0 float-right z-20 w-10 h-10 -mr-2 -mt-2 rounded-full border border-black/15 dark:border-white/20 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md flex items-center justify-center text-neutral-800 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black transition-colors cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-black text-white dark:bg-[#E0FF00] dark:text-black">
              {project.platform}
            </span>
            <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10">
              {project.buildType}
            </span>
          </div>
          <h3 className="font-syne text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0A0A0A] dark:text-white">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-neutral-700 dark:text-neutral-300 font-semibold mt-1">
            Focus: {project.focusArea}
          </p>
        </div>

        {/* Hero Image Mockup */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/15 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-sm text-white dark:text-[#E0FF00] text-xs font-mono border border-white/15">
            {project.platform} CMS Build
          </div>
        </div>

        {/* Metadata Strip: Honest, No Fabricated Client Info */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-400 font-mono font-semibold">
              <Laptop className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" /> Project Status
            </div>
            <div className="font-semibold text-[#0A0A0A] dark:text-white">
              {project.buildType}
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-400 font-mono font-semibold">
              <Layers className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" /> Ecosystem
            </div>
            <div className="font-semibold text-[#0A0A0A] dark:text-white">
              {project.platform}
            </div>
          </div>
          <div className="space-y-1 col-span-2 sm:col-span-1">
            <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-400 font-mono font-semibold">
              <Tag className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" /> Primary Focus
            </div>
            <div className="font-semibold text-[#0A0A0A] dark:text-white truncate">
              {project.focusArea}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="font-syne text-base font-bold uppercase tracking-wider text-[#0A0A0A] dark:text-white">
            Overview &amp; Objective
          </h4>
          <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Key Deliverables */}
        <div className="space-y-3">
          <h4 className="font-syne text-base font-bold uppercase tracking-wider text-[#0A0A0A] dark:text-white">
            Technical Implementation &amp; Custom Code
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.deliverables.map((del, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-neutral-100/70 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-start gap-2.5 text-xs text-neutral-800 dark:text-neutral-200"
              >
                <Check className="w-4 h-4 text-black dark:text-[#E0FF00] shrink-0 mt-0.5" />
                <span>{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10 font-semibold"
            >
              <Tag className="w-3 h-3 text-black dark:text-[#E0FF00]" />
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/10 dark:border-white/10">
          <div className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
            Syed Ali Shah • Personal CMS Portfolio
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-[#E0FF00] dark:text-black dark:hover:bg-[#E0FF00]/90 text-xs font-bold font-syne tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
            >
              Request Similar Build
            </button>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full border border-black/15 dark:border-white/20 text-neutral-800 dark:text-neutral-200 text-xs font-bold tracking-wider hover:bg-black/5 dark:hover:bg-white/10 transition-colors inline-flex items-center gap-1.5"
              >
                Platform Reference
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
