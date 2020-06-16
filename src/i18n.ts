import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LANGUAGE } from './constants/global';

const EN_COMMON = require(`./locales/en/common.json`);

i18n.use(initReactI18next).init({
  resources: {
    [LANGUAGE]: {
      translation: {
        ...EN_COMMON
      }
    }
  },
  keySeparator: false,
  lng: LANGUAGE,
  debug: process.env.NODE_ENV !== 'production'
});

export default i18n;
