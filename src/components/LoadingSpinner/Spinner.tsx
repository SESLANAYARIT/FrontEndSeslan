import { cn } from "@/lib/utils"

interface SpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Spinner({ size = "md", className }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-muted-foreground/20 border-t-foreground",
        sizeClasses[size],
        className,
      )}
      role="status"
      aria-label="Cargando"
    >
      <span className="sr-only">Cargando...</span>
    </div>
  )
}

// Componente para mostrar spinner con texto opcional
export function LoadingSpinner({ text, size = "md", className }: SpinnerProps & { text?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Spinner size={size} />
      {text && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  )
}

// Componente para overlay de carga completa
export function LoadingOverlay({ text = "Cargando...", className }: { text?: string; className?: string }) {
  return (
    <div
      className={cn("absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm", className)}
    >
      <LoadingSpinner text={text} size="lg" />
    </div>
  )
}
