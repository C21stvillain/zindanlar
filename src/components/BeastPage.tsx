import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";

export default function BeastPage() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </main>
      <Footer />
    </div>
  );
}
