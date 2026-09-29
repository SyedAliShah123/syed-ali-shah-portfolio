import React from 'react';

interface SectionSkeletonProps {
  height?: string;
  title?: string;
}

export const SectionSkeleton: React.FC<SectionSkeletonProps> = ({
  height = 'min-h-[400px]',
  title = 'Loading content...',
}) => {
  return (
    <div
      className={`w-full ${height} py-16 px-6 sm:px-12 flex flex-col justify-center bg-[#F6F6F4] dark:bg-[#0A0A0A] border-b border-black/10 dark:border-white/10 animate-pulse`}
      aria-busy="true"
      aria-label={title}
    >
      <div className="max-w-7xl w-full mx-auto space-y-6">
        <div className="h-3 w-32 bg-black/10 dark:bg-white/10 rounded-full" />
        <div className="h-9 w-64 bg-black/15 dark:bg-white/15 rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="h-44 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5" />
          <div className="h-44 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5" />
          <div className="h-44 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5" />
        </div>
      </div>
    </div>
  );
};
