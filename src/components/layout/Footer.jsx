import { Github, Linkedin } from 'lucide-react';
import { useLang } from '../../context/LangContext';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-200/80 bg-white px-4 py-8 dark:border-surface-700/50 dark:bg-surface-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm text-surface-500 dark:text-surface-400">
            © {year} Abel. {t('footer.rights')}
          </p>
          <p className="mt-1 text-xs text-surface-400 dark:text-surface-500">
            {t('footer.built')}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/castillo-abel"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-surface-400 transition-colors hover:text-primary-500"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/CastilloAbel"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-surface-400 transition-colors hover:text-primary-500"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
