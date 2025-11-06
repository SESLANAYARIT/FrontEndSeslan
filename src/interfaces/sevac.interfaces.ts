export enum PeriodSEVAC {
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
  Q4 = "Q4",
}

export interface SevacFileData {
  id: string
  name: string
  size: number
  type: string
  uploadDate: string
  url?: string | null
  sevacDataPoint?: SevacDataPoint | null
}

export interface SevacDataPoint {
  id: string
  year: number
  active?: boolean | null
  period: PeriodSEVAC
  fileId?: string | null
  fileData?: SevacFileData | null
}

export interface GroupedData {
  [year: number]: {
    [period in PeriodSEVAC]?: SevacDataPoint[]
  }
}

export const periodLabels = {
  [PeriodSEVAC.Q1]: "Primer Trimestre",
  [PeriodSEVAC.Q2]: "Segundo Trimestre",
  [PeriodSEVAC.Q3]: "Tercer Trimestre",
  [PeriodSEVAC.Q4]: "Cuarto Trimestre",
}

export const periodShortLabels = {
  [PeriodSEVAC.Q1]: "T1",
  [PeriodSEVAC.Q2]: "T2",
  [PeriodSEVAC.Q3]: "T3",
  [PeriodSEVAC.Q4]: "T4",
}

export const periodColors = {
  [PeriodSEVAC.Q1]: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  [PeriodSEVAC.Q2]: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  [PeriodSEVAC.Q3]: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  [PeriodSEVAC.Q4]: "bg-chart-4/10 text-chart-4 border-chart-4/20",
}

export const periodOrder = [PeriodSEVAC.Q1, PeriodSEVAC.Q2, PeriodSEVAC.Q3, PeriodSEVAC.Q4]