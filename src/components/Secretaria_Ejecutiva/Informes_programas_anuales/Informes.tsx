import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Download, FileText, FolderOpen, LucideProps } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPPISecretaria } from "src/api/calls";
import { getPrivateUrl } from "../../../utils/getPrivateUrl";
import {
  Informe,
  PPIInterface,
} from "src/interfaces/PPI_Secretaria.interfaces";

const Informes = () => {
  const [data, setData] = useState<PPIInterface>({
    planes: [],
    informes: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPPISecretaria();
        setData(response);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, []);

  function InformeCard({ informe }: { informe: Informe }) {
    return (
      <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg font-semibold text-balance leading-tight">
                {informe.title}
              </CardTitle>
            </div>
            <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <CardDescription className="text-sm text-muted-foreground">
              {informe.fileData.name}
            </CardDescription>
            <Link
              to={getPrivateUrl(informe.fileData.url)}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center h-8 px-3 text-xs rounded-md border border-input bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              title="Descargar informe"
            >
              <Download className="h-3 w-3 mr-1.5" />
              Descargar
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  function SectionHeader({
    title,
    icon: Icon,
    count,
  }: {
    title: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    count: number;
  }) {
    return (
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {count} {count === 1 ? "documento" : "documentos"} disponible
            {count === 1 ? "" : "s"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl space-y-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Planes e Informes
          </h1>
        </div>

        {/* Planes Section */}
        {data.planes.length > 0 && (
          <section className="rounded-xl border border-border/40 bg-muted/20 p-8 shadow-sm">
            <SectionHeader
              title="Planes"
              icon={FolderOpen}
              count={data.planes.length}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.planes.map((plan, index) => (
                <InformeCard key={`plan-${index}`} informe={plan} />
              ))}
            </div>
          </section>
        )}

        {/* Separador visual */}
        {data.planes.length > 0 && data.informes.length > 0 && (
          <div className="relative flex items-center my-8">
            <div className="flex-grow border-t border-primary/30"></div>
            <div className="flex-grow border-t border-primary/30"></div>
          </div>
        )}

        {/* Informes Section */}
        {data.informes.length > 0 && (
          <section className="rounded-xl border border-border/40 bg-muted/10 p-8 shadow-sm">
            <SectionHeader
              title="Informes"
              icon={FileText}
              count={data.informes.length}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.informes.map((informe, index) => (
                <InformeCard key={`informe-${index}`} informe={informe} />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {data.planes.length === 0 && data.informes.length === 0 && (
          <div className="text-center py-20">
            <FileText className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No hay documentos disponibles
            </h3>
            <p className="text-muted-foreground">
              Los planes e informes aparecerán aquí cuando estén disponibles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Informes;
