import { Link } from "react-router-dom";
import { AnythingFound } from "../../ErrorPage/AnythingFound";
import { Paginations } from "src/utils/Paginations";
import { useEffect, useState } from "react";
import { Announcement } from "src/interfaces/convocatorias.interfaces";
import { getConvocatorias } from "../../../api/calls";
import { formatDate } from "src/utils";
import { getPrivateUrl } from "src/utils/getPrivateUrl";
 const Convocatorias = () => {
  const perPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [convocatoriasData, setConvocatoriasData] = useState<{
    announcements: Announcement[];
    totalPages: number;
    currentPage: number;
    perPage: number;
  }>({ announcements: [], totalPages: 0, currentPage: 1, perPage });

  useEffect(() => {
    const fetchConvocatorias = async () => {
      const response = await getConvocatorias({ page: currentPage, perPage });
      setConvocatoriasData((prev) => ({
        ...prev,
        announcements: response.announcements,
        totalPages: response.totalPages,
        currentPage: response.currentPage,
      }));
    };
    fetchConvocatorias();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const convocatorias = 2;

  return (
    <>
      <div>
        <div className="bg-secondary text-secondary-foreground py-12 px-4 md:px-6">
          <h1 className="text-4xl font-bold text-center">
            Convocatorias de la Secretaría Ejecutiva
          </h1>
        </div>
        {convocatoriasData.announcements.length < 1 ? (
          <AnythingFound />
        ) : (
          <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
              {convocatoriasData.announcements.map((announcement) => (
                <div className="bg-card p-6 rounded-lg shadow-md" key={announcement.id}>
                  <h2 className="text-xl font-bold mb-2">
                    {announcement.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {announcement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Fecha límite: {formatDate(announcement.date)}
                    </p>
                    <Link
                      to={getPrivateUrl(announcement.file)}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      rel="noopener noreferrer"
                      aria-label="Ver archivo"
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center ">
              {convocatorias > 0 && (
                <Paginations
                  currentPage={convocatoriasData.currentPage}
                  totalPages={convocatoriasData.totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Convocatorias