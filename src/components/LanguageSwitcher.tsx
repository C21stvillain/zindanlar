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
    <div className="relative flex items-center justify-center">
      {!showDropdown && (
        <div
          className="flex items-center gap-1 rounded px-2 py-1 hover:bg-background text-foreground border border-border focus:outline-none focus:ring min-w-[48px] justify-center"
          aria-label="Current language"
        >
          <img src={selected.flag} alt={selected.alt} className="w-6 h-6 object-contain" />
        </div>
      )}
      {showDropdown && (
        <ul
          className={`${showDropdown ? "" : "absolute right-0 mt-1"} w-16 bg-background border border-border rounded shadow z-50 flex flex-col items-center`}
          role="listbox"
        >
          {LANGS.map(lang => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === current}
              className={`flex items-center justify-center w-full px-2 py-1 cursor-pointer hover:bg-muted ${lang.code === current ? "bg-muted" : ""}`}
              onClick={() => handleSelect(lang.code)}
              tabIndex={0}
            >
              <img src={lang.flag} alt={lang.alt} className="w-6 h-6 object-contain" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// To add a new language:
// 1. Add a new JSON file in src/locales (e.g., fr.json)
// 2. Import and add it to resources in i18n.ts
// 3. Add its code and label to LANGS above
// 4. Add translations for "language.english" etc. in all JSON files
