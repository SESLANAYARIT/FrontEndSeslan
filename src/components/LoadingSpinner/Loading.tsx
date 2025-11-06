import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoadingOverlay } from "./Spinner";

export const Loading = () => {
  return (
    <Card className="relative min-h-[200px]">
      <CardHeader>
        <CardTitle>Overlay de Carga</CardTitle>
        <CardDescription>Para cubrir contenido completo</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Este contenido está siendo cargado...
        </p>
      </CardContent>
      <LoadingOverlay text="Cargando contenido..." />
    </Card>
  );
};
