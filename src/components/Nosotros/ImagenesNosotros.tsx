import administracion from "../../assets/webp/Nosotros/DirectorAdministracion.webp";
import secretario from "../../assets/webp/Nosotros/Secretario.webp";
import juridico from "../../assets/webp/Nosotros/DirectorAsuntosJuridicos.webp";
import vinculacion from "../../assets/webp/Nosotros/DirectorVinculacion.webp";
import servicios from "../../assets/webp/Nosotros/DirectorServicios.webp";
import politicas from "../../assets/webp/Nosotros/DirectorPoliticas.webp";
import ImagenNosotrosItem from "./ImagenNosotrosItem";

export const ImagenesNosotros = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Conoce al equipo del SESLAN
        </h2>
        <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto">
          Estos son algunos integrantes del equipo de profesionales que integran
          a la Secretaría Ejecutiva del Sistema Local Anticorrupción.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <ImagenNosotrosItem
            source={secretario}
            title="Secretario Ejecutivo"
            name="M.D. Juan Carlos Alvarado Vázquez"
            
          />
          <ImagenNosotrosItem
            source={administracion}
            title="Directora de Administación"
            name="Lic. Marisol Ramírez Pérez"
          />
          <ImagenNosotrosItem
            source={juridico}
            title="Director de Asuntos Jurídicos"
            name="Lic. Cynthia Stephania Rivas Varela"
          />
          <ImagenNosotrosItem
            source={vinculacion}
            title="Director de Vinculación Interinstitucional"
            name="Lic. Edgar Nayar Cárdenas  Hernández"
          />
          <ImagenNosotrosItem
            source={servicios}
            title="Director de Servicios Tecnologicos y Plataforma Digital Local"
            name="Ing. Alexis Torres Acosta"
          />
          <ImagenNosotrosItem
            source={politicas}
            title="Director de Riesgos y Plítica Publica"
            name="Dra. Myrna Mendez Martinez"
          />
        </div>
      </div>
    </section>
  );
};
