import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LANGUAGE } from './constants/global';

const FRENCH_COMMON = require(`./locales/fr/common.json`);
const FRENCH_QUALIFICATION = require(`./locales/fr/qualification.json`);

i18n.use(initReactI18next).init({
  resources: {
    [LANGUAGE]: {
      translation: {
        ...FRENCH_COMMON,
        ...FRENCH_QUALIFICATION
      }
    }
  },
  keySeparator: false,
  lng: LANGUAGE,
  debug: process.env.NODE_ENV !== 'production'
});

export default i18n;
