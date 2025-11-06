import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, Download, FileText, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Article33,
  Datum,
  getPeriodLabel,
  getPeriodOrder,
} from "src/interfaces/articulo33.interfaces";
import { Loading } from "src/components/LoadingSpinner/Loading";
import { getPrivateUrl } from "../../../../utils/getPrivateUrl";
import { get33ArticleBySlug } from "src/api/calls";
import { AnythingFound } from "src/components/ErrorPage/AnythingFound";

const ArticuloIndividual = () => {
  const [section, Setsection] = useState<Article33>();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        if (!params.slug) navigate("/Error", { replace: true });
        const response = await get33ArticleBySlug(params.slug!);
        Setsection(response);
      } catch (err) {
        navigate("/Error", { replace: true });
      }
    };

    fetchInfo();
  }, [navigate, params]);

  const getUniqueYears = (dataPoints: Datum[]): number[] => {
    const years = [...new Set(dataPoints.map((dp) => dp.year))];
    return years.sort((a, b) => b - a);
  };

  const getDataPointsByYear = (dataPoints: Datum[], year: number): Datum[] => {
    return dataPoints
      .filter((dp) => dp.year === year)
      .sort((a, b) => getPeriodOrder(a.period) - getPeriodOrder(b.period));
  };

  const renderDataTable = (dataPoints: Datum[], year: number) => {
    const yearDataPoints = getDataPointsByYear(dataPoints, year);
    
    if (yearDataPoints.length === 0) return null;

    return (
      <Card key={year} className="border-border">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Año {year}
            </CardTitle>
            <Badge
              variant="secondary"
              className="bg-muted text-muted-foreground"
            >
              {yearDataPoints.length} registros
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold text-foreground">
                    Período
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Archivo
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Descargar
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {yearDataPoints.map((dataPoint) => (
                  <TableRow
                    key={`${dataPoint.year}-${dataPoint.period}`}
                    className="hover:bg-muted/30"
                  >
                    <TableCell className="font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        {getPeriodLabel(dataPoint.period)}
                      </div>
                    </TableCell>
                    <TableCell>
                      {dataPoint.file ? (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <FileText className="h-4 w-4" />
                          <span className="text-sm">
                            {dataPoint.file.name}
                          </span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">
                          Sin archivo
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {dataPoint.file ? (
                        <Link
                          to={getPrivateUrl(dataPoint.file.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-primary hover:text-primary/80 hover:bg-primary/10 rounded px-2 py-1 transition"
                          title="Descargar archivo"
                          aria-label="Descargar archivo"
                        >
                          <Download className="h-4 w-4" />
                        </Link>
                      ) : (
                        <span className="text-muted-foreground text-sm">
                          -
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    );
  };

  if (!section) return <Loading />;
  
  const mainYears = getUniqueYears(section.data);
  const hasMainData = mainYears.length > 0;
  const hasSubsections = section.subsections && section.subsections.length > 0;

  if (!hasMainData && !hasSubsections) return <AnythingFound />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">{section.name}</h1>
          <p className="text-muted-foreground">
            Información detallada por períodos y años
          </p>
        </div>

        {/* Main Section Data */}
        {hasMainData && (
          <div className="space-y-8">
            {mainYears.map((year) => renderDataTable(section.data, year))}
          </div>
        )}

        {/* Subsections */}
        {hasSubsections && (
          <div className="space-y-8 mt-12">
            <div className="flex items-center gap-2 border-b border-border pb-2">
            </div>
            
            {section.subsections!.map((subsection) => {
              const subsectionYears = getUniqueYears(subsection.data);
              
              if (subsectionYears.length === 0) return null;

              return (
                <div key={subsection.id} className="space-y-4">
                  <div className="flex items-start gap-3 pl-4 border-l-4 border-primary">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {subsection.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {subsectionYears.length} {subsectionYears.length === 1 ? 'año' : 'años'} con datos
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 pl-6">
                    {subsectionYears.map((year) => 
                      renderDataTable(subsection.data, year)
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticuloIndividual;