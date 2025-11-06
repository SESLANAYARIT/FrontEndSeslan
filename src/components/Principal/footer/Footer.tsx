import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../assets/icons/FacebookIcon";
import { MailIcon } from "../../../assets/icons/MailIcon";
import { PhoneIcon } from "../../../assets/icons/PhoneIcon";
import { SocialX } from "../../../assets/icons/SocialX";

export const Footer = () => {
  return (
    <footer className="py-12 text-muted-foreground mt-12 border-t border-border">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            Secretaría Ejecutiva del Sistema Local Anticorrupción de Nayarit
          </h4>
          <address className="not-italic">
            Padre Enrique Mejía 121
            <br />
            Centro, 63000 Tepic, Nay.
          </address>
          <div className="space-y-2">
            <p>
              <PhoneIcon className="mr-2 inline-block h-5 w-5 align-middle" />
              311 489 3557
            </p>
            <p>
              <MailIcon className="mr-2 inline-block h-5 w-5 align-middle" />
              contacto@seslan.gob.mx
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Accesos Rápidos</h4>
          <nav className="grid grid-rows-4 space-y-2">
            <Link
              to="/"
              className="hover:underline"
              aria-label="Home"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Home
            </Link>
            <Link
              to="about"
              aria-label="About"
              className="hover:underline"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Nosotros
            </Link>
            <Link to="https://pdlseslan.mx/" className="hover:underline">
              Plataforma Digital
            </Link>
            <Link
              to="c_coordinador"
              className="hover:underline"
              aria-label="Comité Coordinador"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Comité Coordinador
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Legal</h4>
          <nav className="grid grid-rows-4 space-y-2">
            <Link
              to="PIntegral"
              className="hover:underline"
              aria-label="Aviso de Privacidad Integral"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Aviso de Privacidad Integral
            </Link>
            <Link
              to="PSimplificado"
              className="hover:underline"
              aria-label="Aviso de Privacidad Simplificado"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Aviso de Privacidad Simplificado
            </Link>
            <Link
              to="PEspecificoTalleres"
              className="hover:underline"
              aria-label="Aviso de Privacidad Especifico"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Aviso de Privacidad Especifico
            </Link>
            <Link
              to="PUsoSeguridad"
              className="hover:underline"
              aria-label="Politica de Seguridad"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Politica de Seguridad
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Siguenos en nuestras redes</h4>
          <div className="flex space-x-4">
            <Link
              to="https://x.com/seslanayarit"
              className="text-muted-foreground hover:text-primary"
              aria-label="Red Social X"
            >
              <SocialX />
            </Link>
            <Link
              to="https://www.facebook.com/SESLANayarit"
              className="text-muted-foreground hover:text-primary"
              aria-label="Red Social Facebook"
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-sm text-justify">
            La Secretaría Ejecutiva del Sistema Local Anticorrupción de Nayarit
            trabaja para fortalecer la transparencia, la rendición de cuentas y
            la confianza ciudadana, mediante acciones que impulsan un gobierno
            abierto y cercano a la sociedad.
          </p>
        </div>
      </div>
      <div className="mt-12 border-t border-border pt-6 text-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} Secretaría Ejecutiva del Sistema
          Local Anticorrupción
        </p>
      </div>
    </footer>
  );
};
