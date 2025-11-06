export type FileSessionCategory = "ACUERDO" | "ACTA" | "DOCUMENTO_ADICIONAL";

export interface SessionFile {
  name: string;
  category: FileSessionCategory;
  url: string;
}

export interface Session {
  id: string;
  name: string;
  date: string;
  files: SessionFile[];
}

export const categoryColors: Record<FileSessionCategory, string> = {
  ACUERDO: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  ACTA: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  DOCUMENTO_ADICIONAL:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

export const categoryLabels: Record<FileSessionCategory, string> = {
  ACUERDO: "Acuerdo",
  ACTA: "Acta",
  DOCUMENTO_ADICIONAL: "Doc. Adicional",
};

export enum Committee {
  CC = "CC", //Comite Coordinador
  OG = "OG", //Organo de Gobierno
  CE = "CE", //Comisión Ejecutiva
  CET = "CET", //Comite de etica
  CT = "CT", //Comite Transparencia
  SLF = "SLF", //Sistema Local de Fiscalización
  SA = "SA", // Sistema de Archivos
}
