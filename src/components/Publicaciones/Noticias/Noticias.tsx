import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Newspaper, Star } from "lucide-react";
import { Paginations } from "../../../utils/Paginations";

import { getNews } from "src/api/calls";
import { Badge } from "@/components/ui/badge";
import { loadable } from "src/components/Loadable/loadable";
import { NewsInterface } from "src/interfaces/principal.interfaces";

const NewsCard = loadable(() => import("./NewsCard"));
 const Noticias = () => {
  const perPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState<{
    news: NewsInterface[];
    totalPages: number;
    currentPage: number;
    perPage: number;
  }>({ news: [], totalPages: 0, currentPage: 1, perPage });
  const [featuredNews, setFeaturedNews] = useState<NewsInterface[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const [normal, featured] = await Promise.all([
        getNews({ page: currentPage, perPage, featured: "all" }),
        getNews({ page: 1, perPage: 3, featured: "true" }),
      ]);

      setNewsData((prev) => ({
        ...prev,
        news: normal.news,
        totalPages: normal.totalPages,
        currentPage: normal.currentPage,
      }));

      setFeaturedNews(featured.news);
    };
    fetchNews();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const location = useLocation();
  const isNoticiaRoute = location.pathname.includes("/noticias/");
  return (
    <>
      {isNoticiaRoute ? (
        <Outlet />
      ) : (
        <div className="min-h-screen bg-background">
          {/* Header */}
          <header className="bg-white dark:bg-gray-900 shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center space-x-3">
                <Newspaper className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Noticias Institucionales
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Mantente informado sobre las últimas novedades del SESLAN
                  </p>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Featured News Section */}
            {currentPage === 1 && featuredNews.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center space-x-2 mb-6">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <h2 className="text-2xl font-semibold">
                    Noticias Destacadas
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </section>
            )}

            {/* All News Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">
                  {currentPage === 1
                    ? "Todas las Noticias"
                    : `Noticias - Página ${currentPage}`}
                </h2>
                <Badge variant="secondary" className="text-sm">
                  Página {newsData.currentPage} de {newsData.totalPages}
                </Badge>
              </div>

              {newsData.news.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsData.news.map((news) => (
                      <NewsCard key={news.id} news={news} />
                    ))}
                  </div>

                  <Paginations
                    currentPage={newsData.currentPage}
                    totalPages={newsData.totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              ) : (
                <div className="text-center py-12">
                  <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-muted-foreground">
                    No hay noticias disponibles
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Vuelve más tarde para ver las últimas novedades
                  </p>
                </div>
              )}
            </section>
          </main>
        </div>
      )}
    </>
  );
};
export default Noticias