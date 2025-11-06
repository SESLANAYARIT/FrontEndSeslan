import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Eye,
  FileText,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSevacInfo } from "src/api/calls";
import {
  GroupedData,
  periodLabels,
  periodOrder,
  PeriodSEVAC,
  periodShortLabels,
  SevacDataPoint,
} from "src/interfaces/sevac.interfaces";
import { Loading } from "src/components/LoadingSpinner/Loading";
import { formatDate } from "src/utils";
import { getPrivateUrl } from "../../../utils/getPrivateUrl";

const Sevac = () => {
  const [data, Setdata] = useState<SevacDataPoint[]>();
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set());
  const [expandedPeriods, setExpandedPeriods] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const getData = async () => {
      const response = await getSevacInfo();
      Setdata(response);
    };
    getData();
  }, []);

  const sorter = (a:SevacDataPoint,b:SevacDataPoint)=>{

  const datoA = a.fileData?.name;
  const datoB = b.fileData?.name;
  if(!datoA || !datoB) {
    return 0;
  }
  // Extraer letra y números del formato LETRA.X.Y
  const matchA = datoA.match(/([A-Z])\.(\d+)\.(\d+)/);
  const matchB = datoB.match(/([A-Z])\.(\d+)\.(\d+)/);
  
  if (!matchA || !matchB) return 0;
  
  // Comparar letra (A, B, C, D, etc.)
  const letraA = matchA[1];
  const letraB = matchB[1];
  
  if (letraA !== letraB) {
    return letraA.localeCompare(letraB);
  }
  
  // Primer número (después de la letra)
  const num1A = parseInt(matchA[2]);
  const num1B = parseInt(matchB[2]);
  
  if (num1A !== num1B) {
    return num1A - num1B;
  }
  
  // Segundo número
  const num2A = parseInt(matchA[3]);
  const num2B = parseInt(matchB[3]);
  
  return num2A - num2B;
  }

  if (!data) return <Loading />;

  // Group data by year and period
  const groupedData: GroupedData = data.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = {};
    }
    if (!acc[item.year][item.period]) {
      acc[item.year][item.period] = [];
    }
    acc[item.year][item.period]!.push(item);
    return acc;
  }, {} as GroupedData);

  const sortedYears = Object.keys(groupedData)
    .map(Number)
    .sort((a, b) => b - a); // Most recent first

  const toggleYear = (year: number) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
      // Also collapse all periods for this year
      const periodsToRemove = Object.keys(groupedData[year]).map(
        (period) => `${year}-${period}`
      );
      periodsToRemove.forEach((key) => expandedPeriods.delete(key));
      setExpandedPeriods(new Set(expandedPeriods));
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const togglePeriod = (year: number, period: PeriodSEVAC) => {
    const key = `${year}-${period}`;
    const newExpanded = new Set(expandedPeriods);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedPeriods(newExpanded);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-10 h-10 rounded-lg  flex items-center justify-center">
          <Calendar className="w-5 h-5 text-gray-700" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Datos SEVAC</h2>
          <p className="text-sm text-gray-500">
            Información organizada por años y trimestres
          </p>
        </div>
      </div>

      {/* Lista de años */}
      {sortedYears.map((year) => {
        const yearData = groupedData[year];
        const isYearExpanded = expandedYears.has(year);
        const totalRecords = Object.values(yearData).reduce(
          (sum, periods) => sum + (periods?.length || 0),
          0
        );
        const activePeriods = Object.keys(yearData).length;

        return (
          <Card
            key={year}
            className="overflow-hidden rounded-xl border border-gray-200 shadow-sm"
          >
            <CardHeader className="bg-muted/40 py-3 px-5">
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={() => toggleYear(year)}
                  className="flex items-center gap-3 p-0 h-auto hover:bg-transparent"
                >
                  {isYearExpanded ? (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  )}
                  <CardTitle className="text-lg font-semibold">
                    {year}
                  </CardTitle>
                </Button>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700"
                  >
                    {activePeriods}{" "}
                    {activePeriods === 1 ? "trimestre" : "trimestres"}
                  </Badge>
                  <Badge variant="outline" className="text-gray-600">
                    {totalRecords}{" "}
                    {totalRecords === 1 ? "registro" : "registros"}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            {isYearExpanded && (
              <CardContent className="pt-4 px-5 pb-6 space-y-4">
                {periodOrder
                  .filter((period) => yearData[period])
                  .map((period) => {
                    const records = yearData[period]!;
                    const periodKey = `${year}-${period}`;
                    const isPeriodExpanded = expandedPeriods.has(periodKey);

                    return (
                      <Card
                        key={period}
                        className="border-l-2 border-l-gray-300 bg-white shadow-xs"
                      >
                        <CardHeader className="py-2 px-4">
                          <div className="flex items-center justify-between">
                            <Button
                              variant="ghost"
                              onClick={() => togglePeriod(year, period)}
                              className="flex items-center gap-2 p-0 h-auto hover:bg-transparent"
                            >
                              {isPeriodExpanded ? (
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-gray-500" />
                              )}
                              <span className="font-medium text-sm">
                                {periodLabels[period]}
                              </span>
                            </Button>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-gray-100 text-gray-600 font-medium">
                                {periodShortLabels[period]}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="text-gray-600"
                              >
                                {records?.length || 0}{" "}
                                {records?.length === 1 ? "archivo" : "archivos"}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>

                        {isPeriodExpanded && (
                          <CardContent className="pt-2 px-4 pb-4 space-y-3">
                            {records.sort(sorter).map((record) => (
                              <Card
                                key={record.id}
                                className="bg-gray-50 border border-gray-200 rounded-lg"
                              >
                                <CardContent className="p-3">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-3 flex-1 min-w-0">
                                      <div className="w-8 h-8 rounded-md  flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-4 h-4 text-gray-600" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-sm leading-tight mb-1 text-gray-800 truncate">
                                          {record.fileData?.name ||
                                            `Registro ${record.id.slice(0, 8)}`}
                                        </h4>
                                        {record.fileData && (
                                          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
                                            <span>
                                              Tamaño:{" "}
                                              {formatFileSize(
                                                record.fileData.size
                                              )}
                                            </span>
                                            <span>
                                              Subido:{" "}
                                              {formatDate(
                                                record.fileData.uploadDate
                                              )}
                                            </span>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    {record.fileData?.url && (
                                      <Link
                                        to={getPrivateUrl(record.fileData?.url)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-8 w-8 p-0 flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100"
                                         aria-label="Ver archivo"
                                      >
                                        <Eye className="w-4 h-4" />
                                      </Link>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
              </CardContent>
            )}
          </Card>
        );
      })}

      {/* No hay datos */}
      {sortedYears.length === 0 && (
        <Card className="border-dashed border-gray-300">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Calendar className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="font-medium text-lg mb-2 text-gray-700">
              No hay datos disponibles
            </h3>
            <p className="text-sm text-gray-500 max-w-sm">
              No se encontraron registros SEVAC para mostrar. Los datos
              aparecerán aquí una vez que se agreguen.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Sevac;
