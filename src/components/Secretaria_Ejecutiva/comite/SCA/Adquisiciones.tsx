import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckIcon } from "../../../../assets/icons/CheckIcon";
import { getAdquisicionesDocuments, getSessionDocuments } from "src/api/calls";
import { Committee, Session } from "src/interfaces/sessions.interfaces";
import { useEffect, useState } from "react";
import { BasicTable, SessionsTable } from "src/utils";
import { DocumentsComites } from "src/interfaces/cet.interface";

const ComiteAdquisiciones = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [documents, setDocuments] = useState<DocumentsComites>({
    normas: [],
    planes: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sessionsResponse, documentResponse] = await Promise.all([
          getSessionDocuments(Committee.SCA),
          getAdquisicionesDocuments(),
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
          <h2 className="text-2xl font-bold">SubComité de Adquisiciones</h2>
          <p className="text-muted-foreground text-justify">
            El Subcomité de adquisiciones es el encargado de dar trámite así
            como llevar a cabo el desahogo de los procedimientos de adquisición
            de bienes, servicios y arrendamientos, tomando en cuenta la
            estructura, funciones y demás criterios que al efecto se determinen
            dentro de la Secretaría Ejecutiva del Sistema Local Anticorrupción
            de Nayarit.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Responsabilidades</h3>
          <ul className="space-y-4 text-muted-foreground">
            {[
              "Garantizar la imparcialidad y transparencia en los procedimientos de contratación, asegurando que el acceso a la información sobre licitaciones y adjudicaciones sea equitativo para todos los participantes",
              "Efectuar la revisión exhaustiva de las bases de licitación, invitaciones y solicitudes de cotización para evitar requisitos que limiten la libre participación o favorezcan indebidamente a proveedores específicos",
              "Denunciar cualquier conflicto de interés que se detecte entre las personas integrantes del Subcomité, los servidores públicos del área requirente o los proveedores que participen en los procesos de contratación",
              "Proponer estrategias de optimización del gasto público, tales como compras consolidadas o el uso de contratos marco, y dar seguimiento estricto al cumplimiento de las condiciones de entrega y calidad pactadas",
              "Propiciar una toma de decisiones colegiada y técnica, fundamentando cada dictamen en criterios de economía, eficacia, eficiencia, imparcialidad y honradez que aseguren las mejores condiciones para el Estado",
              "Vigilar que la planeación de las adquisiciones esté alineada estrictamente al presupuesto autorizado y al Programa Anual de Adquisiciones, evitando compromisos financieros que excedan la capacidad de la institución",
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

export default ComiteAdquisiciones;
