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

  // Dropdown state
  const [fantasyOpen, setFantasyOpen] = React.useState(false);
  const [mechanicsOpen, setMechanicsOpen] = React.useState(false);
  const [communityOpen, setCommunityOpen] = React.useState(false);

  // Diğerlerini kapat
  const closeDropdowns = () => {
    setFantasyOpen(false);
    setMechanicsOpen(false);
    setCommunityOpen(false);
  };

  // Ortak stil
  const dropdownClass =
    "fixed left-0 right-0 top-16 w-full bg-background/95 border-b border-border/30 shadow-xl z-40";

  return (
    <nav className="border-b border-border/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ---------- Marka ---------- */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold tracking-tight fantasy-accent">
              {t("brand")}
            </span>
          </div>

          {/* ---------- Masaüstü Nav ---------- */}
          <div className="hidden md:flex items-center space-x-8">
            {/* ---------- Fantasy ---------- */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeDropdowns();
                setFantasyOpen(true);
              }}
            >
              <button className="hover:text-primary transition-colors font-semibold">
                Fantasy
              </button>
            </div>

            {fantasyOpen && (
              <div
                className={dropdownClass}
                onMouseEnter={() => setFantasyOpen(true)}
                onMouseLeave={() => setFantasyOpen(false)}
              >
                <div className="max-w-5xl mx-auto flex justify-center gap-8 py-8">
                  {["Battlemaps", "Tokens", "Scenes", "Map Assets"].map(
                    (label) => (
                      <div
                        key={label}
                        className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md"
                      >
                        <span className="font-bold text-lg">{label}</span>
                        <span className="text-xs text-muted-foreground mt-2">
                          (Image placeholder)
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* ---------- Mechanics ---------- */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeDropdowns();
                setMechanicsOpen(true);
              }}
            >
              <button className="hover:text-primary transition-colors font-semibold">
                Mechanics
              </button>
            </div>

            {mechanicsOpen && (
              <div
                className={dropdownClass}
                onMouseEnter={() => setMechanicsOpen(true)}
                onMouseLeave={() => setMechanicsOpen(false)}
              >
                <div className="max-w-5xl mx-auto flex justify-center gap-8 py-8">
                  {[
                    "SubClasses",
                    "Races",
                    "Items",
                    "Creatures",
                    "Other",
                  ].map((label) => (
                    <div
                      key={label}
                      className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md"
                    >
                      <span className="font-bold text-lg">{label}</span>
                      <span className="text-xs text-muted-foreground mt-2">
                        (Image placeholder)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---------- Community ---------- */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeDropdowns();
                setCommunityOpen(true);
              }}
              onMouseLeave={() => setCommunityOpen(false)}
            >
              <button className="hover:text-primary transition-colors font-semibold">
                Community
              </button>

              {communityOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-background border rounded-lg shadow-lg p-4 flex flex-col gap-2 z-50">
                  {[
                    ["Patreon", "https://patreon.com"],
                    ["Discord", "https://discord.com"],
                    ["YouTube", "https://youtube.com"],
                    ["Instagram", "https://instagram.com"],
                    ["Reddit", "https://reddit.com"],
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

            <LanguageSwitcher />
            <Button variant="outline" size="sm">
              {t("nav.signin")}
            </Button>
          </div>

          {/* ---------- Mobil Menü Butonu ---------- */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ---------- Mobil Navigasyon ---------- */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <DropdownGrid
              title="Fantasy"
              items={["Battlemaps", "Tokens", "Scenes", "Map Assets"]}
            />

            <DropdownGrid
              title="Mechanics"
              items={[
                "SubClasses",
                "Races",
                "Items",
                "Creatures",
                "Other",
              ]}
            />

            <div>
              <span className="font-semibold">Community</span>
              <div className="flex flex-col gap-2 mt-2">
                {["Patreon", "Discord", "YouTube", "Instagram", "Reddit"].map(
                  (name) => (
                    <a
                      key={name}
                      href={`https://${name.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener"
                      className="hover:text-primary"
                    >
                      {name}
                    </a>
                  )
                )}
              </div>
            </div>

            <Button variant="outline" size="sm" className="w-full">
              {t("nav.signin")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ---- Yardımcı: Mobil Grid ---- */
function DropdownGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <span className="font-semibold">{title}</span>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {items.map((label) => (
          <div
            key={label}
            className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20"
          >
            <span className="font-bold">{label}</span>
            <span className="text-xs text-muted-foreground">
              (Image placeholder)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
