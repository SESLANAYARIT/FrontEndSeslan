import { NewsCategory } from "src/interfaces/principal.interfaces";




export const categoryColors = {
  [NewsCategory.CAPACITACIONES]:
    "bg-[#E5A823]/20 text-[#E5A823] dark:bg-[#E5A823]/30 dark:text-[#E5A823]",
  [NewsCategory.COMITE_COORDINADOR]:
    "bg-[#235B4E]/20 text-[#235B4E] dark:bg-[#235B4E]/30 dark:text-[#235B4E]",
  [NewsCategory.EVENTOS]:
    "bg-[#4D4D4D]/20 text-[#4D4D4D] dark:bg-[#4D4D4D]/30 dark:text-[#CCCCCC]",
  [NewsCategory.POLITICA_ESTATAL_ANTICORRUPCION]:
    "bg-[#9D2449]/20 text-[#9D2449] dark:bg-[#9D2449]/30 dark:text-[#FFB6C1]",
  [NewsCategory.SISTEMA_LOCAL_ANTICORRUPCION]:
    "bg-[#235B4E]/20 text-[#235B4E] dark:bg-[#235B4E]/30 dark:text-[#A3C9B6]",
  [NewsCategory.SECRETARIA_EJECUTIVA]:
    "bg-[#9D2449]/20 text-[#9D2449] dark:bg-[#9D2449]/30 dark:text-[#F28CA4]",
};

export const categoryLabels = {
  [NewsCategory.CAPACITACIONES]: "Capacitaciones",
  [NewsCategory.EVENTOS]: "Eventos",
  [NewsCategory.COMITE_COORDINADOR]: "Comité Coordinador",
  [NewsCategory.POLITICA_ESTATAL_ANTICORRUPCION]:
    "Política Anticorrupción",
  [NewsCategory.SISTEMA_LOCAL_ANTICORRUPCION]: "Sistema Local Anticorrupción",
  [NewsCategory.SECRETARIA_EJECUTIVA]: "Secretaría Ejecutiva",
};