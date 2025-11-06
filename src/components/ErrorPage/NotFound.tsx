import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Archive } from "lucide-react";
import styles from "./NotFound.module.css";
import { Link, useLocation } from "react-router-dom";
export default function NotFound() {
  const location = useLocation();
  const pathAfterDomain = location.pathname;
  return (
    <main
      className={`${styles["notfound-theme"]} min-h-screen flex items-center justify-center px-4 py-12`}
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
            <div className="relative bg-background border-2 border-accent/30 rounded-full p-6">
              <MapPin
                className="h-12 w-12 md:h-16 md:w-16 text-accent"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-balance leading-tight tracking-tight text-foreground">
            Nos hemos mudado
          </h1>

          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        {/* Description */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Esta página ya no existe, pero no te preocupes.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Hemos renovado completamente nuestro sitio web. Todo el contenido
            que buscas está disponible en nuestra nueva plataforma, con una
            experiencia mejorada y más funcionalidades.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="group text-base md:text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <Link to="/" aria-label="nuevo sitio">
              Visitar nuevo sitio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group text-base md:text-lg px-8 py-6 rounded-full border-2 hover:bg-accent/10 bg-transparent animate-pulseCustom"
            asChild
          >
            <Link to={`${import.meta.env.VITE_OLD_URL_PAGE}${pathAfterDomain}`} target="_blank" aria-label="información anterior">
              Ver información anterior
              <Archive className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Additional info */}
        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            ¿Tienes algún enlace guardado? Actualízalo para acceder directamente
            a nuestro nuevo sitio.
          </p>
        </div>
      </div>
    </main>
  );
}
