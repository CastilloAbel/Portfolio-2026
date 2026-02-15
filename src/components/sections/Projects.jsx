import { useLang } from '../../context/LangContext';
import { projects } from '../../data/portfolio';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

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
          <Reveal key={i} delay={i * 0.1}>
            <div className="group h-full rounded-2xl border border-surface-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/10 dark:border-surface-700/80 dark:bg-surface-800/50 dark:hover:border-primary-700">
              {/* Title */}
              <h3 className="mb-4 text-lg font-bold text-surface-900 dark:text-white">
                {project.title}
              </h3>

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
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
