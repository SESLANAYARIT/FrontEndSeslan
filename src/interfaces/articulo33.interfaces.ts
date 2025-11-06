export interface CardsInfo33 {
    name:   string;
    slug:   string;
    data:   Year[];
    _count: Count;
}

export interface Count {
    data:        number;
    subsections: number;
}

export interface Year {
    year: number;
}

export enum Period {
  ANUAL = "ANUAL",
  S1 = "S1",
  S2 = "S2",
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
  Q4 = "Q4",
  B1 = "B1",
  B2 = "B2",
  B3 = "B3",
  B4 = "B4",
  B5 = "B5",
  B6 = "B6",
}

  export const getPeriodLabel = (period: Period): string => {
    const labels: Record<Period, string> = {
      [Period.ANUAL]: "Anual",
      [Period.S1]: "Semestre 1",
      [Period.S2]: "Semestre 2",
      [Period.Q1]: "Trimestre 1",
      [Period.Q2]: "Trimestre 2",
      [Period.Q3]: "Trimestre 3",
      [Period.Q4]: "Trimestre 4",
      [Period.B1]: "Bimestre 1",
      [Period.B2]: "Bimestre 2",
      [Period.B3]: "Bimestre 3",
      [Period.B4]: "Bimestre 4",
      [Period.B5]: "Bimestre 5",
      [Period.B6]: "Bimestre 6",
    }
    return labels[period]
  }


    export const getPeriodOrder = (period: Period): number => {
    const order: Record<Period, number> = {
      [Period.ANUAL]: 0,
      [Period.S1]: 1,
      [Period.S2]: 2,
      [Period.Q1]: 3,
      [Period.Q2]: 4,
      [Period.Q3]: 5,
      [Period.Q4]: 6,
      [Period.B1]: 7,
      [Period.B2]: 8,
      [Period.B3]: 9,
      [Period.B4]: 10,
      [Period.B5]: 11,
      [Period.B6]: 12,
    }
    return order[period]
  }

  export interface Article33 {
    id:           string;
    name:         string;
    slug:         string;
    createdAt:    Date;
    parentId:     null | string;
    data:         Datum[];
    subsections?: Article33[];
}

export interface Datum {
    id:        string;
    year:      number;
    period:    Period;
    sectionId: string;
    active:    boolean;
    fileId:    string;
    file:      File;
}

export interface File {
    id:         string;
    name:       string;
    size:       number;
    type:       string;
    uploadDate: Date;
    url:        string;
}




  