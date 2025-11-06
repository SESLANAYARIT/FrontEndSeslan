import { Link } from "react-router-dom";

 const AvisoPrivacidadSimplificado = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Aviso de Privacidad Simplificado
      </h1>

      <p className="mb-4 text-justify text-foreground leading-relaxed">
        Los datos personales que nos proporcione serán protegidos conforme a lo
        dispuesto por la Ley General de Protección de Datos Personales en
        Posesión de Sujetos Obligados y demás normatividad aplicable. El
        <strong> (denominación del responsable)</strong> desea obtener sus datos
        de contacto a fin de <strong>(finalidades del tratamiento)</strong>. No
        se realizarán transmisiones de datos personales contenidos en el
        directorio que se genere. Cuando se realicen transferencias de datos
        personales se deberá informar:
      </p>

      <ul className="list-disc list-inside mb-4 text-justify">
        <li>
          Las autoridades, poderes, entidades, órganos y organismos
          gubernamentales de los tres órdenes de gobierno y las personas físicas
          o morales a las que se transfieren los datos personales.
        </li>
        <li>Las finalidades de estas transferencias.</li>
      </ul>

      <p className="mb-4 text-justify">
        El área responsable de dicho directorio es{" "}
        <strong>
          (Área del responsable del resguardo de los datos personales)
        </strong>
        . Usted podrá ejercer sus Derechos ARCO (acceso, rectificación,
        cancelación y oposición) en{" "}
        <strong>
          (Los mecanismos y medios disponibles para ejercer la negativa al
          tratamiento)
        </strong>
        .
      </p>

      <p className="mb-4 text-justify">
        Usted podrá consultar el aviso de privacidad integral en{" "}
        <Link
          to="/PIntegral"
          target="_blank"
          className=" hover:underline "
          rel="noopener noreferrer"
          title="Aviso de Privacidad Integral"
          aria-label="Aviso de Privacidad Integral"
        >
          https://www.seslan.gob.mx/PIntegral
        </Link>{" "}
        o bien, de manera presencial en las instalaciones del SESLAN, con
        domicilio en Padre Enrique Mejía 121, Col. Centro, C.P. 63000, Ciudad
        de Tepic, directamente en la{" "}
        <strong>(Unidad administrativa que posee los datos personales)</strong>.
      </p>
    </div>
  );
};

export default AvisoPrivacidadSimplificado;