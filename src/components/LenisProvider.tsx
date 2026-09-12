import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only init if in browser
    if (typeof window === 'undefined') return;

    try {
      const lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.2,
        infinite: false,
        syncTouch: false,
        prevent: (node) => {
          // Allow scrolling inside modal overlays or dropdowns
          return (
            node.classList?.contains('lenis-prevent') ||
            node.closest?.('.lenis-prevent') !== null
          );
        },
      });

      lenisRef.current = lenis;

      let animationFrameId: number;

      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);

      const handleResize = () => {
        lenis.resize();
      };
      window.addEventListener('resize', handleResize);

      // Force Lenis to recalculate height on load and images load
      const resizeTimeoutId = window.setTimeout(() => {
        lenis.resize();
      }, 500);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeoutId);
        lenis.destroy();
      };
    } catch (e) {
      console.warn('Lenis smooth scroll initialization skipped:', e);
    }
  }, []);

  return <>{children}</>;
};

