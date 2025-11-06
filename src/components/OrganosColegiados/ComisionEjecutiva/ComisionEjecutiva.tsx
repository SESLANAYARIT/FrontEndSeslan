import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CheckIcon } from "../../../assets/icons/CheckIcon";
import cpcnay from "../../../assets/webp/Comite/cpcnay.webp";
import { useEffect, useState } from "react";
import { Committee, Session } from "src/interfaces/sessions.interfaces";
import { getSessionDocuments } from "src/api/calls";
import { SessionsTable } from "src/utils";
import secretario from "../../../assets/webp/Nosotros/Secretario.webp";

const ComisionEjecutiva = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessionsResponse = await getSessionDocuments(Committee.CE);
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
          <h2 className="text-2xl font-bold">Comisión Ejecutiva</h2>
          <p className="text-muted-foreground">
            Es el órgano técnico auxiliar de la Secretaría Ejecutiva.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Integrantes</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={secretario} />
                <AvatarFallback>SESLAN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Juan Carlos Alvarado Vázquez</p>
                <p className="text-muted-foreground">Secretario Técnico</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={cpcnay} />
                <AvatarFallback>CPC</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">CPC</p>
                <p className="text-muted-foreground">
                  Miembros del Comité de Participación Ciudadana excepto el
                  miembro que funja como presidente
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Responsabilidades</h3>
          <ul className="space-y-4 text-muted-foreground">
            {[
              "Las políticas integrales en materia de prevención, control y disuasión de faltas administrativas y hechos de corrupción, así como de fiscalización y control de recursos públicos.",
              "La metodología para medir y dar seguimiento, con base en indicadores aceptados y confiables, a los fenómenos de corrupción, así como a las políticas públicas integrales en la materia.",
              "Los mecanismos de suministro, intercambio, sistematización y actualización de la información en materia de fiscalización y control de recursos públicos, de prevención, control y disuasión de faltas administrativas y hechos de corrupción.",
              "Las bases y principios para la efectiva coordinación de las autoridades de los órdenes de gobierno en materia de fiscalización y control de los recursos públicos.",
              "El informe anual que contenga los avances y resultados del ejercicio de las funciones y de la aplicación de las políticas y programas en la materia.",
              "Las recomendaciones no vinculantes que serán dirigidas a las autoridades que se requieran.",
              "Analizar y aprobar los informes periódicos que rinda el Secretario Técnico sobre las actividades de la entidad.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <CheckIcon
                  className="flex-shrink-0 mt-1"
                  style={{ color: "var(--accent)" }}
                />
                <span className="text-justify">{item}</span>
              </li>
            ))}
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

export default ComisionEjecutiva;
