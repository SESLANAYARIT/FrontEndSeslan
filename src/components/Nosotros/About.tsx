import SeslanGobierno from "../../assets/webp/SeslanGobierno.webp";
import PDFDesRojo from "../../assets/svg/PDFDesRojo.svg?react";
import { ImagenesNosotros } from "./ImagenesNosotros";

const About = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="py-6 md:py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="justify-self-center">
            <h2 className="text-3xl font-bold tracking-tighter text-center">
              ¿Quiénes Somos?
            </h2>
            <p className="mt-4 text-muted-foreground text-center">
              La Secretaría Ejecutiva tiene como función principal ser un órgano
              de apoyo técnico y de generar los insumos técnicos necesarios para
              el debido desempeño de las atribuciones legales del Comité
              Coordinador, quien es responsable de aprobar, diseñar, promover y
              evaluar la Política Nacional y la particular del Estado de
              Nayarit, en materia de corrupción.
            </p>
          </div>
          <img
            src={SeslanGobierno}
            className="justify-self-center"
            width="60%"
            loading="lazy"
            height="auto"
          />
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center">
            Misión
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto">
            El propósito del Sistema Local Anticorrupción es establecer
            mecanismos de coordinación entre las autoridades del Estado, los
            municipios y la ciudadanía para establecer, coordinar y evaluar la
            política anticorrupción en el Estado. A través de la implementación
            de principios, fundamentos generales y la implementación de
            políticas públicas para la prevención, detección y sanción de faltas
            administrativas y actos de corrupción. De esta forma, se fomenta una
            cultura de la legalidad e integridad que fomente una fiscalización y
            control de los recursos públicos en beneficio de la sociedad.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center">
            Visión
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto">
            Establecer al Sistema como un medio que frene la corrupción. A
            través de una interacción sistemática entre autoridades y miembros
            de la sociedad, se fortalezca el diálogo constructivo en la toma de
            decisiones que impacten en la elaboración de políticas públicas
            contra la impunidad, la arbitrariedad y otras condiciones que
            propicien la permanencia de la corrupción y de faltas
            administrativas, que se deben erradicar mediante la implementación
            de acciones y proyectos concretos en materia anticorrupción.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center">
            Valores
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto">
            Todo servidor público debe tener en cuenta el interés público en
            cuanto al desempeño de su empleo, cargo, comisión o funciones, las
            necesidades y demandas de la sociedad, en contraposición a la
            satisfacción colectiva.
          </p>
        </div>
      </section>
      <ImagenesNosotros />
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold tracking-tighter">
            Descaga el Organigrama
          </h2>
          <p className="text-muted-foreground max-w-md text-center">
            Descarga la estructura completa del SESLAN clickeando en el boton de
            abajo.
          </p>
          <a
            href="https://drive.google.com/file/d/1oOJ1qF32ymh-Df9UTWoNSJhLPYyezX7x/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            aria-label="Descargar Organigrama"
          >
            <PDFDesRojo className="h-6 w-6" />
            Descargar PDF
          </a>
        </div>
      </section>
    </div>
  );
};
export default About;
