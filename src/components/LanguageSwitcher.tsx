


import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", flag: "/us.svg", alt: "English" },
  { code: "tr", flag: "/tr.svg", alt: "Türkçe" },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const current = i18n.language.split("-")[0];
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        btnRef.current && !btnRef.current.contains(e.target as Node) &&
        listRef.current && !listRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setOpen(false);
  };

  const selected = LANGS.find(l => l.code === current) || LANGS[0];

  return (
    <div className="relative">
      <button
        ref={btnRef}
        className="flex items-center gap-1 rounded px-2 py-1 bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring min-w-[48px]"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen(v => !v)}
        tabIndex={0}
      >
        <img src={selected.flag} alt={selected.alt} className="w-6 h-6 object-contain" />
      </button>
      {open && (
        <ul
          ref={listRef}
          className="absolute right-0 mt-1 w-16 bg-zinc-900 border border-zinc-700 rounded shadow z-50"
          role="listbox"
        >
          {LANGS.map(lang => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === current}
              className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-zinc-800 ${lang.code === current ? "bg-zinc-800" : ""}`}
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
