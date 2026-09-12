import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { soundFX } from '../utils/audio';
import logoBlack from '../assets/logo-black.svg';
import logoYellow from '../assets/logo-yellow.svg';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NAV_ITEMS = [
  { label: 'HOME', id: 'hero' },
  { label: 'ABOUT ME', id: 'about' },
  { label: 'PROJECTS', id: 'projects' },
  { label: 'SERVICES', id: 'services' },
];

const SECTIONS = ['hero', 'capabilities', 'about', 'projects', 'services', 'contact'];

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const isPastThreshold = window.scrollY > 20;
        setScrolled((prev) => (prev !== isPastThreshold ? isPastThreshold : prev));

        if (!isClickScrollingRef.current) {
          const scrollPosition = window.scrollY + 200;
          for (const sectionId of SECTIONS) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection((prev) => (prev !== sectionId ? sectionId : prev));
                break;
              }
            }
          }
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    soundFX.playClick();
    setMobileMenuOpen(false);
    setActiveSection(id);

    isClickScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 850);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDark = () => {
    soundFX.playPop();
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#F6F6F4]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-md'
            : 'py-5 bg-transparent border-b border-black/5 dark:border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => scrollTo('hero')}
            aria-label="Syed Ali Shah - Home"
            className="group flex items-center focus:outline-none cursor-pointer"
          >
            <img
              src={logoBlack}
              alt="Syed Ali Shah Logo"
              className="h-5 sm:h-6 md:h-7 w-auto object-contain block dark:hidden group-hover:opacity-80 transition-opacity"
            />
            <img
              src={logoYellow}
              alt="Syed Ali Shah Logo"
              className="h-5 sm:h-6 md:h-7 w-auto object-contain hidden dark:block group-hover:opacity-80 transition-opacity"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="relative hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md shadow-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  onMouseEnter={() => soundFX.playPop()}
                  className={`relative px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.15em] font-bold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white dark:text-black'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-[#0A0A0A] dark:bg-[#E0FF00] shadow-xs -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Theme Toggle & Single Clear CTA */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              id="toggle-dark-mode-btn"
              onClick={toggleDark}
              aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              className="group w-9 h-9 rounded-full border border-black/15 dark:border-white/10 bg-white/60 dark:bg-white/5 flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-black hover:text-white dark:hover:bg-white/10 dark:hover:text-[#E0FF00] active:scale-95 transition-all cursor-pointer"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-[#E0FF00]" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-800 group-hover:text-white transition-colors" />
              )}
            </button>

            {/* Clear Primary CTA Button */}
            <button
              id="nav-hire-btn"
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-[#E0FF00] dark:text-black dark:hover:bg-[#E0FF00]/90 text-xs font-bold font-syne tracking-wider transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Open mobile menu"
              className="md:hidden w-9 h-9 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-[#E0FF00] dark:hover:text-black transition-all cursor-pointer active:scale-90"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(false);
            }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md md:hidden flex justify-end"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[85%] max-w-sm h-full bg-[#F6F6F4] dark:bg-[#121214] p-6 pt-16 flex flex-col justify-between shadow-2xl border-l border-black/10 dark:border-white/10"
            >
              <button
                onClick={() => {
                  soundFX.playClick();
                  setMobileMenuOpen(false);
                }}
                aria-label="Close menu"
                className="absolute top-5 right-5 w-10 h-10 rounded-full border border-black/15 dark:border-white/20 bg-white/80 dark:bg-white/10 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-[#E0FF00] dark:hover:text-black transition-colors cursor-pointer active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <img
                    src={logoBlack}
                    alt="Syed Ali Shah"
                    className="h-5 w-auto object-contain block dark:hidden"
                  />
                  <img
                    src={logoYellow}
                    alt="Syed Ali Shah"
                    className="h-5 w-auto object-contain hidden dark:block"
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-600 dark:text-neutral-400 uppercase font-semibold">
                    Navigation
                  </div>
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.2 }}
                      onClick={() => scrollTo(item.id)}
                      className="block w-full text-left font-syne text-2xl font-extrabold uppercase text-neutral-900 dark:text-white hover:text-black/60 dark:hover:text-[#E0FF00] active:translate-x-2 transition-all cursor-pointer"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * NAV_ITEMS.length, duration: 0.2 }}
                    onClick={() => scrollTo('contact')}
                    className="block w-full text-left font-syne text-2xl font-extrabold uppercase text-neutral-900 dark:text-white hover:text-black/60 dark:hover:text-[#E0FF00] active:translate-x-2 transition-all cursor-pointer"
                  >
                    CONTACT
                  </motion.button>
                </div>
              </div>

              <div className="pt-6 border-t border-black/10 dark:border-white/10 space-y-2">
                <div className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                  Syed Ali Shah — CMS Developer
                </div>
                <a
                  href="mailto:shahsyedali148@gmail.com"
                  className="block text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-[#E0FF00] transition-colors font-medium"
                >
                  shahsyedali148@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
