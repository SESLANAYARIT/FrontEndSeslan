export interface PPIInterface {
    planes:   Informe[];
    informes: Informe[];
}

export interface Informe {
    topico:   string;
    title:    string;
    fileData: FileData;
}

export interface FileData {
    name: string;
    url:  string;
}
