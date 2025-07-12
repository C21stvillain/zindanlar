import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import React from "react";

type MenuKey = "fantasy" | "mechanics" | "community" | null;

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) {
  const { t } = useTranslation();

  /* Açık menü takibi */
  const [openMenu, setOpenMenu] = React.useState<MenuKey>(null);

  /* Kart içerikleri */
  const fantasyItems = ["Battlemaps", "Tokens", "Scenes", "Map Assets"];
  const mechanicsItems = [
    "SubClasses",
    "Races",
    "Items",
    "Creatures",
    "Other",
  ];

  return (
    <nav className="relative border-b border-border/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* ---------- ÜST BAR ---------- */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight fantasy-accent">
            {t("brand")}
          </span>

          {/* ---------- Masaüstü Navigasyon ---------- */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Fantasy */}
            <WideMenu
              label="Fantasy"
              items={fantasyItems}
              active={openMenu === "fantasy"}
              onOpen={() => setOpenMenu("fantasy")}
              onClose={() => setOpenMenu(null)}
            />

            {/* Mechanics */}
            <WideMenu
              label="Mechanics"
              items={mechanicsItems}
              active={openMenu === "mechanics"}
              onOpen={() => setOpenMenu("mechanics")}
              onClose={() => setOpenMenu(null)}
            />

            {/* Community (dar kutu) */}
            <NarrowMenu
              active={openMenu === "community"}
              onOpen={() => setOpenMenu("community")}
              onClose={() => setOpenMenu(null)}
            />

            <LanguageSwitcher />
            <Button variant="outline" size="sm">
              {t("nav.signin")}
            </Button>
          </div>

          {/* ---------- Mobil Menü Butonu ---------- */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ---------- Mobil Navigasyon ---------- */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <GridMenu title="Fantasy" items={fantasyItems} />
            <GridMenu title="Mechanics" items={mechanicsItems} />
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

/* ============ GENİŞ MENÜ ============ */
function WideMenu({
  label,
  items,
  active,
  onOpen,
  onClose,
}: {
  label: string;
  items: string[];
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button className="hover:text-primary font-semibold">{label}</button>

      {active && (
        <div className="absolute top-full left-0 right-0 bg-background/95 border-b border-border/30 shadow-xl z-40">
          <div className="max-w-5xl mx-auto flex justify-center gap-8 py-8">
            {items.map((text) => (
              <Card key={text} label={text} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============ DAR MENÜ (Community) ============ */
function NarrowMenu({
  active,
  onOpen,
  onClose,
}: {
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button className="hover:text-primary font-semibold">Community</button>

      {active && (
        <div className="absolute top-full left-0 mt-0 w-56 bg-background border rounded-lg shadow-lg p-4 flex flex-col gap-2 z-50">
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
  );
}

/* ============ KART ============ */
function Card({ label }: { label: string }) {
  return (
    <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md">
      <span className="font-bold text-lg">{label}</span>
      <span className="text-xs text-muted-foreground mt-2">
        (Image placeholder)
      </span>
    </div>
  );
}

/* ============ MOBİL GRID MENÜ ============ */
function GridMenu({ title, items }: { title: string; items: string[] }) {
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
