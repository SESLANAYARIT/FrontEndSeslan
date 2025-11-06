import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckIcon } from "../../../assets/icons/CheckIcon";
import { getCETDocuments, getSessionDocuments } from "src/api/calls";
import { Committee, Session } from "src/interfaces/sessions.interfaces";
import { useEffect, useState } from "react";
import { BasicTable, SessionsTable } from "src/utils";
import { DocumentsCET } from "src/interfaces/cet.interface";

const ComiteEtica = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [documents, setDocuments] = useState<DocumentsCET>({
    normas: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sessionsResponse, documentResponse] = await Promise.all([
          getSessionDocuments(Committee.CET),
          getCETDocuments(),
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
          <h2 className="text-2xl font-bold">Comité de Ética</h2>
          <p className="text-muted-foreground text-justify">
            El comité de ética tienen como objetivo incentivar la ética y la
            integridad de los servidores públicos a través de principios y
            valores, así como prevenir conflictos de interés en los servidores
            públicos, formando una identidad profesional compartida y un sentido
            de orgullo de pertenencia al servicio público. Cada dependencia y
            entidad del Gobierno del Estado de Nayarit cuenta con un comité de
            ética donde podrás presentar sugerencias, denuncias y
            reconocimientos en materia de ética.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Responsabilidades</h3>
          <ul className="space-y-4 text-muted-foreground">
            {[
              "Garantizar la confidencialidad de los datos personales a los que tenga acceso con motivo de las denuncias, inclusive después de que hubiere concluido su encargo dentro del Comité de Ética",
              "Efectuar las acciones necesarias a fin de garantizar el anonimato que, en su caso,requieran las personas denunciantes",
              "Denunciar cualquier vulneración al Código de Ética o Código de Conducta que advirtieran;",
              "Proponer acciones de fomento a la integridad y ética pública dirigidas a unidades administrativas en lo específico o a las Dependencias y Entidades en lo general, y dar seguimiento a su cumplimiento",
              "Propiciar un ambiente de respeto, colaboración y cordialidad entre las personas integrantes del Comité de Ética",
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
          <TabsTrigger value="topic2">Sesiones</TabsTrigger>
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
          <SessionsTable sessions={sessions} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComiteEtica;
