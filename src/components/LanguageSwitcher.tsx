import React from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", flag: "/us.svg", alt: "English" },
  { code: "tr", flag: "/tr.svg", alt: "Türkçe" },
];

interface LanguageSwitcherProps {
  showDropdown?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ showDropdown = false }) => {
  const { i18n } = useTranslation();
  const current = i18n.language.split("-")[0];

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
  };

  const selected = LANGS.find(l => l.code === current) || LANGS[0];

  return (
    <div className="relative">
      {/* Always visible part */}
      <div
        className="flex items-center gap-2 hover:text-primary transition-colors font-semibold cursor-pointer"
        aria-label="Current language"
      >
        <img src={selected.flag} alt={selected.alt} className="w-5 h-5 rounded-full object-cover" />
        <span>{selected.code.toUpperCase()}</span>
      </div>

      {/* Dropdown part */}
      {showDropdown && (
        <div className="absolute left-0 mt-2 w-40 bg-background border rounded-lg shadow-lg p-2 flex flex-col gap-1 z-50">
          {LANGS.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-md text-sm transition-colors ${
                lang.code === current
                  ? "bg-muted font-semibold"
                  : "hover:bg-muted"
              }`}
            >
              <img src={lang.flag} alt={lang.alt} className="w-5 h-5 rounded-full object-cover" />
              <span>{lang.alt}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// To add a new language:
// 1. Add a new JSON file in src/locales (e.g., fr.json)
// 2. Import and add it to resources in i18n.ts
// 3. Add its code and label to LANGS above
// 4. Add translations for "language.english" etc. in all JSON files
