import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import React from "react";

export default function Header({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  const { t } = useTranslation();
  // Dropdown state for desktop
  const [fantasyOpen, setFantasyOpen] = React.useState(false);
  const [mechanicsOpen, setMechanicsOpen] = React.useState(false);
  const [communityOpen, setCommunityOpen] = React.useState(false);

  // Helper for closing dropdowns
  const closeDropdowns = () => {
    setFantasyOpen(false);
    setMechanicsOpen(false);
    setCommunityOpen(false);
  };

  return (
    <nav className="border-b border-border/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold tracking-tight fantasy-accent">{t("brand")}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Fantasy Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { closeDropdowns(); setFantasyOpen(true); }}
              onMouseLeave={() => setFantasyOpen(false)}
            >
              <button className="hover:text-primary transition-colors font-semibold">Fantasy</button>
              {fantasyOpen && (
                <div className="fixed left-0 right-0 top-full w-full bg-background/95 border-b border-border/30 shadow-xl z-40"
                  onMouseEnter={() => setFantasyOpen(true)}
                  onMouseLeave={() => setFantasyOpen(false)}
                >
                  <div className="max-w-5xl mx-auto flex justify-center gap-8 py-8">
                    {/* Placeholder cards for Fantasy */}
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md">
                      <span className="font-bold text-lg">Battlemaps</span>
                      <span className="text-xs text-muted-foreground mt-2">(Image placeholder)</span>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md">
                      <span className="font-bold text-lg">Tokens</span>
                      <span className="text-xs text-muted-foreground mt-2">(Image placeholder)</span>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md">
                      <span className="font-bold text-lg">Scenes</span>
                      <span className="text-xs text-muted-foreground mt-2">(Image placeholder)</span>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md">
                      <span className="font-bold text-lg">Map Assets</span>
                      <span className="text-xs text-muted-foreground mt-2">(Image placeholder)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mechanics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { closeDropdowns(); setMechanicsOpen(true); }}
              onMouseLeave={() => setMechanicsOpen(false)}
            >
              <button className="hover:text-primary transition-colors font-semibold">Mechanics</button>
              {mechanicsOpen && (
                <div className="fixed left-0 right-0 top-full w-full bg-background/95 border-b border-border/30 shadow-xl z-40"
                  onMouseEnter={() => setMechanicsOpen(true)}
                  onMouseLeave={() => setMechanicsOpen(false)}
                >
                  <div className="max-w-5xl mx-auto flex justify-center gap-8 py-8">
                    {/* Placeholder cards for Mechanics */}
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md">
                      <span className="font-bold text-lg">SubClasses</span>
                      <span className="text-xs text-muted-foreground mt-2">(Image placeholder)</span>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md">
                      <span className="font-bold text-lg">Races</span>
                      <span className="text-xs text-muted-foreground mt-2">(Image placeholder)</span>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md">
                      <span className="font-bold text-lg">Items</span>
                      <span className="text-xs text-muted-foreground mt-2">(Image placeholder)</span>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md">
                      <span className="font-bold text-lg">Creatures</span>
                      <span className="text-xs text-muted-foreground mt-2">(Image placeholder)</span>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center h-48 w-56 shadow-md">
                      <span className="font-bold text-lg">Other</span>
                      <span className="text-xs text-muted-foreground mt-2">(Image placeholder)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Community Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { closeDropdowns(); setCommunityOpen(true); }}
              onMouseLeave={() => setCommunityOpen(false)}
            >
              <button className="hover:text-primary transition-colors font-semibold">Community</button>
              {communityOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-background border rounded-lg shadow-lg p-4 flex flex-col gap-2 z-50">
                  <a href="https://patreon.com" target="_blank" rel="noopener" className="hover:text-primary">Patreon</a>
                  <a href="https://discord.com" target="_blank" rel="noopener" className="hover:text-primary">Discord</a>
                  <a href="https://youtube.com" target="_blank" rel="noopener" className="hover:text-primary">YouTube</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-primary">Instagram</a>
                  <a href="https://reddit.com" target="_blank" rel="noopener" className="hover:text-primary">Reddit</a>
                </div>
              )}
            </div>

            <LanguageSwitcher />
            <Button variant="outline" size="sm">{t("nav.signin")}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {/* Fantasy Dropdown for mobile */}
            <div>
              <span className="font-semibold">Fantasy</span>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20">
                  <span className="font-bold">Battlemaps</span>
                  <span className="text-xs text-muted-foreground">(Image placeholder)</span>
                </div>
                <div className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20">
                  <span className="font-bold">Tokens</span>
                  <span className="text-xs text-muted-foreground">(Image placeholder)</span>
                </div>
                <div className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20">
                  <span className="font-bold">Scenes</span>
                  <span className="text-xs text-muted-foreground">(Image placeholder)</span>
                </div>
                <div className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20">
                  <span className="font-bold">Map Assets</span>
                  <span className="text-xs text-muted-foreground">(Image placeholder)</span>
                </div>
              </div>
            </div>
            {/* Mechanics Dropdown for mobile */}
            <div>
              <span className="font-semibold">Mechanics</span>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20">
                  <span className="font-bold">SubClasses</span>
                  <span className="text-xs text-muted-foreground">(Image placeholder)</span>
                </div>
                <div className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20">
                  <span className="font-bold">Races</span>
                  <span className="text-xs text-muted-foreground">(Image placeholder)</span>
                </div>
                <div className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20">
                  <span className="font-bold">Items</span>
                  <span className="text-xs text-muted-foreground">(Image placeholder)</span>
                </div>
                <div className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20">
                  <span className="font-bold">Creatures</span>
                  <span className="text-xs text-muted-foreground">(Image placeholder)</span>
                </div>
                <div className="bg-muted rounded p-2 flex flex-col items-center justify-center h-20 col-span-2">
                  <span className="font-bold">Other</span>
                  <span className="text-xs text-muted-foreground">(Image placeholder)</span>
                </div>
              </div>
            </div>
            {/* Community Dropdown for mobile */}
            <div>
              <span className="font-semibold">Community</span>
              <div className="flex flex-col gap-2 mt-2">
                <a href="https://patreon.com" target="_blank" rel="noopener" className="hover:text-primary">Patreon</a>
                <a href="https://discord.com" target="_blank" rel="noopener" className="hover:text-primary">Discord</a>
                <a href="https://youtube.com" target="_blank" rel="noopener" className="hover:text-primary">YouTube</a>
                <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-primary">Instagram</a>
                <a href="https://reddit.com" target="_blank" rel="noopener" className="hover:text-primary">Reddit</a>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">{t("nav.signin")}</Button>
          </div>
        )}
      </div>
    </nav>
  );
}
