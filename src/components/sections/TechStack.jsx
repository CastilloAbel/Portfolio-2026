import { useLang } from '../../context/LangContext';
import { techStack } from '../../data/portfolio';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function TechStack() {
  const { t } = useLang();

  const categories = [
    { key: 'infrastructure', label: 'Infrastructure & DevOps' },
    { key: 'development', label: 'Development & Scripting' },
  ];

  return (
    <Container id="stack" className="bg-surface-100/50 dark:bg-surface-800/20">
      <SectionHeading title={t('stack.title')} subtitle={t('stack.subtitle')} />

      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.key}>
            {/* Category Title */}
            <Reveal>
              <h3 className="mb-6 text-center text-lg font-semibold text-primary-600 dark:text-primary-400">
                {category.label}
              </h3>
            </Reveal>

            {/* Tech Items Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {techStack[category.key].map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <Reveal key={tech.name} delay={i * 0.05} variant="scaleIn">
                    <div className="group flex flex-col items-center gap-3 rounded-2xl border border-surface-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 dark:border-surface-700/80 dark:bg-surface-800/50 dark:hover:border-primary-700">
                      <div className="rounded-xl bg-surface-100 p-3 transition-colors group-hover:bg-primary-50 dark:bg-surface-700/50 dark:group-hover:bg-primary-950/50">
                        <Icon
                          size={28}
                          className="text-surface-500 transition-colors group-hover:text-primary-500 dark:text-surface-400"
                        />
                      </div>
                      <span className="text-center text-sm font-medium text-surface-600 dark:text-surface-300">
                        {tech.name}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
