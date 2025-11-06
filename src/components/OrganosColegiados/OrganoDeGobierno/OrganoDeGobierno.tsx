import { CheckIcon } from "../../../assets/icons/CheckIcon";

import { useEffect, useState } from "react";
import { Committee, Session } from "src/interfaces/sessions.interfaces";
import { getSessionDocuments } from "src/api/calls";
import { SessionsTable } from "src/utils";
import { Integrantes } from "../Integrantes";

const OrganoDeGobierno = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessionsResponse = await getSessionDocuments(Committee.OG);
        setSessions(sessionsResponse);
      } catch (error) {
        console.error("Error al obtener las sesiones:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-8 px-4 py-8 sm:px-6 md:px-8 lg:px-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Órgano de Gobierno</h2>
          <p className="text-muted-foreground">
            Es la instancia máxima de administración y dirección de la
            Secretaría Ejecutiva del Sistema Local Anticorrupción.
          </p>
        </div>
        <div className="space-y-4">
          <Integrantes />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Responsabilidades</h3>
          <ul className="space-y-2 text-muted-foreground">
            <div className="flex  gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Nombrar y remover al Secretario Técnico.
              </li>
            </div>
            <div className="flex  gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Establecer las políticas generales de la institución.
              </li>
            </div>
            <div className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Aprobar las políticas en materia de adquisiciones y los estados
                financieros.
              </li>
            </div>
            <div className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Aprobar la estructura básica de la organización.
              </li>
            </div>
            <div className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">Expedir el Estatuto Orgánico.</li>
            </div>
            <div className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Aprobar los programas y presupuestos
              </li>
            </div>
            <div className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Analizar y aprobar los informes periódicos que rinda el
                Secretario Técnico sobre las actividades de la entidad.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t">
        <h3 className="text-2xl font-semibold mb-6">Sesiones</h3>
        <SessionsTable sessions={sessions} />
      </div>
    </div>
  );
};

export default OrganoDeGobierno;
