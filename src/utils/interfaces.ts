export interface TableTransparenciaProps {
    openYear: number | null;
    setOpenYear: React.Dispatch<React.SetStateAction<number | null>>;
    yearConst: number;
    typeMonthAct: typeMonth;
  }
  
  export enum typeMonth {
    "Unico" = 1,
    "Bimestral" = 2,
    "Trimestral" = 3,
    "Semestral" = 6,
    "Anual" = 12,
  }

  export enum typeOfDocument {
    "PDF" = "pdf",
    "CSV" = "csv",
    "XLSX" = "xlsx",
    "XLS" = "xls",
  }