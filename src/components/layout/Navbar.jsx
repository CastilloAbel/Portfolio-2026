import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLang } from '../../context/LangContext';

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'stack', href: '#stack' },
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { dark, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-surface-200/50 shadow-sm dark:border-surface-700/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-surface-900 dark:text-white"
        >
          <span className="gradient-text">&lt;</span>Abel
          <span className="gradient-text"> /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-surface-600 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-surface-300 dark:hover:bg-surface-800 dark:hover:text-primary-400"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-surface-600 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-surface-300 dark:hover:bg-surface-800 dark:hover:text-primary-400"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span className="uppercase">{lang}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-xl p-2 text-surface-600 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-surface-300 dark:hover:bg-surface-800 dark:hover:text-primary-400"
            aria-label="Toggle dark mode"
          >
            <motion.div
              key={dark ? 'moon' : 'sun'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2 text-surface-600 transition-colors hover:bg-primary-50 md:hidden dark:text-surface-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-surface-200/50 md:hidden glass dark:border-surface-700/50"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-surface-600 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-surface-300 dark:hover:bg-surface-800 dark:hover:text-primary-400"
                >
                  {t(`nav.${key}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
