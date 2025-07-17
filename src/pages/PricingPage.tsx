import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isMenuOpen={false} setIsMenuOpen={() => {}} />

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
      </main>

      <Footer />
    </div>
  );
}
