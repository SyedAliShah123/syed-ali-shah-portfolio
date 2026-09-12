import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const variantRef = useRef<'default' | 'hover' | 'text'>('default');
  const isVisibleRef = useRef(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 400, mass: 0.2 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  useEffect(() => {
    // Only enable on fine pointer devices (not touch screens)
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isText = Boolean(target.closest('input') || target.closest('textarea'));
      let nextVariant: 'default' | 'hover' | 'text' = 'default';

      if (isText) {
        nextVariant = 'text';
      } else if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-target') ||
        target.getAttribute('role') === 'button'
      ) {
        nextVariant = 'hover';
      }

      if (variantRef.current !== nextVariant) {
        variantRef.current = nextVariant;
        setCursorVariant(nextVariant);
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [rawX, rawY]);

  if (!isVisible) return null;

  const sizeVariants = {
    default: {
      width: 12,
      height: 12,
      borderRadius: '9999px',
      backgroundColor: 'rgba(18, 18, 18, 0.8)',
      border: '0px solid transparent',
      translateX: '-50%',
      translateY: '-50%',
    },
    hover: {
      width: 48,
      height: 48,
      borderRadius: '9999px',
      backgroundColor: 'rgba(18, 18, 18, 0.15)',
      border: '1.5px solid rgba(18, 18, 18, 0.6)',
      translateX: '-50%',
      translateY: '-50%',
    },
    text: {
      width: 4,
      height: 24,
      borderRadius: '2px',
      backgroundColor: 'rgba(18, 18, 18, 0.8)',
      border: '0px solid transparent',
      translateX: '-50%',
      translateY: '-50%',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-colors duration-150 hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={cursorVariant}
      variants={sizeVariants}
      transition={{
        duration: 0.15,
        ease: 'easeOut',
      }}
    />
  );
};
