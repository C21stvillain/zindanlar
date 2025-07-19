import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BeastPage from "./pages/BeastPage";
import PricingPage from "./pages/PricingPage";
import ContentCreatorsPage from "./pages/ContentCreatorsPage";
import ResourcesPage from "./pages/ResourcesPage";

import "./i18n";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const renderPage = () => {
    switch (location.pathname) {
      case "/":
        return <HomePage />;
      case "/about":
        return <AboutPage />;
      case "/beast":
        return <BeastPage />;
      case "/pricing":
        return <PricingPage />;
      case "/content-creators":
        return <ContentCreatorsPage />;
      case "/resources":
        return <ResourcesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
