import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Linkedin, Github } from 'lucide-react';
import { useLang } from '../../context/LangContext';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-500/5" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-primary-300/10 blur-3xl dark:bg-primary-600/5" />
        <motion.div
          className="absolute top-1/3 left-1/2 h-[400px] w-[400px] rounded-full bg-primary-500/5 blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-950/50 dark:text-primary-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            {t('hero.title')}
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-surface-400 dark:text-surface-500">
              {t('hero.greeting')}{' '}
            </span>
            <span className="gradient-text">{t('hero.name')}</span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-surface-500 dark:text-surface-400 sm:text-xl"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30"
            >
              {t('hero.cta')}
              <ArrowDown size={16} />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-surface-200 bg-white px-6 py-3 text-sm font-semibold text-surface-700 shadow-sm transition-all hover:border-primary-300 hover:text-primary-600 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-200 dark:hover:border-primary-600 dark:hover:text-primary-400"
            >
              <FileDown size={16} />
              {t('hero.cv')}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex items-center gap-4"
          >
            <a
              href="https://linkedin.com/in/castillo-abel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-2.5 text-surface-400 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-surface-800 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/CastilloAbel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-2.5 text-surface-400 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-surface-800 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-surface-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
