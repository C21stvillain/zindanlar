import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function PricingPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-8">{t("pricing.title")}</h1>

        {/* ─── Pricing Cards ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
          {/* Novice Adventurer Card */}
          <Card className="w-96 bg-[#1a2a1a] text-white rounded-lg overflow-hidden border border-gray-700">
            <div className="relative h-48 flex items-center justify-center">
              <img src="/Token1.png" alt="Token" className="h-44 w-44 object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{t("pricing.novice.title")}</h2>
              <p className="text-xl mb-4">
                {t("pricing.novice.price")}
                <span className="text-sm text-gray-400">{t("pricing.novice.period")}</span>
              </p>
              <Link to="/subscribe/novice">
                <Button className="w-full bg-green-200 text-black hover:bg-green-300">{t("pricing.novice.join")}</Button>
              </Link>
              <ul className="list-disc list-inside text-left mt-6 space-y-2 text-gray-300">
                <li>{t("pricing.novice.feature1")}</li>
                <li>{t("pricing.novice.feature2")}</li>
                <li>{t("pricing.novice.feature3")}</li>
                <li>{t("pricing.novice.feature4")}</li>
                <li>{t("pricing.novice.feature5")}</li>
                <li>{t("pricing.novice.feature6")}</li>
              </ul>
            </div>
          </Card>

          {/* Dragon Hunter Card (Highlighted) */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-200 text-black px-4 py-1 rounded-t-md text-sm font-semibold">
              {t("pricing.dragon.recommended")}
            </div>
            <Card className="w-96 bg-[#1a2a1a] text-white rounded-lg overflow-hidden border-2 border-green-300 shadow-lg">
              <div className="relative h-48 flex items-center justify-center">
                <img src="/Token2.png" alt="Token" className="h-44 w-44 object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{t("pricing.dragon.title")}</h2>
                <p className="text-xl mb-4">
                  {t("pricing.dragon.price")}
                  <span className="text-sm text-gray-400">{t("pricing.dragon.period")}</span>
                </p>
                <Link to="/subscribe/dragon">
                  <Button className="w-full bg-green-200 text-black hover:bg-green-300">{t("pricing.dragon.join")}</Button>
                </Link>
                <ul className="list-disc list-inside text-left mt-6 space-y-2 text-gray-300">
                  <li>{t("pricing.dragon.feature1")}</li>
                  <li>{t("pricing.dragon.feature2")}</li>
                  <li>{t("pricing.dragon.feature3")}</li>
                  <li>{t("pricing.dragon.feature4")}</li>
                  <li>{t("pricing.dragon.feature5")}</li>
                  <li>{t("pricing.dragon.feature6")}</li>
                  <li>{t("pricing.dragon.feature7")}</li>
                  <li>{t("pricing.dragon.feature8")}</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Legendary Hero Card */}
          <Card className="w-96 bg-[#1a2a1a] text-white rounded-lg overflow-hidden border border-gray-700">
            <div className="relative h-48 flex items-center justify-center">
              <img src="/Token3.png" alt="Token" className="h-44 w-44 object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{t("pricing.legendary.title")}</h2>
              <p className="text-xl mb-4">
                {t("pricing.legendary.price")}
                <span className="text-sm text-gray-400">{t("pricing.legendary.period")}</span>
              </p>
              <Link to="/subscribe/legendary">
                <Button className="w-full bg-green-200 text-black hover:bg-green-300">{t("pricing.legendary.join")}</Button>
              </Link>
              <ul className="list-disc list-inside text-left mt-6 space-y-2 text-gray-300">
                <li>{t("pricing.legendary.feature1")}</li>
                <li>{t("pricing.legendary.feature2")}</li>
                <li>{t("pricing.legendary.feature3")}</li>
                <li>{t("pricing.legendary.feature4")}</li>
                <li>{t("pricing.legendary.feature5")}</li>
                <li>{t("pricing.legendary.feature6")}</li>
              </ul>
            </div>
          </Card>
        </div>
        {/* Testimonials */}
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("testimonials.title")}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("testimonials.desc")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="p-8 space-y-4 card-hover">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current text-primary" />
                            ))}
                        </div>
                        <p className="text-muted-foreground italic">
                            {t("testimonials.sarah")}
                        </p>
                        <div className="font-semibold">{t("testimonials.sarahName")}</div>
                    </Card>

                    <Card className="p-8 space-y-4 card-hover">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current text-primary" />
                            ))}
                        </div>
                        <p className="text-muted-foreground italic">
                            {t("testimonials.marcus")}
                        </p>
                        <div className="font-semibold">{t("testimonials.marcusName")}</div>
                    </Card>

                    <Card className="p-8 space-y-4 card-hover">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current text-primary" />
                            ))}
                        </div>
                        <p className="text-muted-foreground italic">
                            {t("testimonials.elena")}
                        </p>
                        <div className="font-semibold">{t("testimonials.elenaName")}</div>
                    </Card>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
