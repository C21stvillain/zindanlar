import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import React from "react";

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const timerRef = React.useRef<number | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 200); // Delay to allow moving to the dropdown
  };

  const dropdownClass =
    "fixed left-0 right-0 top-16 w-full bg-background/95 border-b border-border/30 shadow-xl z-40";

  return (
    <nav className="border-b border-border/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Marka */}
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center"
            >
              <img src="/logo.png" alt="Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold tracking-tight fantasy-accent">
                {t("brand")}
              </span>
            </a>
          </div>

          {/* ----------- Masaüstü Navigasyon ----------- */}
          <div className="hidden md:flex items-center space-x-8">
            {/* ----------- Fantasy ----------- */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("tools")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-primary transition-colors font-semibold">
                {t("nav.tools.title")}
              </button>
              {activeMenu === "tools" && (
                <div
                  className={dropdownClass}
                  onMouseEnter={() => handleMouseEnter("tools")}
                >
                  <div className="max-w-5xl mx-auto flex justify-center gap-8 py-8">
                    {[
                      { key: "resources", name: t("nav.tools.resources") },
                      { key: "mechanics", name: t("nav.tools.mechanics") },
                      { key: "adventures", name: t("nav.tools.adventures") },
                      { key: "tools", name: t("nav.tools.map_assets") },
                    ].map((item) => (
                     <a href={item.key === 'resources' ? '/resources' : '#'} key={item.key}>
                       <div
                         className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md transition-all border-2 border-transparent hover:border-yellow-400 hover:shadow-[0_0_16px_4px_rgba(255,215,0,0.5)]"
                       >
                         <span className="font-bold text-lg">{item.name}</span>
                         <span className="text-xs text-muted-foreground mt-2">
                           (Image placeholder)
                         </span>
                       </div>
                     </a>
                   ))}
                  </div>
                </div>
              )}
            </div>


            {/* ----------- Community ----------- */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("community")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-primary transition-colors font-semibold">
                Community
              </button>
              {activeMenu === "community" && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-background border rounded-lg shadow-lg p-4 flex flex-col gap-2 z-50"
                  onMouseEnter={() => handleMouseEnter("community")}
                >
                  {[
                    ["Patreon", "https://www.patreon.com/c/zindanlar"],
                    ["YouTube", "https://www.youtube.com/@charismacheck/featured"],
                    ["Discord", "discord.gg/duQEp7Mq9r"],
                    ["Instagram", "https://www.instagram.com/charismacheckdnd"],
                  ].map(([name, href]) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener"
                      className="hover:text-primary"
                    >
                      {name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* ----------- Pricing ----------- */}
            <div>
              <button
                className="hover:text-primary transition-colors font-semibold"
                onClick={() => (window.location.pathname = "/pricing")}
              >
                Pricing
              </button>
            </div>

            {/* ----------- Language Switcher ----------- */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("language")}
              onMouseLeave={handleMouseLeave}
            >
              <LanguageSwitcher showDropdown={activeMenu === "language"} />
            </div>
          </div>

          {/* ----------- Mobil Menü Butonu ----------- */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ----------- Mobil Navigasyon ----------- */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {/* Mobile Fantasy */}
            <DropdownGrid
              title={t("nav.tools.title")}
              items={[
                t("nav.tools.resources"),
                t("nav.tools.mechanics"),
                t("nav.tools.adventures"),
                t("nav.tools.map_assets"),
              ]}
            />


            {/* Mobile Community */}
            <div>
              <span className="font-semibold">Community</span>
              <div className="flex flex-col gap-2 mt-2">
                {["Patreon", "Discord", "YouTube", "Instagram", "Reddit"].map((name) => (
                  <a
                    key={name}
                    href={`https://${name.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener"
                    className="hover:text-primary"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex justify-center">
              <LanguageSwitcher showDropdown />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/** Küçük yardımcı bileşen (mobil grid) */
function DropdownGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <span className="font-semibold">{title}</span>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {items.map((label) => (
          <div
            key={label}
            className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20 transition-all border-2 border-transparent hover:border-yellow-400 hover:shadow-[0_0_8px_2px_rgba(255,215,0,0.5)]"
          >
            <span className="font-bold">{label}</span>
            <span className="text-xs text-muted-foreground">(Image placeholder)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
