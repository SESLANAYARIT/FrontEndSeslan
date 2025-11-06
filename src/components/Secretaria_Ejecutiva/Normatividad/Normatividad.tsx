import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileText,
  Search,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getNormativity } from "src/api/calls";
import {
  CATEGORIESNORMATIVITY,
  NormativityDocument,
} from "src/interfaces/normativity.interfaces";
import { formatDate } from "src/utils";
import { getPrivateUrl } from "src/utils/getPrivateUrl";

const Normatividad = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({
    ESTATAL: true,
    INTERNACIONAL: true,
    NACIONAL: true,
    INTERNA: true,
  });

  const [data, setData] = useState<NormativityDocument[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getNormativity();
      setData(response);
    };
    getData();
  }, []);

  const groupedDocuments = useMemo(() => {
    console.log(data);
    const filtered = data.filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.tipoNormatividad.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });

    const grouped = filtered.reduce((acc, doc) => {
      if (!acc[doc.tipoNormatividad]) {
        acc[doc.tipoNormatividad] = [];
      }
      acc[doc.tipoNormatividad].push(doc);
      return acc;
    }, {} as Record<string, NormativityDocument[]>);

    return grouped;
  }, [data, searchTerm]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const totalDocuments = Object.values(groupedDocuments).reduce(
    (sum, docs) => sum + docs.length,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-3 text-balance">
            Normatividad Gubernamental
          </h1>
        </div>

        {/* Search Section */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar documentos normativos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
      pl-10 pr-4 py-2 
      bg-white 
      border border-border 
      rounded-lg 
      shadow-sm 
      text-sm text-foreground 
      placeholder:text-muted-foreground
      focus:border-primary focus:ring-2 focus:ring-primary/20
      transition-all
    "
            />
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {totalDocuments} documento{totalDocuments !== 1 ? "s" : ""}{" "}
            encontrado{totalDocuments !== 1 ? "s" : ""}
            {Object.keys(groupedDocuments).length > 0 &&
              ` en ${Object.keys(groupedDocuments).length} categoría${
                Object.keys(groupedDocuments).length !== 1 ? "s" : ""
              }`}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {Object.entries(CATEGORIESNORMATIVITY).map(
            ([categoryKey, categoryInfo]) => {
              const documents = groupedDocuments[categoryKey] || [];
              if (documents.length === 0) return null;

              return (
                <Card key={categoryKey} className="bg-card border-border">
                  <Collapsible
                    open={expandedCategories[categoryKey]}
                    onOpenChange={() => toggleCategory(categoryKey)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader
                        className={`cursor-pointer hover:bg-accent/50 transition-colors border-l-4 ${categoryInfo.headerColor}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div>
                              <CardTitle className="text-lg font-semibold text-card-foreground">
                                {categoryInfo.name}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">
                                {categoryInfo.description} • {documents.length}{" "}
                                documento
                                {documents.length !== 1 ? "s" : ""}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={`${categoryInfo.color} border text-xs`}
                            >
                              {categoryKey}
                            </Badge>
                            {expandedCategories[categoryKey] ? (
                              <ChevronUp className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {documents.map((doc, index) => (
                            <div
                              key={index}
                              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border/50 hover:border-border transition-colors bg-card/50"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start gap-3">
                                  <FileText className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                                  <div className="min-w-0 flex-1">
                                    <h3 className="font-medium text-card-foreground leading-snug text-pretty mb-2">
                                      {doc.title}
                                    </h3>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                      <Calendar className="h-3 w-3" />
                                      <span>
                                        {formatDate(doc.documentDate)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 flex-shrink-0">
                                <a
                                  href={getPrivateUrl(doc.fileData.url)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center h-8 px-3 text-sm rounded-md border border-border text-foreground hover:bg-accent transition-colors"
                                aria-label="Ver documento"
                                >
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Ver
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            }
          )}
        </div>

        {/* Empty State */}
        {totalDocuments === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No se encontraron documentos
            </h3>
            <p className="text-muted-foreground">
              Intenta ajustar el término de búsqueda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Normatividad;
