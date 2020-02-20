import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../../locales/en.json';
import pl from '../../locales/pl.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, 
    resources: {
      en: {
        translation: en,
      },
      pl: {
        translation: pl,
      }
    },
    detection: {
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React escapes by default
    }
  })

export default i18n;
