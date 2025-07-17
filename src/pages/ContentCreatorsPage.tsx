import { useTranslation } from "react-i18next";
import { Feather, Book, Handshake } from "lucide-react";

export default function ContentCreatorsPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 hero-title fantasy-accent">
            {t("contentCreators.title")}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t("contentCreators.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-lg text-center leading-relaxed text-foreground/80">
            <p>{t("contentCreators.p1")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group relative space-y-4 rounded-lg border bg-background/50 p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto bg-sky-500/10 rounded-full flex items-center justify-center ring-4 ring-sky-500/20 transition-all group-hover:ring-sky-500/40">
                <Feather className="text-sky-400 w-10 h-10 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold">{t("contentCreators.authorsTitle")}</h3>
              <p className="text-muted-foreground">{t("contentCreators.authorsDesc")}</p>
            </div>
            <div className="group relative space-y-4 rounded-lg border bg-background/50 p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto bg-rose-500/10 rounded-full flex items-center justify-center ring-4 ring-rose-500/20 transition-all group-hover:ring-rose-500/40">
                <Book className="text-rose-400 w-10 h-10 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold">{t("contentCreators.translatorsTitle")}</h3>
              <p className="text-muted-foreground">{t("contentCreators.translatorsDesc")}</p>
            </div>
            <div className="group relative space-y-4 rounded-lg border bg-background/50 p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto bg-teal-500/10 rounded-full flex items-center justify-center ring-4 ring-teal-500/20 transition-all group-hover:ring-teal-500/40">
                <Handshake className="text-teal-400 w-10 h-10 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold">{t("contentCreators.partnerTitle")}</h3>
              <p className="text-muted-foreground">{t("contentCreators.partnerDesc")}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}