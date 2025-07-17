import { useTranslation } from "react-i18next";
import { Shield, Users, Rocket } from "lucide-react";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 hero-title fantasy-accent">
            {t("about.title")}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-lg text-center leading-relaxed text-foreground/80">
            <p>{t("about.p1")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-indigo-500/10 rounded-full flex items-center justify-center ring-4 ring-indigo-500/20">
                <Shield className="text-indigo-400 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">{t("about.missionTitle")}</h3>
              <p className="text-muted-foreground">{t("about.missionDesc")}</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center ring-4 ring-emerald-500/20">
                <Users className="text-emerald-400 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">{t("about.teamTitle")}</h3>
              <p className="text-muted-foreground">{t("about.teamDesc")}</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center ring-4 ring-amber-500/20">
                <Rocket className="text-amber-400 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">{t("about.visionTitle")}</h3>
              <p className="text-muted-foreground">{t("about.visionDesc")}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}