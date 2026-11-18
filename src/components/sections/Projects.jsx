import { Github } from 'lucide-react';
import { useLang } from '../../context/LangContext';
import { projects } from '../../data/portfolio';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import EvidenceGallery from '../ui/EvidenceGallery';

export default function Projects() {
  const { lang, t } = useLang();
  const projectList = projects[lang];

  return (
    <Container id="projects">
      <SectionHeading
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projectList.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <div className="group h-full rounded-2xl border border-surface-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/10 dark:border-surface-700/80 dark:bg-surface-800/50 dark:hover:border-primary-700">
              {/* Title */}
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-surface-900 dark:text-white">
                  {project.title}
                </h3>
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t('projects.repository')}: ${project.title}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-surface-200 px-3 py-2 text-xs font-medium text-surface-600 transition-colors hover:border-primary-300 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-surface-700 dark:text-surface-300 dark:hover:border-primary-700 dark:hover:text-primary-400"
                  >
                    <Github size={15} />
                    {t('projects.repository')}
                  </a>
                )}
              </div>

              {/* Info Blocks */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-500/80">
                    {t('projects.problem')}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-500">
                    {t('projects.solution')}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                    {t('projects.result')}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-950/50 dark:text-primary-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <EvidenceGallery images={project.images} />
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
