import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronRight, Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { getPublicAccount } from "src/api/calls";
import {
  CuentaPublicaInterface,
  PeriodPA,
} from "src/interfaces/cuentaPublica.interfaces";
import { cn } from "src/lib/utils";
import { getPrivateUrl } from "src/utils/getPrivateUrl";

const CuentaPublica = () => {
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set());
  const [data, Setdata] = useState<CuentaPublicaInterface[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getPublicAccount();
      Setdata(response);
    };
    getData();
  }, []);

  // Obtener años únicos y ordenarlos
  const years = Array.from(new Set(data.map((item) => item.year))).sort(
    (a, b) => b - a
  );

  // Organizar datos por año y período
  const organizedData = years.reduce((acc, year) => {
    acc[year] = {
      ANUAL: data.filter(
        (item) => item.year === year && item.period === PeriodPA.ANUAL
      ),
      Q1: data.filter(
        (item) => item.year === year && item.period === PeriodPA.Q1
      ),
      Q2: data.filter(
        (item) => item.year === year && item.period === PeriodPA.Q2
      ),
      Q3: data.filter(
        (item) => item.year === year && item.period === PeriodPA.Q3
      ),
      Q4: data.filter(
        (item) => item.year === year && item.period === PeriodPA.Q4
      ),
    };
    return acc;
  }, {} as Record<number, Record<PeriodPA, CuentaPublicaInterface[]>>);

  const periods = [
    PeriodPA.ANUAL,
    PeriodPA.Q1,
    PeriodPA.Q2,
    PeriodPA.Q3,
    PeriodPA.Q4,
  ];

  const getPeriodLabel = (period: PeriodPA) => {
    switch (period) {
      case PeriodPA.ANUAL:
        return "Anual";
      case PeriodPA.Q1:
        return "1 Trimestre";
      case PeriodPA.Q2:
        return "2 Trimestre";
      case PeriodPA.Q3:
        return "3 Trimestre";
      case PeriodPA.Q4:
        return "4 Trimestre";
    }
  };

  const getPeriodColor = (period: PeriodPA) => {
    switch (period) {
      case PeriodPA.ANUAL:
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case PeriodPA.Q1:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case PeriodPA.Q2:
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case PeriodPA.Q3:
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case PeriodPA.Q4:
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    }
  };

  const toggleYear = (year: number) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-balance mb-2">
          Gestión de Archivos de la cuenta Cuenta Pública
        </h1>
        <p className="text-muted-foreground text-pretty">
          Archivos organizados por trimestres y anuales
        </p>
      </div>

      <div className="space-y-4">
        {years.map((year) => (
          <Card key={year}>
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 border-b"
              onClick={() => toggleYear(year)}
            >
              <h3 className="text-lg font-semibold">{year}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {data.filter((item) => item.year === year).length} archivos
                </span>
                {expandedYears.has(year) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </div>
            </div>

            {expandedYears.has(year) && (
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
                  {periods.map((period) => (
                    <div key={period} className="space-y-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className={cn("text-xs", getPeriodColor(period))}
                        >
                          {getPeriodLabel(period)}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        {organizedData[year]?.[period]?.length > 0 ? (
                          organizedData[year][period].map((file) => (
                            <Card key={file.id} className="p-3 bg-muted/20">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                  <span className="text-sm font-medium truncate">
                                    {file.fileData.name ||
                                      `Archivo ${file.id.slice(0, 8)}`}
                                  </span>
                                </div>

                                <a
                                  href={getPrivateUrl(file.fileData.url)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
                                aria-label="Ver archivo"
                                >
                                  <Download className="h-3 w-3 mr-1" />
                                  Ver
                                </a>
                              </div>
                            </Card>
                          ))
                        ) : (
                          <div className="text-center text-muted-foreground text-sm py-4 border-2 border-dashed border-muted rounded-lg">
                            Sin archivo
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CuentaPublica;
