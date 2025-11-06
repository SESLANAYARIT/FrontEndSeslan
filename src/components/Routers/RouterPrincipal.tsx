import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Root";
import { ErrorPagePrincipal } from "../ErrorPage/ErrorPagePrincipal";
import NotFound from "../ErrorPage/NotFound";

// SOLO la página principal se carga de inmediato
import { Principal } from "../Principal/Principal";

// TODO lo demás es lazy load
import { loadable } from "../Loadable/loadable";

// Páginas "importantes" pero NO críticas - también lazy
const About = loadable(() => import("../Nosotros/About"));
const Noticias = loadable(() => import("../Publicaciones/Noticias/Noticias"));
const Noticia = loadable(() => import("../Publicaciones/Noticias/Noticia"));
const Convocatorias = loadable(
  () => import("../Publicaciones/Convocatorias/Convocatorias")
);
const Articulo33 = loadable(
  () => import("../Transparencia/Articulo33/Articulo33")
);
const ArticuloIndividual = loadable(
  () =>
    import("../Transparencia/Articulo33/ArticuloIndividual/ArticuloIndividual")
);

// Resto de páginas
const ConvCarCom = loadable(
  () => import("../Secretaria_Ejecutiva/Convenios_CartasCompromiso/ConvCarCom")
);
const Comite = loadable(() => import("../Transparencia/Comite/Comite"));
const CuentaPublica = loadable(
  () => import("../Financieros/CuentaPublica/CuentaPublica")
);
const Sevac = loadable(() => import("../Financieros/Sevac/Sevac"));
const ComiteCoordinador = loadable(
  () => import("../OrganosColegiados/ComiteCoordinador/ComiteCoordinador")
);
const OrganoDeGobierno = loadable(
  () => import("../OrganosColegiados/OrganoDeGobierno/OrganoDeGobierno")
);
const ComisionEjecutiva = loadable(
  () => import("../OrganosColegiados/ComisionEjecutiva/ComisionEjecutiva")
);
const Informes = loadable(
  () => import("../Secretaria_Ejecutiva/Informes_programas_anuales/Informes")
);
const ComiteEtica = loadable(
  () => import("../Secretaria_Ejecutiva/Comite_Etica/ComiteEtica")
);
const Normatividad = loadable(
  () => import("../Secretaria_Ejecutiva/Normatividad/Normatividad")
);
const AvisoPrivacidadSimplificado = loadable(
  () => import("../Politicas/Simplificado")
);
const AvisoPrivacidadTalleres = loadable(
  () => import("../Politicas/Especifico")
);
const PIntegral = loadable(() => import("../Politicas/PIntegral"));
const PoliticasUsoPrivacidad = loadable(() => import("../Politicas/Seguridad"));

export const RouterPrincipal = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPagePrincipal />,
      children: [
        {
          path: "",
          element: <Principal />,
          index: true,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "noticias",
          element: <Noticias />,
          children: [
            {
              path: ":slug",
              element: <Noticia />,
            },
          ],
        },
        {
          path: "convocatorias",
          element: <Convocatorias />,
        },
        {
          path: "articulo33",
          element: <Articulo33 />,
        },
        {
          path: "articulo33/:slug",
          element: <ArticuloIndividual />,
        },
        {
          path: "comite",
          element: <Comite />,
        },
        {
          path: "cuentaPublica",
          element: <CuentaPublica />,
        },
        {
          path: "sevac",
          element: <Sevac />,
        },
        {
          path: "c_coordinador",
          element: <ComiteCoordinador />,
        },
        {
          path: "o_gobierno",
          element: <OrganoDeGobierno />,
        },
        {
          path: "c_ejecutiva",
          element: <ComisionEjecutiva />,
        },
        {
          path: "informes_Seslan",
          element: <Informes />,
        },
        {
          path: "comite_Etica",
          element: <ComiteEtica />,
        },
        {
          path: "ConCc",
          element: <ConvCarCom />,
        },
        {
          path: "seslan_normatividad",
          element: <Normatividad />,
        },
        {
          path: "PIntegral",
          element: <PIntegral />,
        },
        {
          path: "PSimplificado",
          element: <AvisoPrivacidadSimplificado />,
        },
        {
          path: "PEspecificoTalleres",
          element: <AvisoPrivacidadTalleres />,
        },
        {
          path: "PUsoSeguridad",
          element: <PoliticasUsoPrivacidad />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
