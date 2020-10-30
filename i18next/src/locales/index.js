import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// eslint-disable-next-line import/no-webpack-loader-syntax
import resources from '@alienfast/i18next-loader?basenameAsNamespace=true!./index.js';

i18next.use(LanguageDetector).use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    },
    detection: {
        order: ['localStorage', 'cookie', 'navigator'],
        caches: ['localStorage', 'cookie'],
        lookupCookie: 'myCookieForI18n',
        lookupLocalStorage: 'myKeyForI18n',
    },
});

export default i18next;
