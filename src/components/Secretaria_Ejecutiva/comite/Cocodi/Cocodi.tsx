import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckIcon } from "../../../../assets/icons/CheckIcon";
import { getCocodiDocuments, getSessionDocuments } from "src/api/calls";
import { Committee, Session } from "src/interfaces/sessions.interfaces";
import { useEffect, useState } from "react";
import { BasicTable, SessionsTable } from "src/utils";
import { DocumentsComites } from "src/interfaces/cet.interface";

const ComiteCocodi = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [documents, setDocuments] = useState<DocumentsComites>({
    normas: [],
    planes: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sessionsResponse, documentResponse] = await Promise.all([
          getSessionDocuments(Committee.COCODI),
          getCocodiDocuments(),
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
            Comité de Control de Desempeño Institucional
          </h2>
          <p className="text-muted-foreground text-justify">
            El COCODI tiene por objeto establecer las Disposiciones Generales en
            Materia de Control Interno, que la Secretaría Ejecutiva del Sistema
            Local Anticorrupción, deberán observar para el establecimiento,
            supervisión, evaluación, actualización y mejora continua.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Responsabilidades</h3>
          <ul className="space-y-4 text-muted-foreground">
            {[
              "Garantizar la confidencialidad de la información técnica, financiera y administrativa a la que se tenga acceso durante las sesiones, especialmente en lo relativo a hallazgos de auditoría y riesgos institucionales no solventados",

              "Efectuar las acciones necesarias para asegurar que los mecanismos de control interno identifiquen y mitiguen riesgos de corrupción o ineficiencia antes de que afecten el patrimonio público",

              "Denunciar ante los Órganos Internos de Control cualquier irregularidad, desvío de recursos o incumplimiento grave de metas que se detecte durante el análisis del desempeño institucional",

              "Proponer acciones de mejora al Sistema de Control Interno dirigidas a fortalecer la eficiencia de las unidades administrativas, estableciendo indicadores claros para dar seguimiento a su cumplimiento",

              "Propiciar un ambiente de análisis crítico y profesional entre sus integrantes, basado en la evidencia de datos y el respeto a la normativa vigente, evitando sesgos personales en la toma de decisiones",
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

export default ComiteCocodi;
