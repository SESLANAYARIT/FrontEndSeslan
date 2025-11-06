import { Link } from "react-router-dom";

 const AvisoPrivacidadTalleres = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        AVISO DE PRIVACIDAD INTEGRAL DE TALLERES, DIPLOMADOS Y EVENTOS
        PRESENCIALES O VIRTUALES
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Responsable del Tratamiento
        </h2>
        <p className="text-justify leading-relaxed">
          La Secretaría Ejecutiva del Sistema Local Anticorrupción del Estado de
          Nayarit (SESLAN), con domicilio en Padre Enrique Mejía 121, Colonia
          Centro, C.P. 63000, en la Ciudad de Tepic, es el responsable del
          tratamiento de los datos personales que nos proporcionen, los cuales
          serán protegidos conforme a lo dispuesto por la Ley de Protección de
          Datos Personales en Posesión de los Sujetos Obligados del Estado de
          Nayarit y demás normativa aplicable.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Finalidad del Tratamiento
        </h2>
        <p className="text-justify leading-relaxed mb-2">
          Sus datos personales serán utilizados para las siguientes finalidades:
        </p>
        <ul className="list-disc list-inside mb-2 text-justify">
          <li>Registrar su participación.</li>
          <li>Generar listas de participantes y validación de los mismos.</li>
          <li>
            Emitir constancias de participación y/o asistencia de acuerdo a la
            modalidad.
          </li>
          <li>
            Establecer comunicación para seguimiento o aclaración de dudas.
          </li>
          <li>Actualización de base de datos.</li>
          <li>
            Generar estadísticas para informes obligatorios del SESLAN ante
            otros organismos.
          </li>
        </ul>
        <p className="text-justify leading-relaxed">
          Finalidades adicionales (opcionales): envío de material de exposición
          o apoyo e invitaciones a futuros eventos. Si no desea que sus datos
          sean tratados para estas finalidades adicionales, puede manifestarlo
          en:{" "}
          <a
            href="mailto:vinculación.interinstitucional@seslan.gob.mx"
            className="text-primary hover:underline"
            aria-label="vinculación.interinstitucional@seslan.gob.mx"
          >
            vinculación.interinstitucional@seslan.gob.mx
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Datos Personales Recabados
        </h2>
        <p className="text-justify leading-relaxed">
          Se solicitarán los siguientes datos personales: nombre, lugar de
          procedencia, último grado de estudio, institución laboral, área de
          adscripción, cargo público, correo electrónico/institucional, teléfono
          celular, sexo, entidad federativa y firma. No se recaban datos
          personales sensibles.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Fundamento Legal</h2>
        <p className="text-justify leading-relaxed">
          Artículos 110 inciso F) numeral 1, 2, 14 y 15 de la Ley de
          Transparencia y Acceso a la Información Pública del Estado de Nayarit;
          artículos 16, 17, 18 fracción I incisos a), b) y c), 100, fracciones
          IV, XIII y XV de la Ley de Protección de Datos Personales en Posesión
          de los Sujetos Obligados del Estado de Nayarit.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Transferencia de Datos Personales
        </h2>
        <p className="text-justify leading-relaxed">
          No se realizarán transferencias que requieran su consentimiento, salvo
          aquellas necesarias para atender requerimientos de información de una
          autoridad competente debidamente fundados y motivados.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Derechos ARCO</h2>
        <p className="text-justify leading-relaxed">
          Usted tiene derecho a conocer qué datos personales se tienen de usted,
          cómo se utilizan y las condiciones de uso (Acceso), solicitar
          correcciones (Rectificación), eliminarlos (Cancelación) u oponerse a
          su uso (Oposición). Estos derechos se conocen como derechos ARCO,
          conforme al Título Tercero, Capítulo I de la Ley de Protección de
          Datos Personales en Posesión de los Sujetos Obligados del Estado de
          Nayarit.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Datos de la Unidad de Transparencia
        </h2>
        <p className="text-justify leading-relaxed">
          Domicilio: Padre Enrique Mejía 121, Colonia Centro, C.P. 63000, Ciudad
          de Tepic, Nayarit. <br />
          Teléfono: (311) 6884398 Ext. 1004 <br />
          Correo electrónico institucional:{" "}
          <a
            href="mailto:transparencia@seslan.gob.mx"
            className="text-primary hover:underline"
            aria-label="transparencia@seslan.gob.mx"
          >
            transparencia@seslan.gob.mx
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Cambios del Aviso de Privacidad
        </h2>
        <p className="text-justify leading-relaxed">
          En caso de realizar alguna modificación al aviso de privacidad, se le
          hará de su conocimiento a través del portal de la Secretaría:{" "}
          <Link
            to="/"
            className="text-primary hover:underline"
            aria-label="https://www.seslan.gob.mx"
          >
            https://www.seslan.gob.mx
          </Link>
        </p>
      </section>
    </div>
  );
};

export default AvisoPrivacidadTalleres;