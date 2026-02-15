import { GraduationCap, BookOpen, Cpu, CheckCircle } from 'lucide-react';
import { useLang } from '../../context/LangContext';
import { education } from '../../data/portfolio';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const icons = [GraduationCap, Cpu];

export default function Education() {
  const { lang, t } = useLang();
  const items = education[lang];

  return (
    <Container id="education">
      <SectionHeading
        title={t('education.title')}
        subtitle={t('education.subtitle')}
      />

      <div className="mx-auto max-w-4xl space-y-8">
        {items.map((item, i) => {
          const Icon = icons[i] || BookOpen;
          const isCurrent = item.status === 'current';

          return (
            <Reveal key={i} delay={i * 0.15}>
              <div className="group relative overflow-hidden rounded-2xl border border-surface-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/10 dark:border-surface-700/80 dark:bg-surface-800/50 dark:hover:border-primary-700">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-300" />

                <div className="flex flex-col gap-6 sm:flex-row">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex rounded-2xl bg-primary-50 p-4 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                      <Icon size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-surface-900 dark:text-white">
                          {item.degree}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                          {item.institution}
                        </p>
                      </div>

                      {/* Status Badge */}
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="rounded-full bg-surface-100 px-3 py-1 text-xs font-semibold text-surface-600 dark:bg-surface-700/50 dark:text-surface-300">
                          {item.period}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                            isCurrent
                              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400'
                              : 'bg-primary-50 text-primary-700 dark:bg-primary-950/50 dark:text-primary-300'
                          }`}
                        >
                          {isCurrent ? (
                            <>
                              <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                              </span>
                              {item.year}
                            </>
                          ) : (
                            <>
                              <CheckCircle size={12} />
                              {item.year}
                            </>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-surface-500 dark:text-surface-400">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.highlights.map((h, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface-100 px-3 py-1.5 text-xs font-medium text-surface-600 dark:bg-surface-700/50 dark:text-surface-300"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary-500" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
