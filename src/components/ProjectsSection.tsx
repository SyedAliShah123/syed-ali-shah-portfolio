import React, { useState, useMemo, useCallback } from 'react';
import { ArrowUpRight, Filter, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { PlatformCategory, Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { soundFX } from '../utils/audio';

const CATEGORIES: { id: PlatformCategory; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'wordpress', label: 'WORDPRESS' },
  { id: 'shopify', label: 'SHOPIFY' },
  { id: 'wix-studio', label: 'WIX STUDIO' },
  { id: 'wix', label: 'WIX' },
  { id: 'webflow', label: 'WEBFLOW' },
  { id: 'squarespace', label: 'SQUARESPACE' },
];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PlatformCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = useCallback((cat: PlatformCategory) => {
    soundFX.playPop();
    setActiveCategory(cat);
  }, []);

  const handleOpenModal = useCallback((project: Project) => {
    soundFX.playClick();
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-6 sm:px-8 md:px-10 lg:px-12 border-b border-black/10 dark:border-white/10 bg-[#F6F6F4] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block: Quieter, solid heading without ghost-outline duplicate */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono tracking-[0.25em] text-neutral-700 dark:text-neutral-300 uppercase font-semibold mb-2">
                Sample Builds &amp; Practice Projects
              </div>
              <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#0A0A0A] dark:text-white leading-[0.95]">
                FEATURED BUILDS.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-md font-sans pb-1">
              Honest, verifiable concept builds and practice projects demonstrating custom code, schema structuring, and theme customization.
            </p>
          </div>

          {/* Filter Tabs centered with space from heading and aligned with cards */}
          <div className="flex justify-center items-center w-full overflow-x-auto pb-2 pt-6 sm:pt-8 scrollbar-none">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white dark:bg-white/5 border border-black/15 dark:border-white/10 shadow-xs shrink-0 max-w-full overflow-x-auto">
              <span className="pl-3 pr-1 text-xs text-neutral-600 dark:text-neutral-400 inline-flex items-center gap-1 font-mono">
                <Filter className="w-3 h-3 text-black dark:text-[#E0FF00]" />
              </span>
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold font-syne tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#0A0A0A] text-white dark:bg-[#E0FF00] dark:text-black shadow-xs'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid: 12 Projects with simplified card headers (only 1 badge per card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              onMouseEnter={() => soundFX.playPop()}
              className="bg-white dark:bg-white/3 border border-black/10 dark:border-white/10 group rounded-3xl hover:border-black dark:hover:border-[#E0FF00]/60 transition-all duration-300 overflow-hidden shadow-sm dark:shadow-xl cursor-pointer flex flex-col justify-between hover-lift"
            >
              {/* Card Media Preview: ONLY ONE BADGE (Platform Name) */}
              <div className="relative aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 overflow-hidden border-b border-black/10 dark:border-white/10">
                {/* Single simplified platform badge per card */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white text-[10px] font-mono border border-white/15 shadow-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E0FF00]" />
                  {project.platform}
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[#E0FF00] text-xs font-mono font-semibold flex items-center gap-1">
                    Explore Project <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10 font-bold">
                      {project.buildType}
                    </span>
                    <div className="w-7 h-7 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center text-black/70 dark:text-white/70 group-hover:bg-black group-hover:text-white dark:group-hover:bg-[#E0FF00] dark:group-hover:text-black dark:group-hover:border-[#E0FF00] transition-colors shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="font-syne text-lg sm:text-xl font-bold tracking-tight text-[#0A0A0A] dark:text-white group-hover:text-neutral-700 dark:group-hover:text-[#E0FF00] transition-colors">
                    {project.title}
                  </h3>

                  <div className="text-xs font-mono text-neutral-800 dark:text-neutral-200 font-semibold">
                    {project.focusArea}
                  </div>

                  <p className="text-xs text-neutral-700 dark:text-neutral-300 line-clamp-2 leading-relaxed font-normal pt-1">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
                    Concept project
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(project);
                    }}
                    className="font-mono text-xs font-bold text-black dark:text-[#E0FF00] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    View Specs →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-3xl border border-dashed border-black/20 dark:border-white/20 space-y-3">
            <Layers className="w-8 h-8 text-neutral-500 mx-auto" />
            <div className="font-syne text-lg font-bold">No sample builds found in this category</div>
            <button
              onClick={() => setActiveCategory('all')}
              className="text-xs font-mono font-bold text-black dark:text-[#E0FF00] underline"
            >
              Reset to All Projects
            </button>
          </div>
        )}
      </div>

      {/* Project Specs Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
};
