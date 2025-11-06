export interface DocumentsCET {
    normas: Norma[];
}

export interface Norma {
    topico:   string;
    title:    string;
    fileData: FileData;
}

export interface FileData {
    name: string;
    url:  string;
}
