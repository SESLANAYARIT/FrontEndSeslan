import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const AnythingFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-muted/30 rounded-full flex items-center justify-center">
                <Clock className="w-12 h-12 text-muted-foreground/60" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent/20 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance">
              Próximamente
              <br />
              <span className="text-muted-foreground">contenido nuevo</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed text-pretty">
              Estamos preparando el contenido.
            
              <br />Estaremos listos pronto.
            </p>
          </div>

          {/* Suggestions */}
          <div className="space-y-8">
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-medium">Mientras tanto:</p>
              <ul className="space-y-1 text-muted-foreground/80">
                <li>• Mantente al tanto de las actualizaciones</li>
                <li>• Explora otras secciones disponibles</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-muted/50 px-8 py-3 rounded-full font-medium transition-all duration-200 bg-transparent"
                asChild
              >
                <Link to="/" aria-label="volver al inicio">Volver al inicio</Link>
              </Button>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="pt-12">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />
          </div>
        </div>
      </main>
    </div>
  );
};
