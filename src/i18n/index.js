import es from './es';
import en from './en';

export const translations = { es, en };

export const getTranslation = (lang, key) => {
  const keys = key.split('.');
  let value = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
};
