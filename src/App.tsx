import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Star, Zap, Users, Crown, Rocket, Shield, Eye, Download, MapPin, Sword, Scroll, Dice6 } from "lucide-react";
import { useEffect, useState } from "react";
import { getMonster } from "./services/baserow";
import { BaserowMonster } from "./types/baserow";

import { MonsterCard } from "./components/MonsterCard";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import BeastPage from "./pages/BeastPage";
import PricingPage from "./pages/PricingPage";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./i18n";
import { useTranslation } from "react-i18next";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [monster, setMonster] = useState<BaserowMonster | null>(null);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    getMonster().then(setMonster);
  }, []);

  // Simple routing for /beast and /pricing
  const isBeastPage = useMemo(() => location.pathname === "/beast", [location.pathname]);
  const isPricingPage = useMemo(() => location.pathname === "/pricing", [location.pathname]);
  if (isBeastPage) {
    return <BeastPage />;
  }
  if (isPricingPage) {
    return <PricingPage />;
  }
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/fantasy-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 fantasy-bg text-background px-4 py-2 text-sm font-semibold">
            {t("hero.badge")}
          </Badge>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 drop-shadow-2xl hero-title">
            <span className="fantasy-accent">{t("headline")}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
            {t("hero.desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="fantasy-bg text-background hover:opacity-90 px-8 py-6 text-lg font-semibold"
            >
              <Download className="mr-2" />
              {t("button")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="backdrop-blur-sm border-foreground/20 px-8 py-6 text-lg"
            >
              <Eye className="mr-2" />
              {t("hero.viewGallery")}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold fantasy-accent">500+</div>
              <div className="text-muted-foreground">{t("stats.battlemaps")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold fantasy-accent">1000+</div>
              <div className="text-muted-foreground">{t("stats.tokens")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold fantasy-accent">200+</div>
              <div className="text-muted-foreground">{t("stats.scenes")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold fantasy-accent">10K+</div>
              <div className="text-muted-foreground">{t("stats.happyDMs")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Battlemaps Section */}
      <section id="battlemaps" className="py-24">
        <div className="container mx-auto px-4">
          <div className="fantasy-divider mb-8"></div>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold fantasy-accent tracking-tight mb-6">
              {t("battlemaps.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("battlemaps.desc")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/20 p-6 card-hover">
              <div className="space-y-4">
                <MapPin className="text-amber-400 w-8 h-8" />
                <h3 className="text-xl font-semibold">Dungeons & Crypts</h3>
                <p className="text-sm text-muted-foreground">{t("battlemaps.dungeonsDesc")}</p>
                <div className="text-sm fantasy-accent font-semibold">{t("battlemaps.dungeonsCount")}</div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 p-6 card-hover">
              <div className="space-y-4">
                <Crown className="text-green-400 w-8 h-8" />
                <h3 className="text-xl font-semibold">Taverns & Cities</h3>
                <p className="text-sm text-muted-foreground">{t("battlemaps.tavernsDesc")}</p>
                <div className="text-sm fantasy-accent font-semibold">{t("battlemaps.tavernsCount")}</div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20 p-6 card-hover">
              <div className="space-y-4">
                <Zap className="text-blue-400 w-8 h-8" />
                <h3 className="text-xl font-semibold">Wilderness & Magic</h3>
                <p className="text-sm text-muted-foreground">{t("battlemaps.wildernessDesc")}</p>
                <div className="text-sm fantasy-accent font-semibold">{t("battlemaps.wildernessCount")}</div>
              </div>
            </Card>
          </div>

          
        </div>
      </section>

      {/* Tokens Section */}
      <section id="tokens" className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="fantasy-divider mb-8"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold fantasy-accent tracking-tight">
                {t("tokens.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("tokens.desc")}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Sword className="fantasy-accent w-5 h-5" />
                    <span className="font-semibold">All D&D Classes</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("tokens.allClassesDesc")}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="fantasy-accent w-5 h-5" />
                    <span className="font-semibold">Multiple Races</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("tokens.racesDesc")}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Crown className="fantasy-accent w-5 h-5" />
                    <span className="font-semibold">Various Ages</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("tokens.agesDesc")}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Dice6 className="fantasy-accent w-5 h-5" />
                    <span className="font-semibold">Ready for VTT</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("tokens.vttDesc")}</p>
                </div>
              </div>

              <Button
                size="lg"
                className="fantasy-bg text-background hover:opacity-90 px-8 py-6 text-lg font-semibold"
              >
                <Download className="mr-2" />
                {t("tokens.browse")}
              </Button>
            </div>

            <div className="space-y-4">
              <img
                src="/character-token-1.jpg"
                alt="Dragonborn character token collection"
                className="w-full rounded-lg border border-border/20 card-hover"
              />
              <div className="text-center">
                <h4 className="font-semibold text-lg">25 Dragonborn Portraits</h4>
                <p className="text-muted-foreground">{t("tokens.dragonbornDesc")}</p>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Scenes Section */}
      <section id="scenes" className="py-24">
        <div className="container mx-auto px-4">
          <div className="fantasy-divider mb-8"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <img
                src="/tavern-scene.jpg"
                alt="Fantasy tavern interior scene"
                className="w-full rounded-lg border border-border/20 card-hover"
              />
              <div className="text-center">
                <h4 className="font-semibold text-lg">The Wyrm's Rest Tavern</h4>
                <p className="text-muted-foreground">Perfect for social encounters and roleplay</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold fantasy-accent tracking-tight">
                {t("scenes.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("scenes.desc")}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full fantasy-bg flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Theatre of the Mind</h4>
                    <p className="text-muted-foreground text-sm">{t("scenes.theatreDesc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full fantasy-bg flex items-center justify-center flex-shrink-0 mt-1">
                    <Scroll className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Story Moments</h4>
                    <p className="text-muted-foreground text-sm">{t("scenes.storyDesc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full fantasy-bg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Social Encounters</h4>
                    <p className="text-muted-foreground text-sm">{t("scenes.socialDesc")}</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="fantasy-bg text-background hover:opacity-90 px-8 py-6 text-lg font-semibold"
              >
                <Eye className="mr-2" />
                {t("scenes.viewScenes")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Loved by Game Masters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("testimonials.desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current fantasy-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                {t("testimonials.sarah")}
              </p>
              <div className="font-semibold">- Sarah M., DM for 8 years</div>
            </Card>

            <Card className="p-8 space-y-4 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current fantasy-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                {t("testimonials.marcus")}
              </p>
              <div className="font-semibold">- Marcus T., New DM</div>
            </Card>

            <Card className="p-8 space-y-4 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current fantasy-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                {t("testimonials.elena")}
              </p>
              <div className="font-semibold">- Elena R., Veteran DM</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("features.title")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20 p-8 text-center space-y-6 card-hover">
              <div className="w-16 h-16 mx-auto bg-indigo-500/20 rounded-full flex items-center justify-center">
                <Crown className="text-indigo-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Premium Quality</h3>
              <p className="text-muted-foreground">{t("features.premiumDesc")}</p>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border-emerald-500/20 p-8 text-center space-y-6 card-hover">
              <div className="w-16 h-16 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Users className="text-emerald-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Active Community</h3>
              <p className="text-muted-foreground">{t("features.communityDesc")}</p>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-500/20 p-8 text-center space-y-6 card-hover">
              <div className="w-16 h-16 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center">
                <Zap className="text-amber-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Regular Updates</h3>
              <p className="text-muted-foreground">{t("features.updatesDesc")}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h3 className="text-3xl font-bold">Join the Adventure</h3>
            <p className="text-muted-foreground text-lg">{t("newsletter.desc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder={t("newsletter.emailPlaceholder")}
                className="flex-1 bg-background/50"
                type="email"
              />
              <Button className="fantasy-bg text-background hover:opacity-90 px-8">
                {t("newsletter.subscribe")}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("newsletter.spam")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
