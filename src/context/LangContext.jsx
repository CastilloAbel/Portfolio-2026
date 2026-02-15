import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '../i18n';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = translations[lang];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
