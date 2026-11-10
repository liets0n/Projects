import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import common_enUS from './translations/en-us.json'
import common_ptPT from './translations/pt-pt.json'
import common_ru from './translations/ru.json'
import common_es from './translations/es.json'

void i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: common_enUS,
    pt: common_ptPT,
    ru: common_ru,
    es: common_es
  }
})

export default i18n
