import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckIcon } from "../../../assets/icons/CheckIcon";
// import { BasicTable } from "../../../utils/BasicTable";

const SistemaArchivos = () => {
  // const [openYear, setOpenYear] = useState<null | number>(null);
  return (
    <div className="flex flex-col gap-8 px-4 py-8 sm:px-6 md:px-8 lg:px-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Sistema Archivos</h2>
          <p className="text-muted-foreground">
            Es la instancia responsable de definir los mecanismos de
            coordinación entre los integrantes del Sistema Local Anticorrupción
            y tiene bajo su encargo el diseño, promoción y evaluación de
            políticas públicas de combate a la corrupción.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Integrantes</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>ASEN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-muted-foreground">
                  Titular de la Auditoría Superior del Estado de Nayarit
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>FECC</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Jane Smith</p>
                <p className="text-muted-foreground">
                  Titular de la Fiscalía Especializada en Combate a la
                  Corrupción
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>BG</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Michael Johnson</p>
                <p className="text-muted-foreground">
                  Titular de la Secretaría Para la Honestidad y Buena Gobernanza
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>TJA</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Emily Davis</p>
                <p className="text-muted-foreground">
                  Presidente del Tribunal de Justicia Administrativa del Estado
                  de Nayarit
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Responsabilidades</h3>
          <ul className="space-y-2 text-muted-foreground">
            <div className="flex  gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Establecer mecanismos de coordinación con los Sistemas
                Municipales Anticorrupción.
              </li>
            </div>
            <div className="flex  gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Diseñar y promover políticas integrales en materia de
                fiscalización y control de recursos públicos, de prevención,
                control y disuasión de faltas administrativas y hechos de
                corrupción, en especial sobre las causas que los generan.
              </li>
            </div>
            <div className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Determinar los mecanismos de suministro, intercambio,
                sistematización y actualización de la información que sobre
                estas materias generen las instituciones competentes de todos
                los órdenes de gobierno.
              </li>
            </div>
            <div className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Establecer bases y principios para la efectiva coordinación de
                las autoridades de todos los órdenes de gobierno en materia de
                fiscalización y control de recursos públicos.
              </li>
            </div>
            <div className="flex gap-4">
              <CheckIcon className="basis-1/7" />
              <li className="basis-5/6">
                Elaborar un informe anual que contenga los avances y resultado
                del ejercicio de sus funciones y de la aplicación de políticas y
                programas en la materia.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <Tabs defaultValue="topic1" className="pt-10">
        <TabsList>
          <TabsTrigger value="topic1">Normas</TabsTrigger>
          <TabsTrigger value="topic2">Sesiones</TabsTrigger>
        </TabsList>
        <TabsContent value="topic1">{/* <BasicTable /> */}</TabsContent>
        <TabsContent value="topic2">
          {/* <TableSesions
            openYear={openYear}
            setOpenYear={setOpenYear}
            yearConst={2024}
          /> */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SistemaArchivos;
