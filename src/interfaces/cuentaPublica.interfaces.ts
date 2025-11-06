export interface CuentaPublicaInterface {
    id:       string;
    year:     number;
    period:   string;
    fileData: FileData;
}

export interface FileData {
    name:       string;
    size:       number;
    uploadDate: Date;
    url:        string;
}

export enum PeriodPA {
  ANUAL = "ANUAL",
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
  Q4 = "Q4",
}
