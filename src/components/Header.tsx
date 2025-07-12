import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import React from "react";

export default function Header({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  const { t } = useTranslation();
  return (
    <nav className="border-b border-border/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold tracking-tight fantasy-accent">{t("brand")}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#battlemaps" className="hover:text-primary transition-colors">{t("nav.battlemaps")}</a>
            <a href="#tokens" className="hover:text-primary transition-colors">{t("nav.tokens")}</a>
            <a href="#scenes" className="hover:text-primary transition-colors">{t("nav.scenes")}</a>
            <a href="#gallery" className="hover:text-primary transition-colors">{t("nav.gallery")}</a>
            <a href="#community" className="hover:text-primary transition-colors">{t("nav.community")}</a>
            <a href="/beast" className="hover:text-primary transition-colors">{t("bestiary.menu")}</a>
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
            <a href="#battlemaps" className="block hover:text-primary transition-colors">{t("nav.battlemaps")}</a>
            <a href="#tokens" className="block hover:text-primary transition-colors">{t("nav.tokens")}</a>
            <a href="#scenes" className="block hover:text-primary transition-colors">{t("nav.scenes")}</a>
            <a href="#gallery" className="block hover:text-primary transition-colors">{t("nav.gallery")}</a>
            <a href="#community" className="block hover:text-primary transition-colors">{t("nav.community")}</a>
            <a href="/beast" className="block hover:text-primary transition-colors">{t("bestiary.menu")}</a>
            <Button variant="outline" size="sm" className="w-full">{t("nav.signin")}</Button>
          </div>
        )}
      </div>
    </nav>
  );
}
