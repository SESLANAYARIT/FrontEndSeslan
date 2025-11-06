import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCardsInfo33 } from "src/api/calls";
import { CardsInfo33, Year } from "src/interfaces/articulo33.interfaces";

const Articulo33 = () => {
  const [sections, setSections] = useState<CardsInfo33[]>([]);

  useEffect(() => {
    getCardsInfo33().then((res) => setSections(res));
  }, []);

  const getUniqueYears = (yearsArray: Year[]): number[] => {
    const years = [...new Set(yearsArray.map(({ year }) => year))];
    return years.sort((a, b) => b - a);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Artículo 33
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Selecciona una fracción para ver la información detallada por períodos
        </p>
      </header>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          const years = getUniqueYears(section.data);

          return (
            <Link to={`/articulo33/${section.slug}`} key={section.slug} aria-label="Ir a la fracción">
              <Card className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 bg-white h-full flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-lg md:text-xl font-semibold text-gray-900">
                    {section.name}
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 px-2 py-1 text-sm"
                    >
                      {section.data.length}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-gray-500 text-sm">
                    {section._count.subsections > 0
                      ? `${section._count.subsections} Subfracciones`
                      : "Fracción principal"}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3 text-sm flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Registros de datos:</span>
                      <Badge
                        variant="outline"
                        className="text-xs border-gray-300 text-gray-700 px-2 py-0.5"
                      >
                        {section.data.length}
                      </Badge>
                    </div>

                    {years.length > 0 && (
                      <>
                        <Separator className="bg-gray-200" />
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">
                            Años disponibles:
                          </span>
                          <div className="flex gap-1 flex-wrap">
                            {years.slice(0, 3).map((year) => (
                              <Badge
                                key={year}
                                variant="outline"
                                className="text-xs border-gray-300 text-gray-700 px-2 py-0.5"
                              >
                                {year}
                              </Badge>
                            ))}
                            {years.length > 3 && (
                              <Badge
                                variant="outline"
                                className="text-xs border-gray-300 text-gray-700 px-2 py-0.5"
                              >
                                +{years.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Articulo33;