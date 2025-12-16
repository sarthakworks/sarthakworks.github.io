import { useTranslation } from "react-i18next";
import "./LangSwitcher.css";
function LangSwitcher({ isVisible }) {
  const { i18n } = useTranslation();
  const resources = i18n.options.resources || {};

  const nativeName = {
    en: "English",
    hi: "हिंदी",
    de: "Deutsch",
    fr: "Français",
    it: "Italiano",
    ar: "عربي",
  };

  return (
    <div className={`setting-sub-btn-group ${isVisible ? "visible" : ""}`}>
      {Object.keys(resources).map((lang) => (
        <button
          key={lang}
          className={`setting-sub-btn text-dark lang-btn ${
            i18n.language === lang ? "active" : ""
          }`}
          onClick={() => i18n.changeLanguage(lang)}
          title={`Switch to ${nativeName[lang] || lang.toUpperCase()}`}
        >
          {nativeName[lang] || lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LangSwitcher;
