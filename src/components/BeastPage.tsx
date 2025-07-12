import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
// import { getMonster } from "../services/baserow";
import { BaserowMonster } from "../types/baserow";

const BeastPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [monsters, setMonsters] = useState<BaserowMonster[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMonsters() {
      try {
        const response = await fetch(
          "https://api.baserow.io/api/database/rows/table/598566/?user_field_names=true&page=1&size=200",
          {
            headers: {
              Authorization: "Token f3IkTZcR0OYR2RvXlhe8nGRvWoATW4Hz",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch monsters");
        }
        const data = await response.json();
        setMonsters(data.results || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchMonsters();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl p-4">
          <h1 className="text-4xl font-bold mb-6">{t("Monster Table")}</h1>
          {loading && <p>{t("Loading...")}</p>}
          {error && <p className="text-red-500">{error}</p>}
          {monsters.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {monsters.map((monster) => {
                const coverImg = monster.Cover && monster.Cover.length > 0 && monster.Cover[0].is_image ? monster.Cover[0].url : null;
                return (
                  <a
                    key={monster.id}
                    href={monster.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none"
                    tabIndex={0}
                  >
                    <div
                      className="relative rounded-xl shadow-lg flex flex-col justify-end min-h-[340px] h-[340px] border border-gray-300 overflow-hidden group bg-gray-900 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105 cursor-pointer"
                      style={coverImg ? { backgroundImage: `url(${coverImg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {}}
                    >
                      {/* Overlay for darkening the image for text readability */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
                      {monster.cr && (
                        <span className="absolute top-3 right-4 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded z-20">
                          CR {monster.cr}
                        </span>
                      )}
                      <div className="relative z-20 flex-1 flex items-end justify-center w-full pb-6">
                        <span className="text-xl font-bold text-center w-full text-white drop-shadow-lg bg-black/40 rounded px-2 py-1">
                          {monster.Title}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
          {!loading && monsters.length === 0 && !error && (
            <p>{t("No monsters found.")}</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BeastPage;
