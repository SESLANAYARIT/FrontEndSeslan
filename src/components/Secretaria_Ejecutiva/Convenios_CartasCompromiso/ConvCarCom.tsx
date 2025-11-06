import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ExternalLink, FileCheck, FileText, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getConveniosCartasCompromiso } from "src/api/calls";
import {
  ConveniosCartasInterface,
  Document,
} from "src/interfaces/ConveniosCartasCompromiso.interface";
import { getPrivateUrl } from "src/utils/getPrivateUrl";

const ConvCarCom = () => {
  const [data, setData] = useState<ConveniosCartasInterface>({
    convenios: [],
    cartasCompromiso: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getConveniosCartasCompromiso();
        setData(response);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) {
      return data;
    }

    return {
      convenios: data.convenios.filter(
        (doc) =>
          doc.title.toLowerCase().includes(query) ||
          doc.fileData.name.toLowerCase().includes(query)
      ),
      cartasCompromiso: data.cartasCompromiso.filter(
        (doc) =>
          doc.title.toLowerCase().includes(query) ||
          doc.fileData.name.toLowerCase().includes(query)
      ),
    };
  }, [data, searchQuery]);
  const totalResults =
    filteredData.convenios.length + filteredData.cartasCompromiso.length;

  const renderDocumentCard = (doc: Document) => (
    <Card
      key={doc.fileData.url}
      className="group hover:shadow-xl hover:border-primary/30 transition-all duration-300 border-border/60 bg-card/50 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg leading-tight mb-2 text-balance group-hover:text-primary transition-colors">
                {doc.title}
              </CardTitle>
              <CardDescription className="text-sm truncate flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                {doc.fileData.name}
              </CardDescription>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="shrink-0 text-xs font-semibold px-3 py-1"
          >
            {doc.topico}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex gap-2.5">
          <Link
            to={getPrivateUrl(doc.fileData.url)}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition-colors duration-200"
            title="Ver Documento"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver Documento
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
          Convenios y Cartas de Compromiso
        </h1>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Card className="mb-8 border-2 shadow-md">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por título o nombre de archivo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-12 text-base border-border/50 focus:border-primary"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                Se encontraron{" "}
                <span className="font-semibold text-foreground">
                  {totalResults}
                </span>{" "}
                documento
                {totalResults !== 1 ? "s" : ""}
              </p>
            )}
          </CardContent>
        </Card>

        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6 pb-3 border-b-2 border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Convenios
            </h2>
            <Badge
              variant="outline"
              className="ml-auto text-base px-3 py-1 font-semibold"
            >
              {filteredData.convenios.length}
            </Badge>
          </div>

          {filteredData.convenios.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredData.convenios.map(renderDocumentCard)}
            </div>
          ) : (
            <Card className="border-dashed border-2">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <FileText className="h-16 w-16 text-muted-foreground/40 mb-4" />
                <p className="text-muted-foreground text-lg">
                  {searchQuery
                    ? "No se encontraron convenios que coincidan con tu búsqueda"
                    : "No hay convenios disponibles"}
                </p>
              </CardContent>
            </Card>
          )}
        </section>

        <section>
          <div className="flex items-center gap-4 mb-6 pb-3 border-b-2 border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Cartas Compromiso
            </h2>
            <Badge
              variant="outline"
              className="ml-auto text-base px-3 py-1 font-semibold"
            >
              {filteredData.cartasCompromiso.length}
            </Badge>
          </div>

          {filteredData.cartasCompromiso.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredData.cartasCompromiso.map(renderDocumentCard)}
            </div>
          ) : (
            <Card className="border-dashed border-2">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <FileCheck className="h-16 w-16 text-muted-foreground/40 mb-4" />
                <p className="text-muted-foreground text-lg">
                  {searchQuery
                    ? "No se encontraron cartas compromiso que coincidan con tu búsqueda"
                    : "No hay cartas compromiso disponibles"}
                </p>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
};

export default ConvCarCom;
