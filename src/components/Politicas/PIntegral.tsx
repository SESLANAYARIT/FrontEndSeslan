import { Link } from "react-router-dom";

const PIntegral = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-8 text-justify text-foreground">
      {/* Intro */}
      <p>
        La Secretaría Ejecutiva del Sistema Local Anticorrupción del Estado de
        Nayarit (SESLAN), con fundamento en los artículos 3 fracción ll, 20
        fracción III, 21 párrafo segundo, 26, 28 y 69 de la Ley General de
        Protección de Datos Personales en Posesión de sujetos Obligados y los
        artículos 4 fracción ll, 17, 18, 19, 24, 26, 28, 77 y 81 de la Ley de
        Protección de Datos Personales en Posesión de Sujetos Obligados para el
        Estado de Nayarit, pone a su disposición el siguiente:
      </p>

      <h1 className="text-2xl font-bold text-center">
        AVISO DE PRIVACIDAD INTEGRAL
      </h1>

      {/* I */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          I. La denominación y domicilio del responsable.
        </h2>
        <p>
          La Secretaría Ejecutiva del Sistema Local Anticorrupción del Estado de
          Nayarit, con domicilio en Avenida Benito Juárez, Número 180, Poniente,
          Colonia Centro, C.P. 63000, en la Ciudad de Tepic, es responsable del
          tratamiento de los datos personales que nos proporcione, los cuales
          serán protegidos conforme a lo dispuesto por la Ley de Protección de
          Datos Personales en Posesión de los Sujetos Obligados del Estado de
          Nayarit y demás normativa que resulte aplicable.
        </p>
      </div>

      {/* II */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          II. Las finalidades del tratamiento para las cuales se obtienen los
          datos personales.
        </h2>
        <p>
          Los datos personales que recaba esta SESLAN podrán ser utilizados para
          las siguientes finalidades concernientes con la relación jurídica o la
          prestación de servicios y trámites de:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Asesoría para el ejercicio del derecho de acceso a la información y
            protección de datos personales.
          </li>
          <li>
            Trámite de las solicitudes de acceso a la información y de
            protección de datos personales.
          </li>
          <li>Registro de visitantes y buzón de sugerencias de la SESLAN.</li>
          <li>
            Generación de información estadística e indicadores, a efecto de
            desarrollar proyectos de políticas públicas en materia de prevención
            y combate a la corrupción.
          </li>
        </ul>
      </div>

      {/* III */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          III. Los datos personales que serán sometidos a tratamiento,
          identificando aquellos que son sensibles.
        </h2>
        <p>
          Para las finalidades mencionadas en el apartado II del presente aviso,
          se solicitarán los siguientes datos personales: nombre, edad, sexo,
          sector económico en el que se desempeña, municipio de residencia,
          correo electrónico y/o domicilio para efecto de recibir notificaciones
          y en su caso, teléfono y firma.
        </p>
        <p>
          La SESLAN informa a los titulares de la información que no recabará ni
          someterá a tratamiento información considerada sensible en términos de
          las leyes de la materia.
        </p>
      </div>

      {/* IV */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          IV. La transferencia de datos personales.
        </h2>
        <p>
          Se comunica al titular de la información que no se realizará
          transferencia de datos personales que requiera consentimiento, salvo
          aquellas que procedan en términos de lo dispuesto en el artículo 16
          párrafo segundo de la Constitución Política de los Estados Unidos
          Mexicanos, en relación con los artículos 22, 65, 66 y 70 de la Ley
          General de Protección de Datos Personales en Posesión de Sujetos
          Obligados, así como los artículos 29, 77, 80 y 81 de la Ley de
          Protección de Datos Personales en Posesión de Sujetos Obligados para
          el Estado de Nayarit.
        </p>
      </div>

      {/* V */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          V. El fundamento legal que faculta al responsable para llevar a cabo
          el tratamiento.
        </h2>
        <p>
          La SESLAN dará tratamiento a los datos personales referidos en el
          apartado III de este aviso, en términos de lo previsto en los
          artículos 68, 121, 122, 124, 128, 142, 144 y 145 de la Ley General de
          Transparencia y Acceso a la Información Pública; 49, 52, 94, 95, 96,
          97 y 103 de la Ley General de Protección de Datos Personales en
          Posesión de sujetos Obligados; 85, 89, 91, 123 fracción 4 de la Ley de
          Transparencia y Acceso a la Información Pública del Estado de Nayarit,
          53, 54, 55, 58, 67, 94, 95 fracción III, de la Ley de Protección de
          Datos Personales en Posesión de Sujetos Obligados para el Estado de
          Nayarit, 9 fracciones IV, V, VI y XII, 25, 31 fracción II y 35
          fracciones IV y IX de la Ley del Sistema Local Anticorrupción del
          Estado de Nayarit; así como 18 fracciones VII y XIV, 25 fracción II y
          III del Estatuto Orgánico de la Secretaría Ejecutiva del Sistema Local
          Anticorrupción del Estado de Nayarit.
        </p>
      </div>

      {/* VI */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          VI. Los mecanismos y medios disponibles para que el titular pueda
          manifestar su negativa para el tratamiento de datos personales.
        </h2>
        <p>
          En términos de lo previsto en los artículos 153 y 154 fracción III de
          la Ley de Transparencia y Acceso a la Información Pública del Estado
          de Nayarit, 48, 49, 50, 51, 52, 103, 104, 106, 105, 114, 116 de la Ley
          de Protección de Datos Personales en Posesión de Sujetos Obligados
          para el Estado de Nayarit, se puede hacer directamente en la Unidad de
          Transparencia de la Secretaría Ejecutiva del Sistema Local
          Anticorrupción del Estado de Nayarit, ubicada en Avenida Benito Juárez
          número 180 Zona Centro, Tepic, Nayarit o al correo electrónico:
        </p>
        <p className="font-mono text-primary">transparencia@seslan.gob.mx</p>
        <p>
          Si Usted no manifiesta expresamente su oposición o negativa para el
          tratamiento de sus datos personales, se entenderá que ha otorgado
          consentimiento tácito para ello.
        </p>
      </div>

      {/* VII */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          VII. Ejercicio de derechos ARCO.
        </h2>
        <p>
          El procedimiento para presentar solicitudes para el ejercicio de los
          derechos ARCO y el trámite del recurso de revisión son los
          establecidos en los Títulos Tercero y Noveno de la Ley General de
          Protección de Datos Personales en Posesión de Sujetos Obligados...
        </p>
        <p>
          Para el ejercicio, deberá presentar la solicitud ante la Unidad de
          Transparencia de la SESLAN, a través de un escrito libre, formatos,
          medios electrónicos o cualquier otro medio que establezca la SESLAN, o
          bien, vía Plataforma Nacional de Transparencia.
        </p>
        <p className="font-mono text-primary">transparencia@seslan.gob.mx</p>
      </div>

      {/* VIII */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          VIII. Domicilio de la Unidad de Transparencia.
        </h2>
        <p>
          La Unidad de Transparencia de la SESLAN se encuentra en Padre Enrique
          Mejía 121, zona centro, Tepic, Nayarit. Para cualquier solicitud de
          acceso a la información o derechos ARCO, se podrá acudir directamente
          o bien a través de la Plataforma Nacional de Transparencia:
          <a
            href="http://www.plataformadetransparencia.org.mx/"
            className="text-primary underline ml-1"
            aria-label="Plataforma Nacional de Transparencia"
          >
            plataformadetransparencia.org.mx
          </a>
        </p>
      </div>

      {/* IX */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          IX. Cambios al aviso de privacidad.
        </h2>
        <p>
          La SESLAN podrá modificar el presente Aviso de Privacidad y sus
          prácticas respecto al manejo de datos personales; cualquier
          modificación sustancial será comunicada a través de su página oficial:
          <Link
            to="/"
            className="text-primary underline ml-1"
            aria-label="www.seslan.gob.mx"
          >
            www.seslan.gob.mx
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PIntegral;
