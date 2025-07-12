import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-lg fantasy-accent">Zindanlar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.battlemaps")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.tokens")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.scenes")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.adventurePacks")}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.contact")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.faq")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.licensing")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.commercial")}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.discord")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.reddit")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.artist")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.dmResources")}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.twitter")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.instagram")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.youtube")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.patreon")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>{t("footer.copyright")}</p>
          <p className="mt-2">{t("footer.crafting")}</p>
        </div>
      </div>
    </footer>
  );
}
