import { FileDown } from 'lucide-react';
import { useLang } from '../../context/LangContext';
import publicAsset from '../../utils/publicAsset';

const cvOptions = [
  {
    titleKey: 'contact.softwareDeveloper',
    files: [
      { lang: 'es', filename: 'CV-SD.pdf', labelKey: 'contact.spanish' },
      { lang: 'en', filename: 'CV-EN-SD.pdf', labelKey: 'contact.english' },
    ],
  },
  {
    titleKey: 'contact.devopsJunior',
    files: [
      { lang: 'es', filename: 'CV-DO.pdf', labelKey: 'contact.spanish' },
      { lang: 'en', filename: 'CV-EN-DO.pdf', labelKey: 'contact.english' },
    ],
  },
];

export default function CvPicker({ className }) {
  const { t } = useLang();

  return (
    <details className="group relative inline-block text-left">
      <summary
        className={`${className} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
      >
        <FileDown size={16} />
        {t('hero.cv')}
      </summary>
      <div className="absolute top-full right-0 z-30 mt-3 w-72 rounded-2xl border border-surface-200 bg-white p-4 shadow-xl dark:border-surface-700 dark:bg-surface-800 sm:w-80">
        <p className="mb-3 text-xs leading-relaxed text-surface-500 dark:text-surface-400">
          {t('contact.cvOptions')}
        </p>
        <div className="space-y-4">
          {cvOptions.map((option) => (
            <section key={option.titleKey}>
              <h3 className="mb-2 text-sm font-semibold text-surface-800 dark:text-surface-100">
                {t(option.titleKey)}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {option.files.map((file) => (
                  <a
                    key={file.filename}
                    href={publicAsset(`cv/${file.filename}`)}
                    download={file.filename}
                    lang={file.lang}
                    className="rounded-xl border border-surface-200 px-3 py-2 text-center text-xs font-medium text-surface-600 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-surface-700 dark:text-surface-300 dark:hover:border-primary-700 dark:hover:bg-surface-700 dark:hover:text-primary-300"
                  >
                    {t(file.labelKey)}
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </details>
  );
}