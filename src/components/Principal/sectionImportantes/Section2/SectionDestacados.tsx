/// <reference types="vite-plugin-svgr/client" />
import PLATAFORMA from "../../../../assets//svg/plataforma.svg?react";
import { FacebookIcon } from "../../../../assets/icons/FacebookIcon";
import { SocialX } from "../../../../assets/icons/SocialX";
import SESLANEDUCA from "../../../../assets//svg/SESLAN_SESLAN-EDUCA.svg?react";
import { Link } from "react-router-dom";

export const SectionDestacados = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center items-stretch">
      {/* Sitios de interés */}
      <div className="flex flex-col gap-4 items-center h-full">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Sitios de interés
        </h2>
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          <Link
            className="rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
            to="https://cursos.pdlseslan.mx/"
            aria-label="SESLAN EDUCA"
          >
            <SESLANEDUCA width="8rem" height="5rem" />
          </Link>
          <Link
            className="rounded-md p-3 hover:bg-accent hover:text-accent-foreground flex items-center gap-2"
            to="https://pdlseslan.mx/"
            aria-label="SESLAN PLATAFORMA"
          >
            <PLATAFORMA width="8rem" height="5rem" />
          </Link>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="flex flex-col gap-4 items-center h-full">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Nuestras redes sociales
        </h2>
        <div className="grid grid-cols-3 gap-4 justify-items-center items-center">
          <Link
            className="flex items-center justify-center rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
            to="https://x.com/seslanayarit"
            aria-label="SESLAN X"
          >
            <SocialX />
          </Link>
          <Link
            className="flex items-center justify-center rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
            to="https://www.facebook.com/SESLANayarit"
            aria-label="SESLAN Facebook"
          >
            <FacebookIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionDestacados;
