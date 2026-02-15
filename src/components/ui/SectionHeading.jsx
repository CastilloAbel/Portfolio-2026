import Reveal from './Reveal';

export default function SectionHeading({ title, subtitle }) {
  return (
    <Reveal>
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          <span className="gradient-text">{title}</span>
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-surface-500 dark:text-surface-400 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
