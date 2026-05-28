import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckIcon } from "../../../../assets/icons/CheckIcon";
import { getArchivosDocuments, getSessionDocuments } from "src/api/calls";
import { Committee, Session } from "src/interfaces/sessions.interfaces";
import { useEffect, useState } from "react";
import { BasicTable, SessionsTable } from "src/utils";
import { DocumentsComites } from "src/interfaces/cet.interface";

const ComiteArchivo = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [documents, setDocuments] = useState<DocumentsComites>({
    normas: [],
    planes: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sessionsResponse, documentResponse] = await Promise.all([
          getSessionDocuments(Committee.CCA),
          getArchivosDocuments(),
        ]);
        setSessions(sessionsResponse);
        setDocuments(documentResponse);
      } catch (error) {
        console.error("Error al obtener las sesiones:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-8 px-4 py-8 sm:px-6 md:px-8 lg:px-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Grupo Interdisciplinario de Archivo
          </h2>
          <p className="text-muted-foreground text-justify">
            El grupo interdisciplinario de archivo tiene como objeto, coadyuvar
            en el análisis de los procesos y procedimientos institucionales que
            dan origen a la documentación que integran los expedientes de cada
            serie documental, con el fin de colaborar con las áreas o unidades
            administrativas productoras de la documentación en el
            establecimiento de los valores documentales, vigencias, plazos de
            conservación y disposición documental durante el proceso de
            elaboración de las fichas técnicas de valoración de la serie
            documental y que, en conjunto, conforman el catálogo de disposición
            documental.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Responsabilidades</h3>
          <ul className="space-y-4 text-muted-foreground">
            {[
              "Garantizar la integridad y conservación de los documentos de archivo que contienen evidencia de las funciones y atribuciones de la institución, asegurando su disponibilidad para la rendición de cuentas",
              "Efectuar la valoración documental de las series y subseries, determinando con rigor técnico sus valores administrativos, legales, fiscales o históricos para establecer sus plazos de conservación",
              "Denunciar cualquier sustracción, alteración o eliminación indebida de documentos y expedientes que formen parte del patrimonio documental, contraviniendo la Ley General de Archivos",
              "Proponer criterios de organización y descripción archivística que faciliten la localización expedita de la información, y dar seguimiento a la correcta implementación del Cuadro General de Clasificación",
              "Propiciar la colaboración técnica entre las áreas de planeación, jurídica, tecnologías de la información y transparencia para asegurar que los procesos de gestión documental sean transversales",
              "Vigilar que los procesos de baja documental y transferencia secundaria se realicen bajo los procedimientos normados, evitando la pérdida de información con valor histórico para la sociedad",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <CheckIcon
                  className="flex-shrink-0 mt-1"
                  style={{ color: "var(--accent)" }}
                />
                <span className="flex-1 text-justify">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Tabs defaultValue="topic1" className="pt-10">
        <TabsList>
          <TabsTrigger value="topic1">Normas</TabsTrigger>
          <TabsTrigger value="topic2">Planes</TabsTrigger>
          <TabsTrigger value="topic3">Sesiones</TabsTrigger>
        </TabsList>
        <TabsContent value="topic1">
          <BasicTable
            data={documents.normas.map((convenio) => {
              return {
                name: convenio.title,
                url: convenio.fileData.url,
              };
            })}
          />
        </TabsContent>

        <TabsContent value="topic2">
          <BasicTable
            data={documents.planes.map(({ title, fileData }) => {
              return {
                name: title,
                url: fileData.url,
              };
            })}
          />
        </TabsContent>

        <TabsContent value="topic3">
          <SessionsTable sessions={sessions} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComiteArchivo;
