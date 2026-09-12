import React from 'react';

const MARQUEE_ITEMS = [
  'WordPress ACF Pro',
  'Shopify Liquid 2.0',
  'Wix Studio & Velo API',
  'Webflow Client-First',
  'Squarespace Custom Code',
  'Sub-Second LCP Performance',
  'Semantic & Clean Code',
  'Available for New Projects',
];

export const Marquee: React.FC = () => {
  return (
    <div className="relative py-3.5 bg-[#0A0A0A] text-white dark:bg-[#E0FF00] dark:text-black border-y border-black/20 dark:border-[#E0FF00] overflow-hidden select-none z-20 transition-colors duration-300">
      <div className="flex w-max animate-marquee space-x-10 items-center font-syne text-xs sm:text-sm font-extrabold tracking-tight uppercase">
        {/* Set 1 */}
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`marquee-1-${index}`} className="cursor-default whitespace-nowrap flex items-center gap-2">
            <span className="text-[#E0FF00] dark:text-black font-bold">✦</span> {item}
          </span>
        ))}
        {/* Set 2 */}
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`marquee-2-${index}`} className="cursor-default whitespace-nowrap flex items-center gap-2">
            <span className="text-[#E0FF00] dark:text-black font-bold">✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
};
