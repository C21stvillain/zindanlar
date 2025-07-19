import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PricingPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-8">Pricing</h1>

        {/* ─── Pricing Cards ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-12">
          {/* Basic Card */}
          <Card className="w-80 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Basic</h2>
              <ul className="list-disc list-inside text-left mb-6 text-muted-foreground">
                <li>Access to free assets</li>
                <li>Community support</li>
                <li>Limited downloads</li>
              </ul>
            </div>
            <Button className="w-full mt-4" variant="outline">
              Choose Basic
            </Button>
          </Card>

          {/* Pro Card (Highlighted) */}
          <Card className="w-80 p-8 flex flex-col justify-between fantasy-bg text-white border-2 border-yellow-400 shadow-lg scale-105">
            <div>
              <h2 className="text-2xl font-bold mb-4">Pro</h2>
              <ul className="list-disc list-inside text-left mb-6">
                <li>All Basic features</li>
                <li>Unlimited downloads</li>
                <li>Exclusive assets</li>
                <li>Priority support</li>
              </ul>
            </div>
            <Button className="w-full mt-4 fantasy-bg text-white hover:opacity-90">
              Choose Pro
            </Button>
          </Card>

          {/* Ultimate Card */}
          <Card className="w-80 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Ultimate</h2>
              <ul className="list-disc list-inside text-left mb-6 text-muted-foreground">
                <li>All Pro features</li>
                <li>Early access to new releases</li>
                <li>Custom requests</li>
                <li>Special badge</li>
              </ul>
            </div>
            <Button className="w-full mt-4" variant="outline">
              Choose Ultimate
            </Button>
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
