import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Crown, Rocket, Shield, Eye, Download, Sword, Scroll, Dice6, Map } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/fantasy-hero.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 drop-shadow-2xl hero-title">
                        <span className="hero-title-gradient">{t("headline")}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
                        {t("hero.desc")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
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
                            <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                            <div className="text-muted-foreground">{t("stats.battlemaps")}</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
                            <div className="text-muted-foreground">{t("stats.tokens")}</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-primary">200+</div>
                            <div className="text-muted-foreground">{t("stats.scenes")}</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
                            <div className="text-muted-foreground">{t("stats.happyDMs")}</div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Assets Section */}
            <section id="assets" className="py-24 bg-card/20">
                <div className="container mx-auto px-4">
                    <div className="fantasy-divider mb-8"></div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-4 flex flex-col items-center">
                            <img
                                src="/Assets.webp"
                                alt="A collection of assets for TTRPGs"
                                className="w-[60%] rounded-lg border border-border/20 card-hover"
                            />
                            <div className="text-center">
                                <h4 className="font-semibold text-lg">{t("assets.imageTitle")}</h4>
                                <p className="text-muted-foreground">{t("assets.imageSubtitle")}</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-5xl md:text-6xl font-bold section-title-gradient tracking-tight">
                                {t("assets.title")}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t("assets.desc")}
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                                        <Scroll className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{t("assets.customMapsTitle")}</h4>
                                        <p className="text-muted-foreground text-sm">{t("assets.customMapsDesc")}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                                        <Rocket className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{t("assets.animatedScenesTitle")}</h4>
                                        <p className="text-muted-foreground text-sm">{t("assets.animatedScenesDesc")}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                                        <Users className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{t("assets.topdownTokensTitle")}</h4>
                                        <p className="text-muted-foreground text-sm">{t("assets.topdownTokensDesc")}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                                        <Map className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{t("assets.mapAssetsTitle")}</h4>
                                        <p className="text-muted-foreground text-sm">{t("assets.mapAssetsDesc")}</p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
                            >
                                <Download className="mr-2" />
                                {t("assets.browse")}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Mechanics Section */}
            <section id="dynamic-mechanics" className="py-24 bg-card/20">
                <div className="container mx-auto px-4">
                    <div className="fantasy-divider mb-8"></div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-5xl md:text-6xl font-bold section-title-gradient tracking-tight">
                                {t("dynamicMechanics.title")}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t("dynamicMechanics.desc")}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Crown className="text-primary w-5 h-5" />
                                        <span className="font-semibold">{t("dynamicMechanics.subclassesTitle")}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{t("dynamicMechanics.subclassesDesc")}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Shield className="text-primary w-5 h-5" />
                                        <span className="font-semibold">{t("dynamicMechanics.statBlocksTitle")}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{t("dynamicMechanics.statBlocksDesc")}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Scroll className="text-primary w-5 h-5" />
                                        <span className="font-semibold">{t("dynamicMechanics.spellsTitle")}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{t("dynamicMechanics.spellsDesc")}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Dice6 className="text-primary w-5 h-5" />
                                        <span className="font-semibold">{t("dynamicMechanics.gameSettingsTitle")}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{t("dynamicMechanics.gameSettingsDesc")}</p>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
                            >
                                <Download className="mr-2" />
                                {t("dynamicMechanics.browse")}
                            </Button>
                        </div>

                        <div className="space-y-4 flex flex-col items-center">
                            <img
                                src="/Mechanics.png"
                                alt="Dynamic Mechanics"
                                className="w-[50%] rounded-lg border border-border/20 card-hover"
                            />
                            <div className="text-center">
                                <h4 className="font-semibold text-lg">{t("dynamicMechanics.imageTitle")}</h4>
                                <p className="text-muted-foreground">{t("dynamicMechanics.imageSubtitle")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adventures Section */}
            <section id="adventures" className="py-24">
                <div className="container mx-auto px-4">
                    <div className="fantasy-divider mb-8"></div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-4">
                            <img
                                src="/adventure.webp"
                                alt="An adventurous scene for TTRPGs"
                                className="w-full rounded-lg border border-border/20 card-hover"
                            />
                            <div className="text-center">
                                <h4 className="font-semibold text-lg">{t("adventures.imageTitle")}</h4>
                                <p className="text-muted-foreground">{t("adventures.imageSubtitle")}</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-5xl md:text-6xl font-bold section-title-gradient tracking-tight">
                                {t("adventures.title")}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t("adventures.desc")}
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                                        <Sword className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">{t("adventures.oneShotTitle")}</h4>
                                        <p className="text-muted-foreground text-sm">{t("adventures.oneShotDesc")}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                                        <Scroll className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">{t("adventures.storyTitle")}</h4>
                                        <p className="text-muted-foreground text-sm">{t("adventures.storyDesc")}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                                        <Users className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">{t("adventures.socialTitle")}</h4>
                                        <p className="text-muted-foreground text-sm">{t("adventures.socialDesc")}</p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
                            >
                                <Eye className="mr-2" />
                                {t("adventures.viewAdventures")}
                            </Button>
                        </div>
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
                        <Card className="bg-card border-primary/20 p-8 text-center space-y-6 card-hover">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                                <Crown className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold">{t("features.premiumTitle")}</h3>
                            <p className="text-muted-foreground">{t("features.premiumDesc")}</p>
                        </Card>

                        <Card className="bg-card border-primary/20 p-8 text-center space-y-6 card-hover">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                                <Users className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold">{t("features.communityTitle")}</h3>
                            <p className="text-muted-foreground">{t("features.communityDesc")}</p>
                        </Card>

                        <Card className="bg-card border-primary/20 p-8 text-center space-y-6 card-hover">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                                <Zap className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold">{t("features.updatesTitle")}</h3>
                            <p className="text-muted-foreground">{t("features.updatesDesc")}</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 border-t border-border/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center space-y-8">
                        <h3 className="text-3xl font-bold">{t("newsletter.title")}</h3>
                        <p className="text-muted-foreground text-lg">{t("newsletter.desc")}</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                placeholder={t("newsletter.emailPlaceholder")}
                                className="flex-1 bg-background/50"
                                type="email"
                            />
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                                {t("newsletter.subscribe")}
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {t("newsletter.spam")}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}