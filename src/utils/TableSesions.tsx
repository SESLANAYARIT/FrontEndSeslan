import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Download,
  FileText,
  Folder,
} from "lucide-react";
import { useState } from "react";
import {
  categoryColors,
  categoryLabels,
  FileSessionCategory,
  Session,
  SessionFile,
} from "src/interfaces/sessions.interfaces";
import { formatDate } from "./formDate";
import { Link } from "react-router-dom";
import { getPrivateUrl } from "./getPrivateUrl";

interface SessionsTableProps {
  sessions: Session[];
}
export function SessionsTable({ sessions }: SessionsTableProps) {
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set());

  // Agrupar sesiones por año
  const sessionsByYear = sessions.reduce((acc, session) => {
    const year = new Date(session.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(session);
    return acc;
  }, {} as Record<number, Session[]>);

  // Ordenar años de más reciente a más antiguo
  const sortedYears = Object.keys(sessionsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const toggleYear = (year: number) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const groupFilesByCategory = (files: SessionFile[]) => {
    return files.reduce((acc, file) => {
      if (!acc[file.category]) {
        acc[file.category] = [];
      }
      acc[file.category].push(file);
      return acc;
    }, {} as Record<FileSessionCategory, SessionFile[]>);
  };

  return (
    <div className="space-y-4">
      {sortedYears.map((year) => (
        <Card key={year} className="overflow-hidden">
          <Collapsible
            open={expandedYears.has(year)}
            onOpenChange={() => toggleYear(year)}
          >
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-xl font-semibold">{year}</span>
                    <Badge variant="secondary" className="ml-2">
                      {sessionsByYear[year].length} sesión
                      {sessionsByYear[year].length !== 1 ? "es" : ""}
                    </Badge>
                  </div>
                  {expandedYears.has(year) ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </CardTitle>
              </CardHeader>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <CardContent className="pt-0">
                <div className="space-y-6">
                  {sessionsByYear[year]
                    .sort(
                      (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    )
                    .map((session) => {
                      const filesByCategory = groupFilesByCategory(
                        session.files
                      );

                      return (
                        <div
                          key={session.id}
                          className="border rounded-lg p-4 bg-card"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-1">
                                {session.name}
                              </h3>
                              <p className="text-sm text-muted-foreground flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formatDate(session.date)}
                              </p>
                            </div>
                            <Badge variant="outline" className="ml-4">
                              {session.files.length} archivo
                              {session.files.length !== 1 ? "s" : ""}
                            </Badge>
                          </div>

                          <div className="grid gap-4 md:grid-cols-3">
                            {(
                              [
                                "ACUERDO",
                                "ACTA",
                                "DOCUMENTO_ADICIONAL",
                              ] as FileSessionCategory[]
                            ).map((category) => {
                              const categoryFiles =
                                filesByCategory[category] || [];

                              return (
                                <div key={category} className="space-y-2">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Folder className="h-4 w-4 text-muted-foreground" />
                                    <Badge className={categoryColors[category]}>
                                      {categoryLabels[category]}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">
                                      ({categoryFiles.length})
                                    </span>
                                  </div>

                                  {categoryFiles.length > 0 ? (
                                    <div className="space-y-2">
                                      {categoryFiles.map((file, index) => (
                                        <div
                                          key={`${file.url}-${index}`}
                                          className="flex items-center justify-between p-2 rounded border bg-muted/30 hover:bg-muted/50 transition-colors"
                                        >
                                          <div className="flex items-center gap-2 flex-1 min-w-0">
                                            <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                            <span
                                              className="text-sm truncate"
                                              title={file.name}
                                            >
                                              {file.name}
                                            </span>
                                          </div>
                                          <Link
                                            to={getPrivateUrl(file.url)}
                                            target="_blank"
                                            download={file.name}
                                            className="ml-2 flex-shrink-0 inline-flex items-center justify-center h-8 w-8 text-gray-600 hover:bg-gray-100 rounded"
                                            aria-label="Descargar archivo"
                                          >
                                            <Download className="h-4 w-4" />
                                          </Link>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <div className="text-xs text-muted-foreground italic p-2 text-center border rounded bg-muted/20">
                                      Sin archivos
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      ))}

      {sortedYears.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No hay sesiones disponibles
            </h3>
            <p className="text-muted-foreground">
              Aún no se han registrado sesiones en el sistema.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
