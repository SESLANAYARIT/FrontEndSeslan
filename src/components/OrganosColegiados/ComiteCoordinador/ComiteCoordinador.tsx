import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckIcon } from "../../../assets/icons/CheckIcon";
import { BasicTable } from "../../../utils/BasicTable";
import { useEffect, useState } from "react";
import { CCDocuments } from "src/interfaces/cc.interfaces";
import { getCCDocuments, getSessionDocuments } from "src/api/calls";
import { SessionsTable } from "src/utils";
import { Committee, Session } from "src/interfaces/sessions.interfaces";
import { Integrantes } from "../Integrantes";

const ComiteCoordinador = () => {
  const [documents, setDocuments] = useState<CCDocuments>({
    convenios: [],
    slf: [],
    planes: [],
    informes: [],
  });
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [documentsResponse, sessionsResponse] = await Promise.all([
          getCCDocuments(),
          getSessionDocuments(Committee.CC),
        ]);

        setDocuments(documentsResponse);
        setSessions(sessionsResponse);
      } catch (error) {
        console.error("Error al obtener los documentos:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-8 px-4 py-8 sm:px-6 md:px-8 lg:px-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Comité Coordinador</h2>
          <p className="text-muted-foreground">
            Es la instancia responsable de definir los mecanismos de
            coordinación entre los integrantes del Sistema Local Anticorrupción
            y tiene bajo su encargo el diseño, promoción y evaluación de
            políticas públicas de combate a la corrupción.
          </p>
        </div>

        <Integrantes />

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Responsabilidades</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <p className="basis-5/6 text-justify">
                Establecer mecanismos de coordinación con los Sistemas
                Municipales Anticorrupción.
              </p>
            </li>
            <li className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <p className="basis-5/6 text-justify">
                Diseñar y promover políticas integrales en materia de
                fiscalización y control de recursos públicos, de prevención,
                control y disuasión de faltas administrativas y hechos de
                corrupción, en especial sobre las causas que los generan.
              </p>
            </li>
            <li className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <p className="basis-5/6 text-justify">
                Determinar los mecanismos de suministro, intercambio,
                sistematización y actualización de la información que sobre
                estas materias generen las instituciones competentes de todos
                los órdenes de gobierno.
              </p>
            </li>
            <li className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <p className="basis-5/6 text-justify">
                Establecer bases y principios para la efectiva coordinación de
                las autoridades de todos los órdenes de gobierno en materia de
                fiscalización y control de recursos públicos.
              </p>
            </li>
            <li className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <p className="basis-5/6 text-justify">
                Elaborar un informe anual que contenga los avances y resultado
                del ejercicio de sus funciones y de la aplicación de políticas y
                programas en la materia.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Tabs defaultValue="topic1" className="pt-10">
        <TabsList>
          <TabsTrigger value="topic1">Convenios</TabsTrigger>
          <TabsTrigger value="topic2">
            Sistema Local de Fiscalización
          </TabsTrigger>
          <TabsTrigger value="topic3">
            Planes y Programas Comité Coordinador
          </TabsTrigger>
          <TabsTrigger value="topic4">Informe</TabsTrigger>
          <TabsTrigger value="topic5">Sesiones</TabsTrigger>
        </TabsList>
        <TabsContent value="topic1">
          <BasicTable
            data={documents.convenios.map((convenio) => {
              return {
                name: convenio.title,
                url: convenio.fileData.url,
              };
            })}
          />
        </TabsContent>
        <TabsContent value="topic2">
          <BasicTable
            data={documents.slf.map((documento) => ({
              name: documento.title,
              url: documento.fileData.url,
            }))}
          />
        </TabsContent>
        <TabsContent value="topic3">
          <BasicTable
            data={documents.planes.map((documento) => ({
              name: documento.title,
              url: documento.fileData.url,
            }))}
          />
        </TabsContent>
        <TabsContent value="topic4">
          <BasicTable
            data={documents.informes.map((documento) => ({
              name: documento.title,
              url: documento.fileData.url,
            }))}
          />
        </TabsContent>
        <TabsContent value="topic5">
          <SessionsTable sessions={sessions} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComiteCoordinador;
