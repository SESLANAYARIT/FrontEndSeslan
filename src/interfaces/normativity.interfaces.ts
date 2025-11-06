export interface NormativityDocument {
  active: boolean
  title: string
  documentDate: string
  tipoNormatividad: string
  fileData: {
    url: string
  }
}

export const CATEGORIESNORMATIVITY = {
  ESTATAL: {
    name: "Normativa Estatal",
    description: "Leyes y reglamentos del ámbito estatal",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    headerColor: "border-l-blue-500",
  },
  INTERNACIONAL: {
    name: "Normativa Internacional",
    description: "Tratados y convenios internacionales",
    color: "bg-green-500/20 text-green-400 border-green-500/30",
    headerColor: "border-l-green-500",
  },
  NACIONAL: {
    name: "Normativa Nacional",
    description: "Leyes y reglamentos federales",
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    headerColor: "border-l-purple-500",
  },
  INTERNA: {
    name: "Normativa Interna",
    description: "Manuales y procedimientos internos",
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    headerColor: "border-l-orange-500",
  },
}