import Header from "./Header";
import Footer from "./Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isMenuOpen={false} setIsMenuOpen={() => {}} />
      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-8">Hello World</h1>
        <p className="text-lg">This is the Pricing Page.</p>
      </main>
      <Footer />
    </div>
  );
}
