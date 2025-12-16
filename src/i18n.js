import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationHI from "./locales/hi/translation.json";
import translationDE from "./locales/de/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationIT from "./locales/it/translation.json";
import translationAR from "./locales/ar/translation.json";

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    hi: {
        translation: translationHI,
    },
    de: {
        translation: translationDE,
    },
    fr: {
        translation: translationFR,
    },
    it: {
        translation: translationIT,
    },
    ar: {
        translation: translationAR,
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18next-http-backend plugin to load translations via http
        // if you want your translations to load from a constant file instead of loading them using http-backend, 
        // you can pass the resources directly to the init function
        fallbackLng: "en",

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
