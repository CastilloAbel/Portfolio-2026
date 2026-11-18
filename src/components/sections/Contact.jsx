import { Mail, Linkedin, Github } from 'lucide-react';
import { useLang } from '../../context/LangContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import CvPicker from '../ui/CvPicker';

export default function Contact() {
  const { t } = useLang();

  return (
    <Container id="contact">
      <SectionHeading title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <Reveal>
        <div className="mx-auto max-w-xl">
          <div className="rounded-2xl border border-surface-200/80 bg-white p-8 shadow-sm dark:border-surface-700/80 dark:bg-surface-800/50 sm:p-10">
            {/* Email */}
            <a
              href="mailto:castillokev.abel@gmail.com"
              className="group flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-primary-50 dark:hover:bg-surface-700/50"
            >
              <div className="rounded-xl bg-primary-50 p-3 text-primary-600 transition-colors group-hover:bg-primary-100 dark:bg-primary-950/50 dark:text-primary-400">
                <Mail size={22} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-surface-400">
                  {t('contact.email')}
                </span>
                <p className="font-medium text-surface-800 dark:text-surface-200">
                  castillokev.abel@gmail.com
                </p>
              </div>
            </a>

            {/* Divider */}
            <div className="my-4 border-t border-surface-100 dark:border-surface-700/50" />

            {/* Social */}
            <p className="mb-4 text-center text-sm text-surface-400">
              {t('contact.or')}
            </p>

            <div className="flex items-center justify-center gap-3">
              <a
                href="https://linkedin.com/in/castillo-abel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-surface-200 px-5 py-2.5 text-sm font-medium text-surface-600 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-surface-700 dark:text-surface-300 dark:hover:border-primary-700 dark:hover:text-primary-400"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/CastilloAbel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-surface-200 px-5 py-2.5 text-sm font-medium text-surface-600 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-surface-700 dark:text-surface-300 dark:hover:border-primary-700 dark:hover:text-primary-400"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>

            {/* Download CV */}
            <div className="mt-6 text-center">
              <CvPicker className="inline-flex items-center gap-2 rounded-2xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30" />
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
