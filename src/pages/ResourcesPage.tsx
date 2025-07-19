import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function ResourcesPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section
        className="relative h-[560px] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/fantasy-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-7xl font-bold tracking-widest mb-4">
            {t("resources.hero.title")}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t("resources.hero.description")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-5xl font-bold mb-6">
                {t("resources.fantasy.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("resources.fantasy.description")}
              </p>
              <Button size="lg" variant="outline">
                {t("resources.fantasy.explore")}
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                className="resource-card-group card-image h-[32rem] bg-cover bg-center"
                style={{ backgroundImage: "url('/Assets.webp')" }}
              >
                <div className="absolute bottom-10 left-0 right-0 text-center">
                  <h3 className="text-white text-3xl font-bold resource-card-title tracking-widest">
                    {t("resources.maps.title")}
                  </h3>
                </div>
              </div>
              <div
                className="resource-card-group card-image h-[32rem] bg-cover bg-center"
                style={{ backgroundImage: "url('/adventure.webp')" }}
              >
                <div className="absolute bottom-10 left-0 right-0 text-center">
                  <h3 className="text-white text-3xl font-bold resource-card-title tracking-widest">
                    {t("resources.scenes.title")}
                  </h3>
                </div>
              </div>
              <div
                className="resource-card-group card-image h-[32rem] bg-cover bg-center"
                style={{ backgroundImage: "url('/TokenFrame2.webp')" }}
              >
                <div className="absolute inset-0">
                  <div className="token-images-container h-full">
                    <div style={{ top: '15%', left: '25%', transform: 'rotate(-15deg)' }}>
                      <img src="/Token1.png" alt="Token 1" className="token-image" />
                    </div>
                    <div style={{ top: '40%', left: '55%', transform: 'rotate(10deg)' }}>
                      <img src="/Token2.png" alt="Token 2" className="token-image" />
                    </div>
                    <div style={{ top: '65%', left: '15%', transform: 'rotate(5deg)' }}>
                      <img src="/Token3.png" alt="Token 3" className="token-image" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-10 left-0 right-0 text-center">
                  <h3 className="text-white text-3xl font-bold resource-card-title tracking-widest">
                    {t("resources.tokens.title")}
                  </h3>
                </div>
              </div>
              <div
                className="resource-card-group card-image h-[32rem] bg-cover bg-center"
                style={{ backgroundImage: "url('/mapAssets.webp')" }}
              >
                <div className="absolute inset-0">
                  <div className="token-images-container h-full">
                    <div style={{ top: '20%', left: '60%', transform: 'rotate(15deg)' }}>
                      <img src="/fireplace.webp" alt="Fireplace" className="token-image" />
                    </div>
                    <div style={{ top: '55%', left: '30%', transform: 'rotate(-10deg)' }}>
                      <img src="/chest.webp" alt="Chest" className="token-image" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-10 left-0 right-0 text-center">
                  <h3 className="text-white text-3xl font-bold resource-card-title tracking-widest">
                    {t("resources.map_assets.title")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}