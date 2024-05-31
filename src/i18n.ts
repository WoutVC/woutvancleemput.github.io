import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import nlTranslations from "./locales/nl.json";

i18n.use(initReactI18next).init({
  resources: {
    en: enTranslations,
    nl: nlTranslations,
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
