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
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">CR</th>
                  <th className="px-4 py-2">URL</th>
                  <th className="px-4 py-2">Cover</th>
                </tr>
              </thead>
              <tbody>
                {monsters.map((monster) => (
                  <tr key={monster.id}>
                    <td className="border px-4 py-2">{monster.id}</td>
                    <td className="border px-4 py-2">{monster.Name}</td>
                    <td className="border px-4 py-2">{monster.Title}</td>
                    <td className="border px-4 py-2">{monster.cr ?? "-"}</td>
                    <td className="border px-4 py-2">
                      <a
                        href={monster.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {monster.URL}
                      </a>
                    </td>
                    <td className="border px-4 py-2">
                      {monster.Cover && monster.Cover.length > 0 && monster.Cover[0].is_image ? (
                        <img
                          src={monster.Cover[0].url}
                          alt={monster.Cover[0].visible_name || monster.Cover[0].name}
                          className="h-12 w-auto rounded"
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
