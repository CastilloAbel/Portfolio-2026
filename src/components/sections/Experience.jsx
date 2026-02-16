import { Briefcase } from 'lucide-react';
import { useLang } from '../../context/LangContext';
import { experience } from '../../data/portfolio';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function Experience() {
  const { lang, t } = useLang();
  const jobs = experience[lang];

  return (
    <Container
      id="experience"
      className="bg-surface-100/50 dark:bg-surface-800/20"
    >
      <SectionHeading
        title={t('experience.title')}
        subtitle={t('experience.subtitle')}
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-300 to-transparent md:left-1/2 md:-translate-x-px" />

        {jobs.map((job, i) => (
          <Reveal key={i} delay={i * 0.2} variant={i % 2 === 0 ? 'slideLeft' : 'slideRight'}>
            <div
              className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0
                  ? 'md:pr-12 md:text-right'
                  : 'md:ml-auto md:pl-12'
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-primary-500 bg-white dark:bg-surface-900 md:top-1 ${
                  i % 2 === 0
                    ? 'md:left-auto md:-right-1.5'
                    : 'md:-left-1.5'
                }`}
              />

              {/* Card */}
              <div className="rounded-2xl border border-surface-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 dark:border-surface-700/80 dark:bg-surface-800/50 dark:hover:border-primary-700">
                {/* Period Badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-950/50 dark:text-primary-300">
                  <Briefcase size={12} />
                  {job.period}
                </span>

                <h3 className="mt-3 text-lg font-bold text-surface-900 dark:text-white">
                  {job.role}
                </h3>
                <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {job.company}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
                  {job.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5">
                  {job.highlights.map((h, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-2 text-sm text-surface-600 dark:text-surface-300 ${
                        i % 2 === 0 ? 'flex-row-reverse md:justify-end' : ''
                      }`}
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary-500" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
