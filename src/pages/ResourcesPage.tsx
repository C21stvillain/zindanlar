import { useTranslation } from "react-i18next";

export default function ResourcesPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-8">{t("resources.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("resources.description")}
        </p>
      </main>
    </div>
  );
}