import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from '../locales/en.json';
import ptTranslations from '../locales/pt.json';

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador automaticamente
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslations,
      pt: ptTranslations,
    },
    fallbackLng: 'pt', // Idioma padrão se a detecção falhar
    interpolation: { escapeValue: false }
  });

export default i18n;