export interface CCDocuments {
  convenios: Convenio[];
  slf: Convenio[];
  planes: Convenio[];
  informes: Convenio[];
}

export interface Convenio {
  title: string;
  topico: string;
  fileData: FileData;
}

interface FileData {
  name: string;
  url: string;
}
