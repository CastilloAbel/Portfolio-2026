import { Server, Zap, Shield } from 'lucide-react';
import { useLang } from '../../context/LangContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const highlights = [
  { icon: Server, color: 'text-primary-500' },
  { icon: Zap, color: 'text-amber-500' },
  { icon: Shield, color: 'text-emerald-500' },
];

export default function About() {
  const { t } = useLang();

  const paragraphs = [t('about.p1'), t('about.p2'), t('about.p3')];

  return (
    <Container id="about">
      <SectionHeading title={t('about.title')} />

      <div className="grid gap-8 lg:grid-cols-3">
        {paragraphs.map((text, i) => {
          const Icon = highlights[i].icon;
          return (
            <Reveal key={i} delay={i * 0.15}>
              <div className="group rounded-2xl border border-surface-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 dark:border-surface-700/80 dark:bg-surface-800/50 dark:hover:border-primary-700">
                <div
                  className={`mb-4 inline-flex rounded-xl bg-surface-100 p-3 ${highlights[i].color} dark:bg-surface-700/50`}
                >
                  <Icon size={24} />
                </div>
                <p className="leading-relaxed text-surface-600 dark:text-surface-300">
                  {text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
