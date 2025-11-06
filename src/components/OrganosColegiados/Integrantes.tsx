import asen from "../../assets/webp/Comite/asen.webp";
import bg from "../../assets/webp/Comite/bg.webp";
import cpcnay from "../../assets/webp/Comite/cpcnay.webp";
import FGE from "../../assets/webp/Comite/FGE.webp";
import ITAI from "../../assets/webp/Comite/ITAI.webp";
import pj from "../../assets/webp/Comite/pj.webp";
import tja from "../../assets/webp/Comite/tja.webp";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export const Integrantes = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Integrantes</h3>
      <ul className="space-y-4">
        {[
          {
            name: "M.C.A. Eulalia Salas Ayon",
            position:
              "Auditora Superior de la Auditoria Superior del Estado de Nayarit",
            avatar: asen,
            fallback: "ASEN",
          },
          {
            name: "Vacante",
            position:
              "Titular de la Fiscalía Especializada en Combate a la Corrupción",
            avatar: FGE,
            fallback: "FECC",
          },
          {
            name: "C.P.A. Gladis Flores Contreras",
            position:
              "Titular de la Secretaría Para la Honestidad y Buena Gobernanza",
            avatar: bg,
            fallback: "BG",
          },
          {
            name: "Dra. Rosa María Domínguez González",
            position:
              "Representante del Consejo de la Judicatura del Poder Judicial del Estado de Nayarit",
            avatar: tja,
            fallback: "TJA",
          },
          {
            name: "Mtra. Alejandra Langarica Ruiz",
            position:
              "Comisionada Presidenta del Instituto de Transparencia, Acceso a la Información y Protección de Datos Personales, del Estado de Nayarit",
            avatar: ITAI,
            fallback: "ITAI",
          },
          {
            name: "Mtra. Irma Carmina Cortés Hernández",
            position:
              "Magistrada Presidenta del Tribunal de Justicia Administrativa del Estado de Nayarit",
            avatar: pj,
            fallback: "PJ",
          },
          {
            name: "Lic. Francisco Javier García Pérez",
            position: "Presidente del Comité de Participación Ciudadana",
            avatar: cpcnay,
            fallback: "CPC",
          },
        ].map((person, idx) => (
          <li
            key={idx}
            className="grid grid-cols-[auto_1fr] gap-4 items-stretch"
          >
            <Avatar className="self-start">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.fallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-between h-full">
              <p className="font-medium text-lg">{person.name}</p>
              <p className="text-muted-foreground text-justify leading-relaxed">
                {person.position}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
